<template>
  <div id="app">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="light" active-name="1">
          <div class="layout-logo"></div>
          <MyHeader></MyHeader>
        </Menu>
<!--        <MyHeader></MyHeader>-->
      </Header>
      <i-content :style="{padding: '20px 80px'}">
        <Card>
          <div style="max-width:1300px;margin: 0 auto">
            <router-view/>
          </div>
        </Card>
      </i-content>
      <Footer class="layout-footer-center">2016-2019@驭宝魔盒</Footer>
    </Layout>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    'MyHeader': Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.ivu-layout-header{
  border: 1px solid #fff;
  background: #fff;
  position: relative;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 600px;
  margin: auto 0 auto auto;
}
.ivu-menu-item{
 padding:0 5px !important;
}
.layout-footer-center{
  text-align: center;
}
.ivu-layout-header{
  background: white;
  padding: 0;
}
.ivu-layout-header ul{
  border: none;
  padding: 0 50px;
}
.ivu-menu{
  height: auto !important;
}

</style>
