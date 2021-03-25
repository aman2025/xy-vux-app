/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import axios from 'axios';
import qs from 'qs';
import { isPlainObject, generateUrl } from './util';
import store from '../store';

function goLogin() {
    const url = window.location.href;
    console.log(url);
    localStorage.removeItem('token');

    const base_url = url.split('#')[0];
    window.location.href = `${base_url}#/login`;
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
            const { error, retCode } = response.data;
            var query = window.location.search;
            console.log(query);
            if (retCode != 0 && error.code == 'BIZ.UN_AUTHN') {
                //未登录
                // goLogin();
                console.log(error.message);
                return Promise.reject(new Error(error.message));
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
