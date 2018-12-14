<template>
    <div v-if="isShow" class="tab" >
            <slot></slot>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            isShow:false
        }
    },
    props:{
        label:[String,Number],
        name:[String,Number],

    },
    mounted(){        
    }
}
</script>
<style scoped>
.tab{
    /* position: relative;
    width: 100%;
    height: 40px;
     */
}
/* .tab-btn{
    width: 100px;
    height: 40px;
    background-color: #ddd
}
.tab-main{
    position: absolute;

    width: 100%;
    z-index: 10;
} */
</style>
