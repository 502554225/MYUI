<template>
  <div class="step">
    <div class="box">
      <div class="state">{{state}}</div>
      <div class="title">{{title}}</div>
      <div v-if="!end" class="line">
        <hr>
      </div>
    </div>
    <div class="describe">
      {{describe}}
    </div>
  </div>

</template>

<script>
    export default {
        name: "step",
      data(){
          return{
            state:'1',

            end:false,

          }
      },
      props:{
        title:{
          type:String,
          default:'待进行'
        },
        describe:{
          type: String,
          default: ''
        }
      }
    }
</script>

<style scoped>
  .step{
    flex: auto;

    z-index: 10;
  }
  .state{
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
  .title{
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
  hr{
    margin-top: 14px;
    background-color:#B9BEC5;
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
</style>
