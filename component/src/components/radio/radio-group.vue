<template>
    <div :class="cls" style="font-size: 0;">
      <slot></slot>
    </div>
</template>

<script>
  import {oneOf,findComponentsDownward} from "@/utils/assist";

  export default {
        name: "radio-group",
        data(){
          return{
            currentValue:this.value,
            childrens:[]
          }
        },
        props:{
          vertical:{
            type:Boolean,
            default:false
          },
          value:{
            type: String,
            default: ''
          },
          type:{
            required:false,
            // validator (value) {
            //   return oneOf(value, ['button']);
            // },
          },
          size:{
            required:false,
            // validator (value) {
            //   return oneOf(value, ['small', 'large']);
            // }
          }
        },
      computed:{
          cls(){
            return {
              ['radio-group-vertical' ]: this.vertical,
              ['radio-group-'+this.type]: this.type,
              ['radio-group-'+this.size]: this.size
            }
          }
      },
      methods:{
          updata(){
            let value =this.currentValue
            this.childrens=findComponentsDownward(this,'radio')
            if (this.childrens){
              this.childrens.forEach(item=>{
                  item.currentValue = value===item.lable

              })
            }
          },
        change(value){
          this.currentValue=value
          this.updata()
        }
      },
    watch:{

    },
    mounted(){
        let child = this.$children
        let length = this.$children.length
        child.forEach((item,index)=>{
          if (index===0){
            item.position='head'
          }
          else if (index+1===length){
            item.position='tail'
          }
          else{
            item.position='mid'
          }
        })
      this.updata()
      console.log('pppppp:',this.type)
    }
    }
</script>

<style scoped>
  .selected{

  }
</style>
