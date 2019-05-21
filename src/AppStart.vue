<style lang="less">
  .wrapper {
    height: auto !important;
    background: #f4f4f4;

    .text-right {
      text-align: right;
    }

    .img-box {
      min-width: 80px;
      height: 80px;
      padding: 8px 0;
      text-align: center;
      display: inline-block;
      cursor: pointer;

      img {
        margin: 8px auto;
        display: block;
        width: 40px;
      }
    }

    .wrapper-nav {
      box-shadow: 0 3px 3px #eee;
      height: auto;
      line-height: 16px;
      background: white;
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .img-box img {
        border-radius: 5px;
      }
    }

    .wrapper-main {
      .ivu-card-body {
        padding: 0;
      }

      width: 80%;
      margin: 24px auto;

      .content-panel {
        padding: 16px;
        .alimama-row{
          display: flex;
          flex-wrap: wrap;
        }
        .alimama-item {
          display: flex;
          flex-grow: 1;
          flex-shrink: 0;
          .img-box {
            margin: 0 auto;
          }
        }

        .sycm-row .ivu-col {
          margin: 24px 32px 8px 0;
        }

        .ivu-divider-horizontal {
          margin: 16px 0 0 0;
        }

      }
      .row-bottom {
        margin-top: 16px;
        .sub-panel{
          a{
            color: #515a6e;
          }
          @media screen and(max-width: 414px){
            width: 100% !important;
            margin-top: 10px;
          }
        }

        .ivu-card {
          min-height: 400px;
        }

        .sub-title {
          padding: 8px 0;
          border-bottom: 2px solid #2196f3;
          text-align: center;
        }

        .features .feature {
          height: 100px;
          text-align: center;
          padding: 8px 0;

          a {
            color: lightblue;
          }

          .feature-icon {
            width: 80%;
            max-width: 100px;
            font-size: 5vh;
            margin: 8px auto;
          }
        }

        .arsenal-list {
          padding: 8px 16px;
          margin: 0 16px;
          border-bottom: 1px solid #515a6e1c;
          .arsenal-title{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }

      }
    }
  }
</style>

<template>
  <div class="wrapper">
    <Header class="wrapper-nav">
      <div class="img-box" @click.prevent.stop="goIt(item)" v-for="item in navs">
        <img :src="item.image"/>
        <span>{{item.name}}</span>
      </div>
    </Header>
    <div class="wrapper-main">
      <Card class="content-panel">
        <div class="alimama-row">
          <div span="4" class="alimama-item" v-for="item in alimamaProducts" :key="item.name">
            <div class="img-box" @click.prevent.stop="goIt(item)">
              <img :src="item.image"/>
              <span>{{item.name}}</span>
            </div>
          </div>
        </div>
        <Divider/>
        <Row class="sycm-row" type="flex" justify="start">
          <Col class="green">生意参谋</Col>
          <Row type="flex" justify="start">
            <Col v-for="item in businessStaff" :key="item.name">
              <a target="_blank" :href="item.url">{{item.name}}</a>
            </Col>
          </Row>
        </Row>
        <Row class="sycm-row" type="flex" justify="start">
          <Col class="green">宝贝管理</Col>
          <Row type="flex" justify="start">
            <Col v-for="item in goodsManagers" :key="item.name">
              <a target="_blank" :href="item.url">{{item.name}}</a>
            </Col>
          </Row>
        </Row>
        <Row class="sycm-row" type="flex" justify="start">
          <Col class="green">店铺管理</Col>
          <Row type="flex" justify="start">
            <Col v-for="item in shopManagers" :key="item.name">
              <a target="_blank" :href="item.url">{{item.name}}</a>
            </Col>
          </Row>
        </Row>
      </Card>
      <Row type="flex" style="align-items: stretch;" class="row-bottom" :gutter="10">
        <i-col span="12" class="sub-panel">
          <Card style="height: 100%;">
            <Row type="flex">
              <Col span="6" class="sub-title"><span class="blue">功能</span></Col>
            </Row>
            <Row type="flex" class="features">
              <Col span="6" class="feature" v-for="feature in featureList" :key="feature.name">
                <a href="#" @click.prevent.stop="goIt(feature)">
                  <Icon :type="feature.icon" class="feature-icon" v-if="feature.icon"></Icon>
                  <i :class="['iconfont', 'feature-icon', 'ivu-icon', feature.image]" v-else></i>
                  <div class="o_caption">{{ feature.name }}</div>
                </a>
              </Col>
            </Row>
          </Card>
        </i-col>
        <i-col span="12" class="sub-panel">
          <Card style="height: 100%;">
            <Row type="flex">
              <i-col span="6" class="sub-title"><span class="blue">电商军火库</span></i-col>
            </Row>
            <a href="#" v-for="item in arsenalList" :key="item.id" @click.prevent.stop="goArsenal(item)">
              <Row class="arsenal-list">
                <i-col span="16" class="arsenal-title">{{item.title}}</i-col>
                <i-col span="8" class="text-right">价格：<span class="red" >{{item.price}}</span>驭币</i-col>
              </Row>
            </a>
          </Card>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
  export default {
    created() {
      this.initArsenal()
    },
    methods: {
      goIt(app) {
        if (app.url) {
          window.open(app.url, '_blank');
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
      goArsenal(item) {
        const url = "https://kan.yubaoseo.com/arsenal/" + item.id;
        window.open(url, '_blank');
      },
      initArsenal() {
        this.$http.post('/arsenal/search', {
          page: 0,
          size: 10,
        }).then(response => {
          const result = response.body.result;
          this.total = result.totalElements;
          this.arsenalList = result.content;
        }).catch(response => {
          this.$Message.error({content: response.body.message, duration: 3});
        })
      }
    },
    data() {
      return {
        total: 0,
        arsenalList: [],
        businessStaff: [{
          name: '生意参谋首页',
          url: 'https://sycm.taobao.com/'
        }, {
          name: '实时数据',
          url: 'https://sycm.taobao.com/ipoll/index.htm'
        }, {
          name: '作战室',
          url: 'https://sycm.taobao.com/datawar/activity/analysis'
        }, {
          name: '流量来源',
          url: 'https://sycm.taobao.com/flow/monitor/overview'
        }, {
          name: '品类上商品',
          url: 'https://sycm.taobao.com/cc/macroscopic_monitor'
        }, {
          name: '商品效果',
          url: 'https://sycm.taobao.com/bda/items/effect/item_effect.htm'
        }, {
          name: '服务数据',
          url: 'https://sycm.taobao.com/qos/service/core_monitor'
        }, {
          name: '市场行情',
          url: 'https://sycm.taobao.com/mc/mq/market_monitor'
        }, {
          name: '竞争情报',
          url: 'https://sycm.taobao.com/mc/ci/shop/monitor'
        }, {
          name: '自动取数',
          url: 'https://sycm.taobao.com/adm/v2/my'
        }],
        goodsManagers: [{
          name: '已卖出的宝贝',
          url: 'https://trade.taobao.com/trade/itemlist/list_sold_items.htm'
        }, {
          name: '出售中的宝贝',
          url: 'https://ipublish.tmall.com/tmall/manager/render.htm'
        }, {
          name: '评价管理',
          url: "https://rate.taobao.com/myRate.htm"
        }, {
          name: '发布宝贝',
          url: 'https://router.ipublish.tmall.com/router/publish.htm'
        }, {
          name: '仓库中的宝贝',
          url: 'https://ipublish.tmall.com/tmall/manager/render.htm?tab=in_stock'
        }],
        shopManagers: [{
          name: '店铺装修',
          url: 'https://wangpu.taobao.com/index.htm'
        }, {
          name: '图片空间',
          url: 'https://sucai.wangpu.taobao.com/#/manage/pic'
        }, {
          name: '体检中心',
          url: 'https://healthcenter.taobao.com/home/health_home.htm'
        }, {
          name: '子账号管理',
          url: 'https://zizhanghao.taobao.com/subaccount/myself/detail.htm'
        }, {
          name: '发票管理',
          url: 'https://mai.taobao.com/seller_admin.htm?spm=687.8433302.33000079.1.296f226axamAxH&svid=33000079&utkn=g,x7q3nu6g5s62fnpk1557995716432&scm=1028.1.1.33000079',
        }, {
          name: '服务看板',
          url: 'https://fuwushuju.tmall.com/dashboard/sellerBoard.htm'
        }],
        navs: [
          {
            image: '../../images/app-taobao.jpg',
            url: 'https://www.taobao.com',
            name: '淘宝'
          }, {
            image: '../../images/app-tmall.jpg',
            url: 'https://www.tmall.com/',
            name: '天猫'
          }, {
            image: '../../images/app-juhuasuan.jpg',
            url: 'https://ju.taobao.com/',
            name: '聚划算'
          }, {
            image: '../../images/app-jd.jpg',
            url: 'https://www.jd.com',
            name: '京东'
          }, {
            image: '../../images/app-pdd.jpeg',
            url: 'https://www.pinduoduo.com/',
            name: '拼多多'
          }, {
            image: '../../images/app-alibaba.jpg',
            url: 'https://www.1688.com/',
            name: '阿里巴巴'
          }, {
            image: '../../images/app-suning.jpg',
            url: 'https://www.suning.com',
            name: '苏宁易购'
          }, {
            image: '../../images/app-wangyiyanxuan.jpg',
            url: 'https://you.163.com/',
            name: '网易严选'
          }, {
            image: '../../images/app-weipinghui.jpg',
            url: 'https://www.vip.com/',
            name: '唯品会'
          }, {
            image: '../../images/app-1haodian.jpg',
            url: 'https://www.mogu.com/',
            name: '1号店'
          }, {
            image: '../../images/app-mogujie.jpg',
            url: 'https://www.mogu.com/',
            name: '蘑菇街'
          }
        ],
        alimamaProducts: [
          {
            image: 'https://img.alicdn.com/tfs/TB171uXSFXXXXaZXVXXXXXXXXXX-44-32.png',
            url: 'https://kan.yubaoseo.com/web.html',
            name: '商家后台'
          }, {
            image: 'https://img.alicdn.com/tfs/TB171uXSFXXXXaZXVXXXXXXXXXX-44-32.png',
            url: 'http://zhitongche.taobao.com/?spm=a2320.7388781.ca214tr8.d9bda87b5.6f3720309AQble',
            name: '淘宝直通车'
          }, {
            image: 'https://img.alicdn.com/tfs/TB1zSc_SFXXXXa6aXXXXXXXXXXX-44-32.png',
            url: 'https://zuanshi.taobao.com/?spm=a2320.7388781.ca214tr8.d9bda87b6.6f3720309AQble',
            name: '智钻'
          }, {
            image: 'https://gw.alicdn.com/tfs/TB1AMLfRSzqK1RjSZPcXXbTepXa-80-64.png',
            url: 'https://tuijian.taobao.com/?spm=a2320.7388781.ca214tr8.d9bda87b10.6f3720309AQble',
            name: '超级推荐'
          }, {
            image: 'https://img.alicdn.com/tfs/TB1GeN3SFXXXXX8aXXXXXXXXXXX-44-32.png',
            url: 'https://ad.alimama.com/index.htm?spm=a2320.7388781.ca214tr8.d9bda87b7.6f3720309AQble',
            name: '淘宝客'
          }, {
            image: 'https://img.alicdn.com/tfs/TB1oGSmSFXXXXapXFXXXXXXXXXX-44-32.png',
            url: 'https://branding.taobao.com/?spm=a2320.7388781.ca214tr8.d9bda87b8.6f3720309AQble',
            name: '品销宝'
          }, {
            image: 'https://img.alicdn.com/tfs/TB1QhV9SFXXXXb3XVXXXXXXXXXX-44-32.png',
            url: 'https://dmp.taobao.com/?spm=a2320.7388781.ca214tr8.d9bda87b9.6f3720309AQble',
            name: '达摩盘'
          }
        ],
        featureList: [{
          icon: 'md-contact',
          name: '黑号验号',
          url: 'https://kan.yubaoseo.com/wangwangInfo'
        }, {
          icon: 'md-cart',
          name: '收藏加购',
          url: 'https://kan.yubaoseo.com/xskTask'
        }, {
          icon: 'md-ionitron',
          name: '电商思想库',
          url: 'https://kan.yubaoseo.com/article?type=mind'
        }, {
          icon: 'md-planet',
          name: '电商情报局',
          url: 'https://kan.yubaoseo.com/article?type=intelligence'
        }, {
          icon: 'md-bulb',
          name: '电商军火库',
          url: 'https://kan.yubaoseo.com/arsenal'
        }, {
          icon: 'md-bug',
          name: '关键词卡首屏',
          url: 'https://kan.yubaoseo.com/keywordOrder'
        }, {
          icon: 'md-heart',
          name: '卡猜你喜欢',
          url: 'https://kan.yubaoseo.com/guessLike'
        }, {
          icon: 'md-analytics',
          name: '指数转换',
          url: 'https://kan.yubaoseo.com/indexConvert'
        }, {
          image: 'iconjiankong',
          name: '竞品销量监控',
          url: 'https://kan.yubaoseo.com/spy'
        }, {
          image: 'iconzhiding',
          name: '置顶评价监控',
          url: 'https://kan.yubaoseo.com/topRate'
        }]
      }
    }
  }
</script>
