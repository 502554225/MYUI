<template>
    <div class="steps" :class='direction'>
      <slot></slot>
    </div>
</template>

<script>
  import {findComponentsDownward} from "@/utils/assist";

  export default {
    name: "steps",
    props:{
      current:{
        type:Number,
        default:0
      },
      state:{
        type:String,
        default: 'ing'
      },
      direction:{
        type:String,
        default:''
      }
    },
        mounted(){
          console.log(this.current,'ccccc')
          this.updata()
        },
        methods:{
          updata(){
            let childs= findComponentsDownward(this,'step')
            childs[childs.length-1].end=true
            childs.forEach((item,index)=>{
              item.stepNum = index+1
              item.direction=this.direction
              if (index<this.current) {
                item.state='yes'
                // item.stepNum='√'
              }
              else if (index===this.current) {
                item.state=this.state
                // if (this.state==='error'){
                //   item.stepNum='×'
                // }
              }
              else item.state='no'
            })
          }
        },
        watch:{
          current(val){
            this.updata()
          }
        }
    }
</script>

<style scoped>
  .steps{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
  }
  hr{
    margin-top: 10px;
    width: 100%;
    z-index: 1;
  }
  .vertical{
    flex-direction: column;
  }
</style>
