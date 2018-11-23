<template>
    <label :class="[type==='button' ? 'radio-button' : 'radio-default',{'mid': position==='mid'&&type === 'button','tail': position==='tail'&&type === 'button','head': position==='head'&&type === 'button','button-selected' : currentValue&&type === 'button'}]" @click="change">
      <span>
        <div :checked="currentValue" :class="{'radio-input' : type !== 'button','selected' : currentValue&&type !== 'button'}" ></div>
      </span>
      <slot>{{lable}}</slot>
    </label>
</template>

<script>
  import {findComponentsUpward} from "@/utils/assist";

  export default {
        name: "radio",
        data(){
          return{
            currentValue: false,
            type:'',
            position:'mid'
          }
        },
        props:{
            lable:{
              type:String,
              default:''
            },

        },
      methods:{
          change(){
            let parent =findComponentsUpward(this,'radio-group')
            parent.change(this.lable)
          }
      },
      created(){
          let parent = findComponentsUpward(this,'radio-group')
          console.log('type',parent.type)
          if (parent.type) {
            this.type = parent.type
          }
      },
    mounted(){

    }
    }
</script>

<style scoped>
  div{
    box-sizing: border-box;
  }
  slot{
    /*display: inline-block;*/
    /*vertical-align: middle;*/
  }
  .radio-input{
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    border-radius: 50%;
    border: 1px solid #B9BEC5;
    cursor: pointer;
    margin-right: 8px;
  }
  .radio-input:hover{
    border-color: #5295E7 ;
  }
  .selected{
    border: 5px solid #5295E7;
  }
  .radio-button{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    width: auto;
    font-size: 14px;
    border: 1px solid #B9BEC5;
    height: 30px;
    line-height: 28px;
    color: #30404f;
    padding: 0 16px;
    border-collapse:collapse;
    z-index: 1;
  }
  .radio-button:hover{
    z-index: 50;
    border-color: #5295E7;

  }
  .button-selected{
    border-color: #5295E7;
    color: #5295E7;
    z-index:50;
   }
  .radio-default{
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    line-height: 12px;
    font-size: 14px;
    margin-right: 8px;
  }
  .head{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  .mid{
    margin-left: -1px;
  }
  .tail{
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px ;
    margin-left: -1px;
  }
</style>
