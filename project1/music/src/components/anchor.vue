<template>
    <div class="anchor">
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
        <div class="anchor-count">
            <div class="anchor-type">
                <dl v-for="(item,index) in list" :key="index">
                    <dt><img :src="item.img" alt=""></dt>
                    <dd>{{item.tit}}</dd>
                </dl>
            </div>
            <div class="anchor-title">
                <span>今日优选</span>
                <span>换一换</span>
            </div>
            <div class="anchor-list">
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
                tit:"电台分类"
            },
             {
                img:"../../static/icon/paixingbang.png",
                tit:"电台排行"
            },
             {
                img:"../../static/icon/gedan.png",
                tit:"DJ电音"
            },
             {
                img:"../../static/icon/meirituijian.png",
                tit:"小冰电台"
            }
        ],
        listArr:[
            {
                img:"../../static/img/10.jpg",
                tit:"莫娜大叔",
                span:"节目-18",
                p:"愿你的故事有人懂"
            },
             {
                img:"../../static/img/11.jpg",
                tit:"七月的风八月的雨卑微的我喜欢遥远的你",
                span:"节目-281",
                p:"失去才懂纯音乐(独享版)"
            },
            {
                img:"../../static/img/10.jpg",
                tit:"莫娜大叔",
                span:"节目-18",
                p:"愿你的故事有人懂"
            },
             {
                img:"../../static/img/11.jpg",
                tit:"七月的风八月的雨卑微的我喜欢遥远的你",
                span:"节目-281",
                p:"失去才懂纯音乐(独享版)"
            },
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
.anchor-count{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.anchor-list{
    width:100%;
    height:100%;
    overflow: hidden;
}
.scroll>dl{
    width:100%;
    height:90px;
    border-bottom:1px solid #ccc;
    display:flex;
    align-items:center;
    padding:0 10px;
}
.scroll>dl>dt{
    width:60px;
    height:60px;
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
.anchor-type{
    width:100%;
    border-bottom:1px solid #ccc;
    display:flex;
    align-items:center;
    padding:10px 0;
}
.anchor-type>dl{
    flex:1;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
}
.anchor-type>dl>dt{
    width:70px;
    height:70px;
    background: #323639;
    border-radius: 50%;
}
.anchor-type>dl>dt>img{
    width:30px;
    height:30px;
    display: block;
    margin-top:20px;
    margin-left:20px;
}
.anchor-title{
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 10px;
}

.scroll{
    width: 100%;
    overflow-y: auto;
}
.anchor{
    width: 100%;
    height: 100%;
}
</style>
