import { WebConfig, SERVICE_NAME, PAGE_NAME } from '../config';

const global = window;

export const throttle = (fn, delay) => {
    let timer = null;
    return function(...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
};

export const getScrollTop = () => {
    let scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
        ({ scrollTop } = document.documentElement);
    } else if (document.body) {
        ({ scrollTop } = document.body);
    }
    return scrollTop;
};

export const getLink = link => {
    if (`${link}`.length > 1 && /^\/[^/]/.test(`${link}`)) {
        return `${window.rootPath}${link}`;
    }
    return link;
};

export const getParameter = (search, name) => {
    const [, query = ''] = search.split('?');
    const [hit = ''] = query.split('&').filter(item => name === item.split('=')[0]);
    const [, value = ''] = hit.split('=');
    return value;
};

//base_url，如果没有？，去#号前
export const getBaseUrl = () => {
    const url = window.location.href;
    let base_url = '';
    if (url.indexOf('?') == -1) {
        base_url = url.split('#')[0];
    } else {
        base_url = url.split('?')[0];
    }
    console.log(base_url);
    return base_url;
};

export const isJsonString = str => {
    try {
        if (typeof JSON.parse(str) === 'object') {
            return true;
        }
    } catch (e) {
        console.log(e);
    }
    return false;
};

export const generateUrl = (url, params) => {
    return [
        url,
        '?',
        Object.keys(params)
            .map(key => [key, params[key]].join('='))
            .join('&')
    ].join('');
};

export const isPlainObject = obj => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};

export const isFunction = val => val && Object.prototype.toString.call(val) === '[object Function]';

// 转成树形结构
export const formatTreeData = (list, key, parentKey) => {
    var i,
        l,
        key = key,
        parentKey = parentKey;
    if (!key || key == '' || !list) return [];
    if (Array.isArray(list)) {
        var r = [];
        var tmpMap = {};
        for (i = 0, l = list.length; i < l; i++) {
            tmpMap[list[i][key]] = list[i]; // 引用值修改
        }
        for (i = 0, l = list.length; i < l; i++) {
            if (tmpMap[list[i][parentKey]] && list[i][key] != list[i][parentKey]) {
                if (!tmpMap[list[i][parentKey]].children) {
                    tmpMap[list[i][parentKey]].children = [];
                }
                tmpMap[list[i][parentKey]].children.push(list[i]);
            } else {
                r.push(list[i]);
            }
        }
        return r;
    } else {
        return [list];
    }
};

// 提供的页面工具类
export const PageUtils = (function(_global) {
    var serviceGateWay;
    var pageGateWay;
    return {
        getPageGateWay() {
            if (pageGateWay) return pageGateWay;
            var basepath = WebConfig && WebConfig.PAGE_GATEWAY;
            var serviceGateWay = WebConfig && WebConfig.SERVICE_GATEWAY;
            //未配置 PAGE_GATEWAY，且serviceGateWay为相对路径，以SERVICE_GATEWAY为准
            if (!basepath && serviceGateWay && serviceGateWay.indexOf('/') == 0) {
                basepath = serviceGateWay;
            }
            //如果没有配置，获取当前路径的第一级目录
            if (!basepath) {
                basepath = '/';
            }
            pageGateWay = basepath;
            return pageGateWay;
        },
        getServiceGateWay: function() {
            if (serviceGateWay) return serviceGateWay;
            var basepath = WebConfig && WebConfig.SERVICE_GATEWAY;
            //如果没有配置
            if (!basepath) {
                basepath = '/';
            }
            //拼接全路径
            // 如果不是相对路径
            if (basepath.indexOf('/') == 0) {
                basepath = window.location.origin + basepath;
            } else if (basepath.indexOf('http:') == -1 || basepath.indexOf('https:') == -1) {
                //没带协议,以当前页面的protocol为准
                basepath = window.location.protocol + '//' + basepath;
            }
            serviceGateWay = basepath;
            return serviceGateWay;
        },
        /**
         * 获取服务地址
         * @param path
         * @returns {string}
         */
        getServiceUrl: function(path) {
            // 完整路径，直接返回
            if (path.indexOf('http:') == 0 || path.indexOf('https:') == 0) {
                return path;
            }
            return PageUtils.getServiceGateWay() + SERVICE_NAME + '/' + path;
        },
        /**
         * 获取页面地址
         * @param path
         * @returns {string}
         */
        getPageUrl: function(path) {
            return PageUtils.getPageGateWay() + PAGE_NAME + '/' + path;
        }
    };
})(global);
