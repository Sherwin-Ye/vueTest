<style lang="less">
  .orange {
    color: #ff7914 !important;
  }

  .AccountInfo {
    .account-info {
      display: flex;
      flex-direction: row;
      align-content: flex-end;
      padding: 24px;

      div {
        display: flex;
        align-self: flex-end;
        margin-right: 16px;
        line-height: 24px;
      }

      .user-name span {
        font-size: 16px;
      }
    }
  }
</style>
<template>
  <div class="AccountInfo">
    <div class="account-info">
      <div class="user-name"><span class="orange">{{$store.getters.getUser.username}}</span>欢迎您</div>
      <div class="user-money">余额：<span class="orange">{{$store.getters.getWallet}}</span>驭币</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AccountInfo',
    data() {
      return {}
    },
    methods: {}
  }
</script>
