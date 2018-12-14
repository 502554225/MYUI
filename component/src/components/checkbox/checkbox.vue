<template>
    <div class="checkbox" :class="{'checked' : checked}" @click="change">
        
    </div>
</template>
<script>
export default {
    name:'checkbox',
    data(){
        return{
            checked:false
        }
    },
    methods:{
        change(){
            this.checked=!this.checked
        }
    }
}
</script>
<style scoped>
.checkbox{
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border: 1px solid #B9BEC5;
    border-radius: 3px
}
.checked{
    background: url(../../../static/img/gou.png) no-repeat ;
    background-size: cover
}
</style>
