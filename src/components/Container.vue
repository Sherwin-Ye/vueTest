<template>
  <div class="Container">
    <div class="switch_div">启动VIP活动<i-switch v-model="vipEnable" class="switch"/></div>
    <table v-show="vipEnable">
      <tr>
        <td width="12.5%">等级</td>
        <td width="25%">点亮条件</td>
        <td span="50%">权限</td>
        <td width="12.5%">操作</td>
      </tr>
      <tr v-for="(VipRole, index) in VipRoles" :key="VipRole.name">
        <td>VIP{{index+1}}</td>
        <td>
          <Row type="flex" align="middle">
            <Col span="12"><Span style="text-align: right;margin-right:16px;float: right">充值金额 >= </Span></Col>
            <Col span="12">
              <Input v-model="VipRole.condition" style="width: auto">
                <span slot="append">驭币</span>
              </Input>
            </Col>
          </Row>
        </td>
        <td><Permissions :Permissions="VipRole.permissions"></Permissions></td>
        <td><Button type="dashed" @click="deleteRole(index)" long>删除等级</Button></td>
      </tr>
      <tr>
        <td colspan="3">
          <Button type="dashed" icon="ios-add" @click="addRole" long>增加级别</Button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Permissions from '@/components/Permissions'
export default {
  name: 'Container',
  components: {Permissions},
  data () {
    return {
      vipEnable: true,
      VipRoles: [{
        name: 'VIP1',
        condition: 100,
        permissions: [
          {
            title: '消息模块',
            module: '消息',
            discount: 9.5
          }
        ]
      },{
        name: 'VIP2',
        condition: 100,
        permissions: [
          {
            title: '消息模块',
            module: '消息',
            discount: 9.5
          },{
            title: '消息模块',
            module: '消息',
            discount: 9.5
          }
        ]
      }]
    }
  },
  methods:{
    addRole(){
      this.VipRoles.push({})
    },
    deleteRole(index){
      this.VipRoles.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .Container{
    margin: 10px auto;
    max-width: 1300px;
    min-height: 580px;
  }
  table{
    font-family: Consolas,Menlo,Courier,monospace;
    font-size: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    border: 1px solid #e9e9e9;
    width: 100%;
    margin-bottom: 24px;
  }
  tr {
    display: table-row;
    border-color: inherit;
    vertical-align: center;
  }
  td {
    border: 1px solid #e9e9e9;
    padding: 8px 16px;
    text-align: center;
  }
  td label {
    display: inline-block;
  }
  .switch_div{
    margin: 16px 0;
    text-align: left;
  }
  .switch{
    margin-left: 16px;
  }
</style>
