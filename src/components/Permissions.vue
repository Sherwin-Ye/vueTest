<template>
  <div class="Permissions">
    <Row v-for="(permission, index) in Permissions" :key="permission.title" :gutter="16" justify="center" align="middle" style="margin-bottom: 8px;">
      <Col span="6">
        <Select value="消息">
          <Option value="消息">消息</Option>
          <Option value="账户">账户</Option>
        </Select>
      </Col>
      <Col span="6">
        <Input placeholder="请输入标题" v-model="permission.title" clearable/>
      </Col>
      <Col span="6">
        <Input v-model="permission.discount" placeholder="请输入折扣">
          <span slot="append">折</span>
        </Input>
      </Col>
      <Col span="6">
        <Button type="dashed" @click="deletePermission(index)"  long>删除权限</Button>
      </Col>
    </Row>
    <Button id="add_permission" type="dashed" @click="add" long>增加权限</Button>
  </div>
</template>

<script>
export default {
  name: 'Permissions',
  props:{
    Permissions:{
      type:Array,
      default:[]
    }
  },
  data () {
    return {
    }
  },
  methods:{
    add(){
      this.Permissions.push({})
    },
    deletePermission(index){
      this.Permissions.splice(index, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add_permission{
    margin-top: 16px;
  }
</style>
