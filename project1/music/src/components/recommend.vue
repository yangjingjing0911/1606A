<template>
    <div class="recommend">
        <div class="box"></div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="http://p1.music.126.net/GDfHgrRVZqdq2_gVWc-lDw==/109951163749761819.jpg" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/Miwkq5Sp7OsdwivtP9vdBw==/109951163749770218.jpg" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/l9GBHNqW9iDeYQD4C3DbWQ==/109951163750034086.jpg" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/3FAubLoTACnQPX0--rc_2Q==/109951163749719226.jpg" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/YdaBUHysTlduRtTAttr2-g==/109951163750039319.jpg" alt=""></div>
                <div class="swiper-slide"><img src="http://p1.music.126.net/3FAubLoTACnQPX0--rc_2Q==/109951163749719226.jpg" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
        <div class="recommend-count">
            <div class="recommend-type">
                <dl v-for="(item,index) in list" :key="index">
                    <dt><img :src="item.img" alt=""></dt>
                    <dd>{{item.tit}}</dd>
                </dl>
            </div>
            <div class="recommend-title">
                <h1>推荐歌单 <img src="../../static/icon/right.png" alt=""></h1>
            </div>
            <div class="recommend-list">
                <div class="scroll">
                    <dl v-for="(val,i) in listArr" :key="i">
                        <dt><img :src="val.img" alt=""></dt>
                        <dd>
                                <p>{{val.tit}}</p>
                                <p>{{val.span}}</p>
                                <p>{{val.p}}</p>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'
export default {
data(){
    return{
        list:[
            {
                img:"../../static/icon/FM.png",
                tit:"私人FM"
            },
             {
                img:"../../static/icon/meirituijian.png",
                tit:"每日推荐"
            },
             {
                img:"../../static/icon/gedan.png",
                tit:"歌单"
            },
             {
                img:"../../static/icon/paixingbang.png",
                tit:"排行榜"
            }
        ],
        listArr:[
            {
                img:"../../static/img/10.jpg",
                tit:"莫娜大叔"
            },
             {
                img:"../../static/img/11.jpg",
                tit:"七月的风八月的雨卑微的我喜欢遥远的你"
            },
            {
                img:"../../static/img/10.jpg",
                tit:"莫娜大叔"
            },
             {
                img:"../../static/img/11.jpg",
                tit:"七月的风八月的雨卑微的我喜欢遥远的你"
            },
            {
                img:"../../static/img/10.jpg",
                tit:"莫娜大叔"
            },
             {
                img:"../../static/img/11.jpg",
                tit:"七月的风八月的雨卑微的我喜欢遥远的你"
            }
        ]
    }
},
  mounted(){
      new Swiper('.swiper-container',{
          autoplay:true,
          pagination:{
              el:".swiper-pagination",
              clickable:true
          }
      })
  }
}
</script>

<style scoped>
.recommend-count{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.recommend-list{
    width:100%;
    height:100%;
    overflow: hidden;
}
.scroll>dl{
    width:33%;
    height:120px;
    display:flex;
    flex-direction: column;
    align-items:center;
    padding:0 10px;
}
.scroll>dl>dt{
    width:90px;
    height:90px;
}
.scroll>dl>dt>img{
    width:100%;
    height:100%;
}
.scroll>dl>dd{
    padding-left:10px;
}
.box{
    width:100%;
    height:80px;
    background: #363B3E;
}
.swiper-container{
   margin-top:-100px;
   z-index:999;
}
.swiper-container img{
    padding:10px;
    width:100%;
    height:auto;
}
.swiper-pagination{
   padding-bottom:10px;
}
.recommend-type{
    width:100%;
    border-bottom:1px solid #ccc;
    display:flex;
    align-items:center;
    padding:10px 0;
}
.recommend-type>dl{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
}
.recommend-type>dl>dt{
    width:70px;
    height:70px;
    background: #323639;
    border-radius: 50%;
}
.recommend-type>dl>dt>img{
    width:30px;
    height:30px;
    display: block;
    margin-top:20px;
    margin-left:20px;
}
.recommend-title{
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 10px;
}
.recommend-title h1{
    font-weight:600;
    font-size:20px;
}

.recommend-title h1 img{
    width: 16px;
    height: 16px;
}

.scroll{
    width: 100%;
    overflow-y: auto;
    display: flex;
    flex-wrap: wrap;
}
.recommend{
    width: 100%;
    height: 100%;
}
</style>

