<style lang="less">
  .ivu-radio-inner:after{
    background: #ff7914 !important;
  }
  .ivu-radio-checked .ivu-radio-inner{
    border-color: #ff7914 !important;
  }
  .ivu-checkbox-checked .ivu-checkbox-inner{
    background: #ff7914 !important;
    border-color: #ff7914 !important;
  }
  .ivu-radio-focus, .ivu-checkbox-focus{
    box-shadow: 0 0 0 2px rgba(255,112,0, .2);
  }

  .PluginSetting{
    padding: 16px;
    flex-direction: column;
    flex-wrap: wrap;
    .item-row{
      display: flex;
      flex-direction: row;
      margin: 24px 0;
      :first-child{
        flex-shrink: 0;
      }
    }
    .radio-group{
      max-width: 200px;
    }
    .plugin-setting-panel{
      flex-grow: 1;
    }
    .plugin-setting-btns{
      flex-grow: 0;
      margin-top: 32px;
    }
  }
</style>
<template>
  <div class="PluginSetting">
    <div class="plugin-setting-panel">
      <div class="item-row hover-state">
        <div>悬浮窗口默认状态：</div>
        <div>
          <RadioGroup v-model="plugin.hover">
            <Radio label="open">展开</Radio>
            <Radio label="minimize">最小化</Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="item-row hover-position">
        <div>悬浮窗口默认位置：</div>
        <div>
          <RadioGroup v-model="plugin.position">
            <Radio label="left-up">左上角</Radio>
            <Radio label="left-bottom">左下角</Radio>
            <Radio label="right-up">右上角</Radio>
            <Radio label="right-bottom">右下角</Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="item-row hover-tools">
        <div>悬浮窗口默认前十工具：</div>
        <div>
          <CheckboxGroup class="radio-group" v-model="plugin.tools">
            <Row>
              <Col span="12"  v-for="tool in allTools" :key="tool">
                <Checkbox :label="tool"></Checkbox>
              </Col>
            </Row>
          </CheckboxGroup>
        </div>
      </div>
    </div>
    <div class="plugin-setting-btns">
      <Button type="primary">确定</Button>
      <Button>取消</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PluginSetting',
  data () {
    return{
      plugin:{
        hover:'open',
        position:'right-bottom',
        tools:['竞品透视',
          '黑号验号',
          '电商思想库',
          '标签透视',
          '电商军火库',
          '竞品监控',
          '评价监控',
          '指数转换',
          '今日付款人数']
      },
      allTools:['竞品透视',
        '黑号验号',
        '收藏加购',
        '电商思想库',
        '标签透视',
        '电商军火库',
        '电商情报局',
        '关键词卡位',
        '卡猜你喜欢',
        'SKU销量监控',
        '竞品监控',
        '评价监控',
        '指数转换',
        '今日付款人数']
    }
  },
  methods:{
  }
}
</script>
