<style lang="less" type="text/less">
  .side-menu-panel{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    a{
      color: white;
    }
  }
  .ivu-card{
    background: #ff7914 !important;
  }
  .small-menu-layout{
    display: flex;
    align-self: flex-end;
    background: #ff7914;
    color:white;
    border-radius: 8px;
    width: 56px;
    height: 56px;
    font-size: 16px;
    :hover{
      cursor: pointer;
    }
    div{
      margin: auto;
    }
  }
  .small-menu-active-layout{
    display: flex;
    align-self: flex-end;
    flex-direction: column;
    background: #ff7914;
    color:white;
    border-radius: 8px;
    width: 138px;
    height: 60px;
    text-align: center;
    :hover{
      cursor: pointer;
    }
    .expand-title{
      height: 32px;
      padding: 6px 0;
      margin: 0;
      font-size: 16px;
    }
    .expand-btn{
      border-radius: 4px;
      height: 22px;
      background: #f8f8f8;
      color: #ff7914;
      padding: 2px;
      margin: 2px;
      font-size: 14px;
    }
  }
  .all-menu-layout{
    background: #ff7914;
    color:white;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .side-title{
      display: flex;
      padding: 0 2px;
      flex-grow: 0;
      flex-shrink: 0;
      a{
        color: white;
      }
      div:nth-child(2){
        margin: 4px auto;
        font-size: 16px;
        display: flex;
        flex:1 1 auto;
        justify-content:center;
      }
      i{
        min-width: 10px;
        margin: 4px 0;
        text-align: center;
        font-size: 18px;
      }
    }
    .side-main{
      background: #F1F1F1;
      border-radius: 5px;
      display: flex;
      flex:1 1 auto;
      flex-direction: column;
      color: #333333;
      flex-grow: 1;
      flex-shrink: 1;
      .side-main-btns{
        overflow-y:scroll;
        height: 320px;
      }
      .ivu-col{
        border-radius: 5px;
        font-size: 12px;
        div{
          display: flex;
        }
        .icon-box{
          display: flex;
          color: #5b6270;
          flex-direction: column;
          i{
            min-width: 40px;
            width: 100%;
            margin: 8px auto;
            text-align: center;
            font-size: 24px;
          }
        }
        .row-gray{
          background: #F9F9F9;
        }
        .row-white{
          background: white;
        }
      }
      .ivu-col:nth-child(2n) div{
        border-radius: 5px;
        margin-left: 1px;
        margin-bottom: 2px;
      }
      .ivu-col:nth-child(2n-1) div{
        border-radius: 5px;
        margin-right: 1px;
        margin-bottom: 2px;
      }
      div{
        justify-content:center;
        text-align: center;
      }
      .tool-nav-btn{
        border-radius: 40px;
        color: white;
        margin: 10px 8px 20px 8px;
        background: #0097D6;
        padding: 4px 0;
        text-align: center;
        font-size: 12px;
      }
    }
    .side-bottom{
      text-align: center;
      margin-top: 8px;
      font-size: 8px;
      flex-grow: 0;
      flex-shrink: 0;
    }
  }
</style>
<template>
  <div class="side-menu-panel">
    <Card :padding="0" class="small-menu-layout" @mouseenter.native="onMoveIn" v-show="showMode.isShowSmall">
      <div>魔盒</div>
    </Card>
    <Card :padding="0" class="small-menu-active-layout" @click.native="onShowALL" @mouseleave.native="onMoveOut" v-show="showMode.isShowSmallActive">
      <div class="expand-title">驭宝魔盒</div>
      <div class="expand-btn">- 点击展开 -</div>
    </Card>
    <Card class="all-menu-layout" :padding="2" v-show="showMode.isShowAll">
      <Row class="side-title">
        <a href="#" @click.prevent.stop="onRetract"><Icon type="ios-arrow-down" /></a>
        <div>驭宝魔盒</div>
        <a href="#" @click.prevent.stop="onAccount"><Icon type="ios-contact" /></a>
      </Row>
      <div class="side-main">
        <Row class="side-main-btns">
          <Col span="12" v-for="(menu, index) in menus" :key="menu.name">
            <a href="#" @click.prevent.stop="goIt(menu)">
              <div :class="[getMenuItemClass(index), 'icon-box']">
                <Icon :type="menu.icon" class="ye-icon" v-if="menu.icon"></Icon>
                <i :class="['iconfont', 'ye-icon', 'ivu-icon', menu.image]" v-else></i>
                <div class="o_caption">{{menu.name}}</div>
              </div>
            </a>
          </Col>
        </Row>
        <a href="#" class="tool-nav-btn"><span>- 工具导航 -</span></a>
      </div>
      <div class="side-bottom">2016-2019 © YubaoData</div>
    </Card>
  </div>
</template>
<script>
  export default {
    methods:{
      goIt(app) {
        if (app.url) {
          window.open(app.url,'_blank');
          // window.location.href = app.url
        } else if (app.path) {
          this.$emit('close');
          this.$router.push({
            path: app.path,
            query: app.query
          })
        } else if (app.click) {
          app.click(app);
        }
      },
      onAccount(){//点击账号

      }
      ,
      getMenuItemClass(index){
        if (index%4 === 0 || index % 4 ===1){
          return 'row-white'
        } else {
          return 'row-gray'
        }
      },
      onRetract(){
        this.showMode.isShowAll = false;
        this.showMode.isShowSmall = true;
        this.showMode.isShowSmallActive = false;
      },
      onShowALL(){
        this.showMode.isShowAll = true;
        this.showMode.isShowSmall = false;
        this.showMode.isShowSmallActive = false;
      },
      onMoveIn(){
        this.showMode.isShowAll = false;
        this.showMode.isShowSmall = false;
        this.showMode.isShowSmallActive = true;
      },
      onMoveOut(){
        if (this.showMode.isShowAll){
          return
        }
        this.showMode.isShowAll = false;
        this.showMode.isShowSmall = true;
        this.showMode.isShowSmallActive = false;
      }
    },
    data(){
      var _this = this;
      return {
        showMode:{
          isShowAll:true,
          isShowSmallActive:false,
          isShowSmall:false,
        },
        menus:[{
          image:'iconkanguo',
          name:'竞品透视',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-contact',
          name:'黑号验号',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon:'md-cart',
          name:'收藏加购',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-ionitron',
          name:'电商思想库',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-bug',
          name:'标签透视',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-bulb',
          name:'电商军火库',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-planet',
          name:'电商情报局',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-bug',
          name:'关键词卡位',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-heart',
          name:'卡猜你喜欢',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          icon: 'md-heart',
          name:'SKU销量监控',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          image: 'iconjiankong',
          name:'竞品监控',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          image: 'iconzhiding',
          name:'评价监控',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          image: 'iconzhiding',
          name:'指数转换',
          click() {
            _this.$Message.info('正在开发中');
          }
        },{
          image: 'iconzhiding',
          name:'今日付款人数',
          click() {
            _this.$Message.info('正在开发中');
          }
        }]
      }
    }
  }
</script>
