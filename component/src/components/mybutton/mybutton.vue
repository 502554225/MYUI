<template>
    <div  :class="type ==='primary' ? 'primary' : 'mybutton'" :style="{'width':width+'px','height':height+'px','line-height': height+'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        width:{
            type:Number,
            default:60
        },
        height:{
            type:Number,
            default:24
        },
        type:String,
        disable:Boolean
    },
}
</script>
<style scoped>
.mybutton{
    box-sizing: border-box;
    border-radius: 3px;
    border: 1px solid #B9BEC5
}
.mybutton:hover{
    border: 1px solid #5295E7;
    color : #5295E7;
}
.primary{
    border: 1px solid #5295E7;
    background: #5295E7;
    color : #fff;
}
.primary:hover{
    border: 1px solid rgb(82, 149, 231);
    background : rgba(82, 149, 230, 0.888)
}
</style>
