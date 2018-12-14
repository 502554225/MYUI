<template>
<div class="myInput" :style="{'width':width+'px','height':height+'px'}">
    <slot v-if="float==='left'"></slot>
    <input :placeholder="placeholder"  type="text">
    <slot v-if="float==='right'"></slot>
</div>
    
</template>
<script>
export default {
    props:{
        width:{
            type:Number,
            default:300
        },
        height:{
            type:Number,
            default:30
        },
        placeholder:String,
        float:String
    },
    computed:{
        // btstyle(){
        //     let style={};
        //     style.width=this.width+'px';
        //     style.height=this.height+'px'
        //     return style
        // }
    },
    mounted(){
        console.log(this.float)
    }
}
</script>

<style scoped>
.myInput{
    display: flex;
    border: 1px solid #B9BEC5;
    border-radius: 4px;
}
input:-webkit-input-placeholder{
    color: #B9BEC5
}
input{
    flex: auto;
    height: 90%;
    margin: 0 5px;
    border: none;
    outline: none;
}
input:focus .myInput{
    border: 1px solid #5295E7;
}
</style>


