<template>
    <div ref = 'bei' class="card">
        <div v-if="tab===1" class="card-body" @click="tab = 2">
            <div class="img">
                <div class="discribe">{{discribe}}
                    <br>
                    点击选购
                </div>
            </div>
        </div>
        <div  v-if="tab===2" class="card-body "  @click="tab = 1">
                <radiogroup ref = 'bb' value="中杯" type="button">
                    <radio lable = '中杯' @click.native="bei = '中杯'"></radio>
                    <radio lable = '大杯' @click.native="bei = '大杯'"></radio>
                </radiogroup>
                <radiogroup value="热" type="button">
                    <radio lable = '冷'></radio>
                    <radio lable = '温'></radio>
                    <radio lable = '热'></radio>
                </radiogroup>
                <radiogroup value="正常" type="button">
                    <radio lable = '无糖'></radio>
                    <radio lable = '少糖'></radio>
                    <radio lable = '正常'></radio>
                </radiogroup>
            <div class="body-item"><h4>{{comput}}元</h4></div>
            <mybutton type="primary" width='160'>加入购物车</mybutton>
        </div> 
        <div class="name"><h3>{{name}}</h3></div>

    </div>
</template>
<script>
import radiogroup from '../radio/radio-group'
import radio from '../radio/radio'
import mybutton from '../mybutton/mybutton'
export default {
    components:{
        radio,
        radiogroup,
        mybutton
    },
    props:{
        name:String,
        discribe:String,
        price:[Number,String]
    },
    data(){
        return{
            tab:1,
            bei:'中杯'
        }
    },
    computed:{
        comput(){
            let price
            if(this.tab === 2&&this.bei==='中杯') price = this.price
            if(this.tab === 2&&this.bei==='大杯')  price = parseInt(this.price) +8
            return price
        }
    },
    watch:{
        // bei(){
        //     console.log(this.bei , "bbbbbbbbbbbbbbbbei")
        // }
    },
    mounted(){
        console.log('kkkk',this.discribe)
    }
}
</script>
<style>
.card{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-body{
    position: relative;
    width: 200px;
    height: 200px;
    border:0.5px solid #aaa;
    border-radius: 5px;
    box-shadow:4px  5px 5px #aaa;
}
.card-body:hover >.img > .discribe{
    visibility: visible;
}
.discribe{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    z-index: 11;
    visibility: hidden;
}
.name {
    margin-top: 20px;
    margin-bottom: 20px
}
.card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
/* .body-item *{
    margin-left: 5px
} */
</style>
