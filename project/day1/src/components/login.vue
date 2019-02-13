<template>
    <div class="login">
        <div class="top">
            <span><</span>
            <p>手机号登录</p>
            <span></span>
        </div>
        <div class="ipt">
            <input type="text" placeholder="手机号">
            <input type="text" placeholder="密码">
            <button>登录</button>
        </div>
        <div class="reset">
            <u>重置密码</u>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .top{
        width: 100%;
        height: 44px;
        line-height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #333;
        color:#fff;
    }
    .top span{
        width: 44px;
        height: 44px;
        text-align: center;
        line-height: 44px;
    }

    .ipt{
        width: 100%;
    }

    input{
        width: 95%;
        height: 44px;
        border:0;
        background: 0;
        border-bottom:solid 1px #ccc;
        display: block;
        margin:0 auto;
        padding-left:10px;
    }

    button{
        width: 95%;
        height: 44px;
        border:0;
        background: #333;
        display: block;
        margin:0 auto;
        border-radius: 20px;
        color:#fff;
        margin-top:15px;
    }

    .reset{
        width: 100%;
        height: 200px;
        text-align: center;
        margin-top:20px;
    }
    .reset u{
        margin-top:10px;
        border-bottom:solid 1px #999;
        padding:5px;
        color:#999;
    }
</style>
