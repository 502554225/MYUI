<template>
    <div class="table-cell">
        <checkbox v-if="selection" @click.native="change"></checkbox>
        {{showData}}
        <cellrender v-if="isRender" :renderData="renderData" :row="row" :index="index"></cellrender>
    </div>
</template>
<script>
import checkbox from '.././checkbox/checkbox'
import {findComponentsUpward,findComponentsDownward} from "@/utils/assist";
import cellrender from './cellRender'
export default {
    name:'tablecell',
    components:{
        checkbox,
        cellrender
        
    },
    data(){
        return{
            selection : false,
            isRender:false,   
        }
    },
    props:{
        cellData:{
            type:[Object,String,Number],
            default:{}
        },
        renderData:[Object,Array],
        row:[Object,Array],
        index:Number
    },
    computed:{
        isHead(){
            if(((typeof this.cellData)==='object') || ((typeof this.cellData)==='array')){
                return true
            }
            if(((typeof this.cellData)==='number') || ((typeof this.cellData)==='string')){
                return false
            }
        },
        showData(){
            if(this.isHead){
                if(this.cellData.type){
                    this.selection = true
                }
            
                else return this.cellData.title
            }
             else{
                if(this.cellData==='selection'){
                    this.selection = true
                }
                else if(this.cellData==='render'){
                    this.isRender=true;

                }
                else return this.cellData
            }
        }
    },
    methods:{
        change(){
            if(this.isHead){     
                let Table = findComponentsUpward(this,'table')
                let Tablebody = findComponentsDownward(Table,'tablebody')[0]
                let Tablecells = findComponentsDownward(Tablebody,'tablecell')
                let vm = this 
                Tablecells.forEach(element => {
                    let checkbox = findComponentsDownward(element,'checkbox')[0]
                    if(checkbox){
                        checkbox.checked = findComponentsDownward(vm,'checkbox')[0].checked 
                    }
                });
            }
            else{
                let Table = findComponentsUpward(this,'table')
                let Tablebody = findComponentsDownward(Table,'tablebody')[0]
                let Tablecells = findComponentsDownward(Tablebody,'tablecell')
                //找body里的checkbox
                let vm = this 
                let allIndex = 0;
                let checkIndex = 0;
                let tablehead = findComponentsDownward(Table,'tablehead')[0]
                console.log('!!!!!:',findComponentsDownward(tablehead,'tablecell')[0])
                let headcell = findComponentsDownward(tablehead,'tablecell')[0]
                //找head里的checkbox
                Tablecells.forEach(element => {
                    let checkbox = findComponentsDownward(element,'checkbox')[0]
                    if(checkbox){
                        allIndex++  
                    }
                    if(checkbox&&!checkbox.checked){
                    
                        findComponentsDownward(headcell,'checkbox')[0].checked = false
                    }
                    else if(checkbox){
                        checkIndex++
                    } 
                });
                if (allIndex===checkIndex){
                    findComponentsDownward(headcell,'checkbox')[0].checked = true
                }
            }
        }
        
    },
    mounted(){
    }
}
</script>
<style scoped>
    .table-cell{
        display: flex;
        align-items: center;
        position: relative;
        text-align: left;
        min-height: 40px;
        line-height: 40px ;
        margin-left: 5px;
    }

</style>
