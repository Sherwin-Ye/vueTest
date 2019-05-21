<style lang="less" type="text/less">
  .extension{
    width: 100%;
    height: 100%;
    background: white;
    .title-bar{
      display: flex;
      flex-direction: row;
      background: #F5F7FA;
      padding: 8px 16px;
      font-size: 14px;
      border-bottom: 1px solid #dedede;
      .ivu-divider{
        background: #B5BBC4;
        margin: auto 16px;
      }
      .title-content{
        flex-grow: 1;
        flex-wrap: nowrap;
        color: #B5BBC4;
      }
      i{
        font-size: 18px;
        color: #B5BBC4;
      }
    }
  }
</style>
<template>
  <div class="extension">
    <div class="title-bar">
      <div><span>驭宝魔盒</span> - <span>工具导航</span></div>
      <Divider type="vertical"/>
      <div class="title-content"><span>Ver 4.0.0</span> - kan.yubaoseo.com</div>
      <a href="#" @click.prevent.stop="closeIt"><Icon type="md-close" /></a>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    methods:{
      closeIt(){
        window.top.postMessage({
          type: 'close-tool',
        }, "*")
      }
    }
  }
</script>
