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
