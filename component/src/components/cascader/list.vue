<template>
  <div class="list" @click.stop>
    <div class="list-box">
      <div style="height: 10px;"></div>
      <div  v-for="(item,index) in data" class="list-item" :class="[{'itemSel' : value===item.label}]" @click="select(item,index)">
        {{item.label}}
      </div>
    </div>
    <list ref="list" v-if="children.length!==0" :data="children"></list>
  </div>
</template>

<script>
  import list from './list'
  import {findComponentsUpward} from "@/utils/assist";

  export default {
        name: "list",
      data(){
        return{
          children:[],
          itemSel:'',
          list:new Array(this.data.length),
          value:''
        }
      },
      components:{
      },
      props:{
          data:{
            type:Array,
            default:[]
          }
      },
      methods:{
          select(item,index){
            this.value=item.label
            console.log('fol',this.value)
          }
      },
    watch:{
        value:{
          handler: function(val){
            console.log('你点了一下')
            let item
            let index
            this.data.forEach((i,ind)=>{
              if (i.label===val){
                item = i
                index = ind
                return
              }
            })
            if (item.child) {
              this.$set(this,'children',item.child)
              let child = this
              if (child.$refs.list){
                console.log(child.$refs.list)
                child.$refs.list.children = []
             }
              // this.itemSel='item'+index
            }
            else {
              let child = this
              if (child.$refs.list){ //如果数组没有child,而html又child 则情况this.children
                child.children = []
              }
              let parent
              parent = this.$parent;
              let value=[]
              value.push(this.value)
              while (parent.$options.name!=='ca') {
                value.push(parent.value)
                parent = parent.$parent;
              }
              parent.value=value
              parent.open=false
            }
          },
          deep:true
        }
    },
      mounted(){
          console.log('listValue',this.value)
      }
    }
</script>

<style scoped>
  div,span{
    font-size: 14px;
    box-sizing: border-box;
  }
  .list{
    float: left;
    /*vertical-align: top;*/
  }
.list-box{
  float: left;
  width: 100px;
  max-height: 160px;
  border: 1px solid #B9BEC5;
  border-radius: 4px;
}
.list-item{
  height: 30px;
  padding: 5px;
}
.list-item:hover{
  background: #F7FAFC ;
}
  .itemSel{
    color: #5295E7;
  }
</style>
