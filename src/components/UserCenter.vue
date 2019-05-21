<style lang="less">
  .orange{
    color: #ff7914 !important;
  }
  .ivu-menu-item-active, .ivu-menu-item:hover{
    color: #ff7914 !important;
    border-bottom-color: #ff7914 !important;
  }
  .UserCenter{
    padding: 0 32px;
    display: flex;
    flex-wrap: wrap;
    .account-info{
      display: flex;
      flex-direction: row;
      align-content: flex-end;
      padding: 24px;
      div{
        display: flex;
        align-self: flex-end;
        margin-right: 32px;
        line-height: 24px;
      }
      .user-name span{
        font-size: 16px;
      }
    }
  }
</style>
<template>
  <div class="UserCenter">
    <div class="account-info">
      <div class="user-name"><span class="orange">XXXX</span>欢迎您</div>
      <div class="user-money">余额：<span class="orange">499.5</span>驭币</div>
      <div class="user-vip">VIP等级：<span>无</span></div>
      <div class="user-expire">到期时间：<span>无</span></div>
      <div class="user-consumption">累计消费：<span>xxxx</span>元</div>
    </div>
    <Menu mode="horizontal" theme="light" active-name="1">
      <MenuItem name="1">
        账号信息
      </MenuItem>
      <MenuItem name="2">
        开通功能
      </MenuItem>
      <MenuItem name="3">
        插件设置
      </MenuItem>
      <MenuItem name="4">
        帮助中心
      </MenuItem>
      <MenuItem name="5">
        建议反馈
      </MenuItem>
      <MenuItem name="6">
        充值记录
      </MenuItem>
      <MenuItem name="7">
        账号日志
      </MenuItem>
    </Menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return{

    }
  },
  methods:{
  }
}
</script>
