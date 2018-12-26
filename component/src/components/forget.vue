<template>
    <div class="forget-box">
         <div class="AD"></div>
         <div class="forgetBody">
            <steps :current="current">
                <step titil="确认账号" ></step>
                <step titil="重置密码"></step>
                <step titil="重置成功"></step>
            </steps>
            <div v-if="current===0" class="body-item">
                <myinput :width='350' :height='40' placeholder="你的登录账号"></myinput>
                <mybutton type="primary" :width='350' :height='40' @click.native="changeStep">确认</mybutton>
            </div>
            <div v-if="current===1" class="body-item">
                <myinput :width='350' :height='40' placeholder="你的登录账号"></myinput>
                <mybutton type="primary" :width='350' :height='40' @click.native="changeStep">确认</mybutton>
            </div>
            <div v-if="current===2" class="body-item">
                <myinput :width='350' :height='40' placeholder="你的登录账号"></myinput>
                <mybutton type="primary" :width='350' :height='40' @click.native="changeStep">确认</mybutton>
            </div>
         </div>
    </div>
</template>
<script>
  import steps from './Steps/steps'
  import step from './Steps/step'
  import myinput from './input/input'
  import mybutton from './mybutton/mybutton'
export default {
    components:{
        steps,
        step,
        myinput,
        mybutton
    },
    data(){
        return{
            current:0
        }
    },
    methods:{
        changeStep(){ 
            this.$set(this,'current',this.current+1)
            // this.current++
             console.log(this.current)
            if(this.current>2){
                this.$router.push('./login')
            }
        }
    },
    watch:{
        titils(val){
            this.titils = val
        }
    }
}
</script>
<style>
.forget-box{
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
.steps{
    margin-left: 200px;
    margin-top: 40px;
}

.body-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
.body-item *{
    margin-top: 30px;
}
</style>
