<template>
    <div class="register-box">
        <div class="AD"></div>
        <div class="title">
            <h1>注册</h1>
        </div>
        <hr class="line">
        <div class='input-box'>
            <myinput class="input" :width='400' :height='34' placeholder="昵称"></myinput>
            <myinput class="input" :width='400' :height='34' placeholder="密码（区分大小写）"></myinput>
            <myinput class="input" :width='400' :height='34' placeholder="填写常用手机号" float="left">
                <div class="tel">中国大陆</div>
            </myinput>
            <myinput class="input" :width='400' :height='34' placeholder="请输入短信验证码" float="right">
                <div class="get">点击获取</div>
            </myinput>
            <mybutton class="input" :width='400' :height='34'>注册</mybutton>
            <div class="deal">
                    <checkbox></checkbox>
                    <h5>我已同意<a>《用户使用协议》</a></h5> 
            </div>
            <router-link to="/login"><span class="tologin">已有账号，直接登录</span></router-link>
        </div>
        
    </div>
</template>
<script>
import myinput from './input/input'
import mybutton from './mybutton/mybutton'
import checkbox from './checkbox/checkbox'
export default {
    components:{
        myinput,
        mybutton,
        checkbox
    }
}
</script>
<style scoped>
.register-box{
    background: #fff;
    padding-bottom: 50px;
}
.AD{
    margin-top: -40px;
    width: 100%;
    height: 220px;
    background: url(../../static/img/bbb.jpg);
    z-index: -1;
}
.line{
    position: absolute;
    left: 50px;  
    right: 50px;   
    top: 285px;
    text-align: center;
    z-index:1;
}
.title{
    position: absolute;
    width: 100px;
    height: 40px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 2;
}
.input-box{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 50px 0
}
.input-box .input{
    position: relative;
    margin-top: 40px
}
.get{
    box-sizing: border-box;
    width: 120px;
    height: 34px;
    line-height: 34px;
    color: #fff;
    border: 1px solid #5295E7;
    background: #5295E7;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}
.tel{
    box-sizing: border-box;
    width: 120px;
    height: 34px;
    line-height: 34px;
    color: #373d3d;
    border-right: 1px solid #bbb;
}
.deal{
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    top: 365px;
    margin-left: -120px;
}
a{
    color: #5295E7
}
.tologin{
    position: absolute;
    display: flex;
    justify-content: center;
    top: 435px;
    margin-left: 75px;
}
</style>
