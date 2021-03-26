/*
    封装axios
 */

import axios from 'axios';
import qs from 'qs';
import { isPlainObject, getParameter } from './util';
import store from '../store';

function goLogin() {
    const url = window.location.href;
    const query = window.location.search;
    const appName = getParameter(query, 'appName');
    const terminal = getParameter(query, 'terminal');
    localStorage.removeItem('token');
    const base_url = url.split('?')[0];
    // console.log(window.location.href.split('?')[0]);
    window.location.href = `${base_url}login?appName=${appName}&terminal=${terminal}`;
}

// loading, count防止同时多个请求，执行多次loading
let loadingCount = 0;
const openLoading = cb => {
    if (!loadingCount) {
        store.commit('setIsLoad', true);
    }
    loadingCount++;
    // beforeSend
    cb && cb();
};
const closeLoading = () => {
    loadingCount--;
    if (!loadingCount) {
        store.commit('setIsLoad', false);
    }
};

const request = () => {
    const instance = axios.create();

    instance.interceptors.request.use(
        config => {
            const { url, params, data, method, headers, beforeSend } = config;
            if (!params) {
                config.params = {};
            }
            // beforeSend
            openLoading(beforeSend);
            // 无需token访问
            // if (!url.includes('auth/users/login')) {
            //     let token = {};
            //     try {
            //         token = JSON.parse(localStorage.token);
            //     } catch (e) {
            //         console.log(e);
            //         goLogin();
            //     }
            //     const { accessToken = '' } = token;
            //     config.params.accessToken = accessToken;
            //     config.headers = Object.assign({}, headers, { accessToken });
            // }
            // post数据config.data
            if (data && isPlainObject(data) && ['post', 'put'].includes(method)) {
                config.data = qs.stringify(data);
                if (!headers) {
                    config.headers = {};
                }
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
            }
            return config;
        },
        error => {
            closeLoading();
            Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        response => {
            // 没有模板, res是html片段
            if (typeof response.data != 'string') {
                console.log(typeof response.data);
                const { error, retCode } = response.data;
                if (retCode != 0) {
                    if (error.code == 'BIZ.UN_AUTHN') {
                        goLogin();
                    } else {
                        alert(error.message);
                    }
                    closeLoading();
                    return Promise.reject(new Error(error.message));
                }
            }

            closeLoading();
            return response.data;
        },
        error => {
            if (error.response) {
                const { data = {}, status } = error.response;
                let message = `HTTP ERROR: ${status}`;
                if (typeof data === 'string') {
                    message = data;
                } else if (typeof data === 'object') {
                    message = data.message;
                }
                if ([401, 403].includes(status) && ['unknown user!', 'token invalid!', 'token expired!'].includes(message)) {
                    goLogin();
                }
                return Promise.reject(error.response);
            }
            closeLoading();
            console.log(error);
            return Promise.reject(error);
        }
    );

    return instance;
};

export default request();
