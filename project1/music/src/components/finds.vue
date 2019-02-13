<template>
    <div class="find">
        <div class="header">
            <span><img src="../../static/icon/yuyin.png" alt=""></span>
            <p>
                <input type="text" placeholder="猜你喜欢 浮生">
                <img src="../../static/icon/sousuo.png" alt="">
            </p>
            <span><img src="../../static/icon/yinle.png" alt=""></span>
        </div>
        <div class="nav">
            <router-link to="/recommend">个性推荐</router-link>
            <router-link to="/anchor">主播电台</router-link>
        </div>
        <div class="content">
           <keep-alive>
                <router-view />
           </keep-alive>
        </div>
        <div class="footer">
            <dl v-for="(item,index) in footerList" :key="index">
                <dt>
                    <img :src="item.url" alt="">
                </dt>
                <dd>{{item.title}}</dd>
            </dl>
        </div>
    </div>
</template>

<script>
import recommend from './recommend'
import anchor from './anchor'
export default {
    data(){
        return {
            footerList:[
                {
                    url:'../../static/icon/yinle_1.png',
                    title:'发现'
                },
                {
                    url:'../../static/icon/shipin.png',
                    title:'视频'
                },
                {
                    url:'../../static/icon/yinyue.png',
                    title:'我的'
                },
                {
                    url:'../../static/icon/pengyou.png',
                    title:'朋友'
                },
                {
                    url:'../../static/icon/my_s.png',
                    title:'账号'
                }
            ]
        }
    }
}
</script>

<style>
    .find{
        width: 100%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 50px;
        background: #363B3E;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .header span{
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 44px;
        display: block;
    }
    .header span img{
        width: 30px;
        height: 30px;
        margin-top:7px;
    }
    .header p{
        flex:1;
        height: 36px;
        background: #5B6161;
        border-radius: 20px;
        position:relative;
        text-align: center;
        margin-top:4px;
    }

    .header p input{
        width: 100%;
        height: 100%;
        background: #5B6161;
        border:0;
        border-radius: 20px;
        outline: none;
    }
    .header p img{
        width: 40px;
        position:absolute;
        top:7px;
        left:50%;
        margin-left:-70px;
    }
    .content{
        flex:1;
        width: 100%;
        overflow: hidden;
    }

    .nav{
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        background: #363B3E;
    }
    .nav a{
        flex:1;
        height: 50px;
        line-height: 50px;
        text-align: center;
        text-decoration: none;
        color:#fff;
    }
    .footer{
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #DCDCDC;
    }
    .footer dl {
        flex:1;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .footer dl dt{
        width: 30px;
        height: 30px;
        text-align: center;
    }
    .footer dl dt img{
        width: 100%;
        height: 100%;
    }
</style>
