<template>
    <div class="table-box"> 
        <table class="myTable" :rules=rules>
            <tablehead :headData='columns' ></tablehead>
            <tablebody :bodyData='data2' :renderData="columns" ></tablebody>
        </table>
    </div>
</template>
<script>
import tablehead from './Table-head'
import tablebody from './Table-body'
export default {
    name:'table',
    components:{
        tablehead,
        tablebody
    },
    props:{
        data:{
            type:Array,
            default:[],
            required:true
        },
        columns:{
            type:Array,
            default:[],
            required:true
        },
        border:{
            type:Boolean,
            default:false,
            required:false
        },
        selection:{
            type:Boolean,
            default:false,
            required:false
        }
    },
    data(){
        return{
            data2:this.data,
            render:'',
        }
    },
    computed:{
        
        rules(){
            if(this.border){
                return 'all'
            }
            else return 'rows'
        },
        
    },
    methods:{
        isSelect(){
            if(this.selection){
                let list = []
                this.data.forEach((item,index)=>{
                    let object={}
                    object.type='selection'
                    object=Object.assign(object, item);
                    list[index]=object
                })
                this.data2=list
            }
        },
        chengeData(i){
            this.data2.forEach((item,index)=>{
                item.render = 'render';
            
            })
        }
    },
    created(){
        if(this.selection===true){
            this.isSelect()
        }
        this.columns.forEach((item,index)=>{
            if(item.render){
                this.render = item.render
                this.chengeData(index)
            }
        })
    }
}
</script>
<style scoped>
.myTable{
    position: relative;
    width:100%;
    border-color:#B9BEC5
    
}
.table-box{
    
}
</style>
