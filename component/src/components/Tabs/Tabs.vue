<template>
    <div :class="vertical ? 'tabs-vtc' :'tabs'">
        <div :class="vertical ? 'tab-box-vtc' :'tab-box'">
            <div  v-for="item in list" @click="change(item.name)" :class="[{'selected-vtc' : (value === item.name)&&vertical,'selected' : (value === item.name)&&!vertical},vertical ? 'tab-vtc' :'tab']">
                {{item.label}}
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    props:{
        value:{
            type:[Number,String],
            default:''   
        },
        vertical:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        getData(){
            let data=[]
            this.$children.forEach((item,index)=>{
                data.push({label:item.label,name:item.name})
            })
            this.list = data
        },
        change(name){
            this.value= name
        },
        show(val){
            this.$children.forEach((item,index)=>{
                if(item.name === val){
                    item.isShow= true
                }
                else item.isShow= false
            })
        }
    },
    mounted(){
        this.getData()
        this.show(this.value)
    },
    watch:{
        value(val){
            this.show(val)
            this.$emit("changeV",this.value)
        }
    }
}
</script>
<style scoped>
    .tabs{
    }
    .tabs-vtc{
        display: flex;
        flex-direction: row;
    }
    .tab-box{
        display: flex;
    }
    .tab-box-vtc{
        display: flex;
        flex-direction: column;
        justify-content: flex-start
    }
    .tab{
        box-sizing: border-box;
        flex: auto;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #B9BEC5;
        cursor:pointer
    }
    .tab-vtc{
        box-sizing: border-box;
        width: 200px;
        height: 40px;
        line-height: 40px;
        border-right: 1px solid #B9BEC5;
        cursor:pointer
    }
    .selected{
        color: #5295e7;
        border-bottom: 3px solid #5295e7;
    }
    .selected-vtc{
        color: #5295e7;
        border-right: 3px solid #5295e7;
    }
    
</style>
