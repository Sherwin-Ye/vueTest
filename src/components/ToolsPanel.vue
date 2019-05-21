<style lang="less">
  .ToolsPanel {
    padding: 16px;

    .item-menu:hover {
      background: #009bdc;
    }

    .item-menu {
      display: flex;
      align-content: center;
      text-align: center;
      margin: 16px 0;
      background: #ff7914;
      border-radius: 8px;
      padding: 8px 0;
      font-size: 14px;
      width: 150px;
      @media screen and(max-width: 414px){
        width: 80px;
      }

      .icon-box {
        display: flex;
        width: 100%;
        color: white;
        flex-direction: column;

        i {
          min-width: 40px;
          width: 100%;
          margin: 8px auto;
          text-align: center;
          font-size: 24px;
        }

        .o_caption {
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }

  }
</style>
<template>
  <div class="ToolsPanel">
    <Row type="flex" justify="start" :gutter="16">
      <Col v-for="(menu, index) in menus" :key="menu.name">
        <a class="item-menu" href="#" @click.prevent.stop="goIt(menu)">
          <div class="icon-box">
            <Icon :type="menu.icon" class="ye-icon" v-if="menu.icon"></Icon>
            <i :class="['iconfont', 'ye-icon', 'ivu-icon', menu.image]" v-else></i>
            <div class="o_caption">{{menu.name}}</div>
          </div>
        </a>
      </Col>
    </Row>
  </div>
</template>

<script>
  export default {
    name: 'ToolsPanel',
    data() {
      return {
        menus: [{
          image: 'iconkanguo',
          name: '竞品透视',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-contact',
          name: '黑号验号',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-cart',
          name: '收藏加购',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-ionitron',
          name: '电商思想库',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-bug',
          name: '标签透视',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-bulb',
          name: '电商军火库',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-planet',
          name: '电商情报局',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-bug',
          name: '关键词卡位',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-heart',
          name: '卡猜你喜欢',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          icon: 'md-heart',
          name: 'SKU销量监控',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          image: 'iconjiankong',
          name: '竞品监控',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          image: 'iconzhiding',
          name: '评价监控',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        }, {
          image: 'iconzhiding',
          name: '指数转换',
          click:()=> {
            this.$Message.info('正在开发中');
          }
        },]
      }
    },
    methods: {
      goIt(app) {
        if (app.url) {
          window.open(app.url, '_blank');
        } else if (app.path) {
          this.$emit('close');
          this.$router.push({
            path: app.path,
            query: app.query
          })
        } else if (app.click) {
          app.click(app);
        }
      }
    }
  }
</script>
