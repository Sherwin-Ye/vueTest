import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Container from '@/components/Container'
import ToolsPanel from '@/components/ToolsPanel'
import UserCenter from '@/components/UserCenter'
import AccountInfo from '@/components/AccountInfo'
import PluginSetting from '@/components/PluginSetting'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/tool',
      name: 'ToolsPanel',
      component: ToolsPanel
    },
    {
      path: '/account',
      name: 'UserCenter',
      component: UserCenter,
      children: [
        {
          path: '/account/info',
          name: 'AccountInfo',
          component: AccountInfo
        },{
          path: '/account/plugin',
          name: 'PluginSetting',
          component: PluginSetting
        }
      ]
    }
  ]
})
