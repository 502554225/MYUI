<template>
  <div class="step" :class="{'vertical':direction==='vertical'}">
    <div class="box">
      <div class="stepNum" :class="{'error' : state==='error','yes' : state==='yes','ing' : state==='ing'}">{{stepNum}}</div>
      <div class="titil" :class="{'font-ing' : state === 'ing','font-error' : state === 'error'}">{{titil}}</div>
      <div v-if="!end&&direction!=='vertical'" class="line">
        <hr :class="{'line-yes' : state==='yes'}">
      </div>
    </div>
    <div class="describe" :class="{'font-ing' : state === 'ing','font-error' : state === 'error'}">
      {{describe}}
    </div>
    <div v-if="!end&&direction==='vertical'" class="line2" :class="{'line2-yes' : state==='yes'}">
     
    </div>
  </div>

</template>

<script>
    export default {
        name: "step",
      data(){
          return{
            stepNum:'1',
            end:false,
            state:'no',
            direction:''
          }
      },
      props:{
        titil:{
          type:String,
          default:'待进行'
        },
        describe:{
          type: String,
          default: ''
        }
      },
      mounted(){
          // if (this.state==='yes'){
          //   this.stepNum='√'
          // }
          // if (this.state==='error'){
          //   this.stepNum='×'
          // }

      },
      watch:{
        state(){
          // console.log(this.stepNum,this.state)
          // if(this.state==='ing') this.titil= '进行中'
          // else if (this.state === 'no') this.titil='待进行'
          // else this.titil='已完成'
        }
      }
    }
</script>

<style scoped>
  div{
    color: #B9BEC5;
  }
  .step{
    flex: auto;
    z-index: 10;
  }
  .vertical{
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
  .stepNum{
    margin-right: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid #B9BEC5;
    border-radius: 50%;
    color:  #B9BEC5;
    line-height: 30px;

  }
  .finish{
    border-color: #5295E7;
    color: #5295E7;
  }
  .titil{
    margin-right: 8px;
    font-size: 14px;
    line-height: 30px;
  }
  .line{
    /*width:100px;*/
    flex: auto;
    margin-right: 8px;
    line-height: 1px;
  }
  .line2{
    /* transform: rotate(90deg); */
    margin-top: -16px;
    margin-left: 14px;
    margin-bottom: 8px;
    height: 30px;
    width: 1px;
    background: #B9BEC5
  
  }
  hr{
    margin-top: 14px;
    border-top: 0;
    border-color: #B9BEC5;
  }
  .box{
    display: flex;
    justify-content: start;
  }
  .describe{
    font-size: 12px;
    text-align: left;
    margin-left: 38px;
  }
  .yes{
    border-color:#5295E7 ;
    color: #5295E7;
  }
  .ing{
    border-color:#5295E7 ;
    background-color:#5295E7 ;
    color: #fff;
  }
  .line-yes{
    border-color: #5295E7;
  }
  .line2-yes{
    background: #5295E7;
  }
  .font-ing{
    color: black;
  }
  .error{
    border-color:#fc8f8f ;
    color: #fc8f8f;
  }
  .font-error{
    color: #fc8f8f;
  }
</style>
