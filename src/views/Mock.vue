<template>
    <div>
        <h3>mock</h3>
    </div>
</template>

<script>
import request from '../utils/request';

export default {
    components: {},
    data() {
        return {
            title: '测试mock',
            namespaces: [],
            menus: []
        };
    },
    mounted() {
      this.getMenu();
    },
    methods: {
        // 菜单
        getMenu() {
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/load-authorized-modules';
            const data = {
                appName: 'bms'
            };
            const requestMenu = (data) => request.post(url, data);
            requestMenu(data)
                .then((res) => {
                    console.log(res.result);
                    this.menus = this.formatTreeData(res.result)
                })
                .catch(() => {});
        },

        // 看板
        getBoard() {
            const url = 'https://mockapi.eolinker.com/SutL6fnebf3f5cc51d7c280161df78cb41f31295b541957/mee/load-menus';
            const params = {
                menuCode: 'board'
            };
            const requestBoard = (option) => request.get(url, option);
            requestBoard({
                params
            })
                .then((res) => {
                    console.log(res);
                })
                .catch(() => {});
        },
        // 转成树形机构
        formatTreeData(list) {
          var i,
              l,
              key = 'moduleCode',
              parentKey = 'parentModuleCode';
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
        }
    }
};
</script>

