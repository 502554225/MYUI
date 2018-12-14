<template>
    <div>
        <div class="AD"></div>
        <div class="title">
            <h1>登录</h1>
        </div>
        
        <hr class="line">
        <div class="login">
            <div class="linex">
            </div>
            <div class="torq">
                <div class="torqImge"></div>
                <div class="describe">
                    <h3>请扫描二维码登录</h3>
                    <h5>请使用APP客户端扫码登录</h5>
                    <h5>或者<a>下载</a>客户端</h5>
                </div>
            </div>
            <div class="login-body">
                <div class="input-box">
                    <myinput class="input-box-item" :width='400' :height='34' placeholder="你的手机号"></myinput>
                    <myinput class="input-box-item" :width='400' :height='34' placeholder="密码"></myinput>
                    <div class="other input-box-item">
                        <span>没有账号？去<router-link to="/register"><a>注册</a></router-link></span>
                        <span class="span2"> <router-link to="/forget"><a>忘记密码</a></router-link></span>
                    </div>
                    <router-link to="/index1"><mybutton class="input-box-item login-btn" :width='400' type="primary" :height='34'>登录</mybutton></router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import myinput from './input/input'
import mybutton from './mybutton/mybutton'
export default {
    components:{
        myinput,
        mybutton
    }
}
</script>

<style scoped>
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
    top: 195px;
    text-align: center;
    /* margin-left: auto;
    margin-right: auto; */
    z-index: -1;
}
.title{
    width: 100px;
    height: 40px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
}
.login{
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap
}
.login-body{
    display: inline-block;
    margin-right: 0;  
    width: 50%;
    white-space: nowrap;
    vertical-align: top;
}
.torq{
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 0;
    width: 50%;
    vertical-align: top;
}
.torq div{
    margin-right: 200px;
}
.torqImge{
    margin-top: 70px;
    margin-right: 50px;
    width: 140px;
    height: 140px;
    background: url(../../static/img/2Rq.png)
}
.describe{
    display: flex;
    flex-direction: column;

}
.describe *{
    margin-top: 10px
}
.input-box{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 400px;
}
.input-box-item{
    width: 100%;
    margin-top: 10px;
    margin-left:50px;
}
a{
    color: #5295E7 ;
}
.other{
    display: flex;
    justify-content: space-between;
}
.linex{
    position: absolute;
    left: 50%;
    top: 230px;
    width: 1px;
    height: 300px;
    background: #bbb;
}
</style>
