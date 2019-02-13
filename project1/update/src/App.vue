<template>
    <div class="wrap">
        <ul class="header">
            <li v-for="(val,index) in navList" :key="index" @click="change(index)" :class="{active:index==ind}">
                {{val}}
            </li>
        </ul>
        <div class="content">
            <div class="pic">
                <img src="./assets/pic.jpg" alt="">
            </div>
            <router-view></router-view>
            <div class="list">
                <div class="service" @click="typeClick">
                    <p>服务类型</p>
                    <p>
                        <span>{{from.type}}</span>
                        <img src="./assets/xiangyoujiantou.png" alt="">
                    </p>
                </div>
                <div class="current">
                    <p>
                        <span>当前驾照签发城市</span>
                        <b>?</b>
                    </p>
                    <p>请选择签发地</p>
                </div>
                <div class="replacement">
                    <p>
                        <span>可补换的签发城市</span>
                        <b>?</b>
                    </p>
                    <p>请选择补换地</p>
                </div>
                <div class="cost">
                    <p>服务费</p>
                    <p>￥399</p>
                </div>
            </div>
            <section>
                  <van-popup v-model="showType" :overlay="true" position="bottom">
                    <van-picker :columns="typeArray" :show-toolbar="true" @confirm="changeClick" @cancel="delate" />
                  </van-popup>
                </section>
            <div class="discount">
                <p>优惠</p>
                <p>
                    <span>登录后查看更多优惠劵</span>
                    <img src="./assets/xiangyoujiantou.png" alt="">
                </p>
            </div>
            <div class="logo">
                <u>常见问题?</u>
                <p>
                    <img src="./assets/logo.jpg" alt="">
                </p>
            </div>
        </div>
        <div class="footer">
            <p>实付：<span>￥399</span></p>
            <button>立即支付</button> 
        </div>
    </div>
</template>

<script>
import JSBridge from './utils/JSBridge.js';
export default {
    name: 'app',
    data(){
        return {
            navList:['订单提交','填写收货地址','正在办理','办理完成'],
            ind:0,
            showType:false,
            typeArray:['换驾照','补驾照'],
            from:{
              type:'换驾照'
            }

        }
    },
    methods:{
        change(ind){
            this.ind = ind;
        },
        typeClick(){
          this.showType = true
        },
        changeClick(value){
          this.from.type=value;
          this.showType = false
        },
        delate(){
          this.showType = false
        }
    }
}
</script>

<style scoped>
    @import url('./css/index.css');
</style>