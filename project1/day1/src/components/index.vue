<template>
    <div class="wrap">
        <div class="box">
            <div class="img">
                <img src="https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=f9c617f18713632715edc535a9b4c7d1/838ba61ea8d3fd1fa92d29173d4e251f95ca5ff3.jpg" alt="">
            </div>
            <div class="btn-wrap">
                <router-link to="/login" class="btn" tag="button">手机登录</router-link>
                <router-link to="/login" class="btn" tag="button">注册</router-link>
            </div>
            <div class="try">
                <u>游客试用</u>
            </div>
            <h1><span>其他登录方式</span></h1>
            <div class="list">
                <dl>
                    <dt>
                        <img src="../img/weixin.png" alt="">
                    </dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../img/qq.png" alt="">
                    </dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../img/weibo.png" alt="">
                    </dt>
                    <dd></dd>
                </dl>
                <dl>
                    <dt>
                        <img src="../img/iconfontwangyi.png" alt="">
                    </dt>
                    <dd></dd>
                </dl>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .wrap{
        width:100%;
        height:100%;
        background: url(http://s3.music.126.net/m/s/img/recommand_bg_2x.png?d045faf%E2%80%A6) no-repeat #f8f8f8;
        background-size:100% 48%;
        padding-top:40px;
    }

    .box{
        width:400px;
        height: 100%;
        margin:80px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .box .img{
        width: 80px;
        height: 80px;
    }
    .box .img img{
        width: 100%;
        height: 100%;

    }

    .btn-wrap{
        width: 90%;
        height: 140px;
        margin-top:40px;
    }
    .btn{
        display: block;
        width: 100%;
        height: 44px;
        margin:0 auto;
        border:0;
        background: 0;
        border:solid 1px red;
        margin-top:15px;
        border-radius: 25px;
        color:red;
    }

    .try{
        width: 100%;
        height: 200px;
        text-align: center;
    }
    .try u{
        margin-top:10px;
        border-bottom:solid 1px #999;
        padding:5px;
        color:#999;
    }

    .list{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    dl{
        flex:1;
        height: 100%;
        text-align: center;
    }

    dt{
        width: 50px;
        height: 50px;
        border:solid 1px #ccc;
        border-radius: 50%;
        margin:0 auto;
    }
    dt img{
        width: 30px;
        height: 30px;
        display: block;
        margin:10px auto;
    }

    h1{
        height: 40px;
        line-height: 40px;
        color:#999;
        font-size:16px;
        font-weight: 400;
    }
    span:before{
        content:'';
        width: 50px;
        height: 1px;
        display:inline-block;
        background: #999;
        margin-right:10px;
        vertical-align: middle;
    }
    span:after{
        content:'';
        width: 50px;
        height: 1px;
        display:inline-block;
        background: #999;
        margin-left:10px;
        vertical-align: middle;
    }
</style>
