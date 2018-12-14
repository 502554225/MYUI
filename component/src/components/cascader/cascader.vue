<template>
  <div class="select-box">
    <div class="select" :class="{'haveData': transValue!=='请选择'}" @click.stop="change">{{transValue}}
      <div class="icon-box" :class="{'isValue' : closeShow}">
        <div class="icon" :class="['open'+open]" ></div>
        <div class="close" @click.stop="clear"></div>
      </div>
    </div>
  
    <div class="list-box"> 
      <list ref="listChild" v-show="open" :data="data" ></list>
    </div>
    
  </div>

</template>

<script>
  import list from './list'
  import {findComponentsDownward} from "@/utils/assist";

  export default {
        name: "ca",
      components:{
          list
      },
      props:{
        data:{
          type:Array,
          default:[]
        }
      },
      data(){
          return{
            open:false,
            value:'请选择',
            closeMove:false,
          }
      },
      computed:{
          transValue(){
            if ((typeof this.value=='object')&&this.value.constructor==Array){
              let list =this.value.reverse()
              let string = ''
              this.value.forEach(item=>{
                if (string==='' ) {
                  string = string + item
                }
                else {
                  string = string + ' / ' + item
                }
              })
              return string
            }
            else return '请选择'
          },
        closeShow(){
            if ((typeof this.value=='object')&&this.value.constructor==Array){
              return true
            }
            else return false
        }
      },
      methods:{
          clear(){
            if (this.closeShow){
              this.value=''
              let children = this
              while (children.$children[0]){
                children=children.$children[0]
                children.value=''
                children.children = []
              }
            }
          },

          hide($event){
              this.open=false
          },
          change(){
            this.open=!this.open
            console.log('open')
            if (this.value.length>0) {
              console.log('value:',this.value)
              let child= this
              let i = 1
              let length = this.value.length
              while (child.$children) {
                console.log('childV:',child.$children.value)
                this.$set(child.$children,'value',this.value[length-i])
                // child.$children.value=this.value[length-i]
                console.log('childV after:',child.$children.value)
                child=child.$children
                i++
              }
            }
            console.log(this.closeShow)
            // console.log(this.$refs.listChild)
          }
      },
      mounted(){
          console.log(this.data)
      },
      created(){
        let vm=this
        document.addEventListener('click',function () {
          vm.hide()
        })
      }
    }
</script>

<style scoped>
  div{
    box-sizing: border-box;
  }
.select-box{
  position: relative;
}
.select{
  position: relative;
  line-height: 20px;
  font-size: 14px;
  color: #B9BEC5;
  width: 200px;
  height: 30px;
  border: 1px solid #B9BEC5;
  border-radius: 4px;
  padding: 5px;
  text-align: left;
}
  .select:hover{
    border: 1px solid #5295E7;
  }
  .icon-box{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    right:5px;
  }
  .icon{
    width: 20px;
    height: 20px;
    background: url("../../../static/img/Triangle.png") no-repeat center;
  }
  .close{
    display: none;
    width: 20px;
    height: 20px;
    background: url("../../../static/img/close.png") no-repeat center;
    z-index: 10;
  }
  .isValue:hover .icon{
    display: none;
  }
  .isValue:hover>.close{
    display: block;
  }
  @keyframes open {
    100%{
      transform: rotate(180deg);
    }
  }
  .opentrue{
    animation: open .3s ease both;
  }
  @keyframes close {
    0%{
      transform: rotate(180deg);
    }
    100%{
      transform: rotate(0deg);
    }
  }
  .openfalse{
    animation: close .3s ease both;
  }
  .list2{
    width: 350px;
    height: 5px;
  }
  .haveData{
   color: black;
  }
  .list-box{
    position: absolute;
    width: 350px;
    top: 33px;
    left: 0;
    z-index: 100;
  }
</style>
