<template>
    <div class="ibutton" :class="[color,size,size+'-'+type,isForbidden ? 'forbidden' : 'unforbidden',]">
        <img v-if="icon!==''" class="icon" :class="'icon-'+size" :src="head+icon+'.png'">
        <slot ></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            head:'../../../static/img/'
        }
    },
    computed:{
    },
    props:{
        color:{
            type:String,
            default:'white'
        },
        size:{
            type:String,
            default:'mid'
        },
        type:{
            type:String,
            default:'fillet'
        },
        isForbidden:{
            type:Boolean,
            default:false
        },
        icon:{
            type:String,
            default:''
        }
    }
}
</script>
<style scoped>
.ibutton{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
}
.white{
    background-color: #fff;
    color: #5295E7;
    border: 1px solid #B9BEC5;
}
.white.unforbidden:hover{
    border: 1px solid #5295E7;
    color: #5295E7;
}
.blue{
    background-color:#5295e7;
    color: #fff;
}
.blue.unforbidden:hover{
    background-color: #4187dd;
}
.mid{
    width: 90px;
    height: 30px;
    line-height: 30px;
    font-size: 14px
}
.big{
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 20px
}
.mid-fillet{
    border-radius: 6px;
}
.big-fillet{
    border-radius: 8px;
}
.mid-round{
    border-radius: 15px;
}
.big-round{
    border-radius: 20px
}
.forbidden{
    border: 1px solid #a7aaaf;
    background-color: #d1d4d8;
    color: #a7aaaf;
    cursor:no-drop;
}
.icon{
    background-size: cover;
    margin-right: 6px;
}
.icon-mid{
    width: 25px;
    height: 25px;
}
.icon-big{
    width: 35px;
    height: 35px;
}
</style>
