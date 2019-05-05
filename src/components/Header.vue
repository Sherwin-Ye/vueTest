<template>
<!--  <div class="Header">-->
<!--    <span>驭宝魔盒</span>-->
<!--    <ul>-->
<!--      <li v-for="menu in menus" :key="menu.name">{{menu.name}}</li>-->
<!--    </ul>-->
<!--  </div>-->
  <div class="layout-nav">
    <MenuItem v-for="menu in menus" :key="menu.name" :name="menu.name">
      <Icon type="ios-navigate"></Icon>
      {{menu.name}}
    </MenuItem>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menus: [
        {
          name: '魔盒应用'
        }, {
          name: '产品管理'
        }, {
          name: '用户管理'
        }, {
          name: '销售管理'
        }, {
          name: '营销管理'
        }, {
          name: 'admin'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Header{
    display:flex;
    flex-wrap: wrap;
  }
  ul {
    display:flex;
    flex-wrap: wrap;
    list-style-type: none;
  }
  ul li{
    display: inline-block;
    margin: 0 5px;
  }
</style>
