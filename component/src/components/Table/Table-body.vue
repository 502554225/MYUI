<template>
    <tbody>
        <tr v-for="(items,index) in bodyData" >
            <td v-for="item in items">
                <cell :cellData='item' :renderData="renderData" :row="items" :index="index" ></cell>
            </td>
        </tr>
    </tbody>
</template>
<script>
import cell from "./Table-cell.vue";
export default {
    name:'tablebody',
    components:{
        cell 
    },
    props:{
        bodyData:{
            type:Array,
            default:()=>[]
        },
        renderData:Array,
    },
    computed:{
        
    },
    mounted(){
    }
}
</script>
<style scoped>
    td{
        /* border-top: 1px solid #B9BEC5;
        border-bottom: 1px solid #B9BEC5; */
    }
    tr:hover{
        background: #F7FAFC
    }
 
</style>

