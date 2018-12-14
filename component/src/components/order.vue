<template>
    <div style="width:100%;height:100%">
        <div class="AD"></div>
        <div class="mainBody" >
            <div class="order">
                <mytable :columns='columns1' :data='tableData' ></mytable>
                <div style="text-align: right">共4件商品 实付款120元</div>
            </div>
            <div class="ge"></div>
            <div class="order">
                <mytable :columns='columns1' :data='tableData' ></mytable>
                <div style="text-align: right">共4件商品 实付款120元</div>
            </div>
            <div class="ge"></div>
            <div class="order">
                <mytable :columns='columns1' :data='tableData' ></mytable>
                <div style="text-align: right">共4件商品 实付款120元</div>
            </div>
            <div class="ge"></div>
            <div class="order">
                <mytable :columns='columns1' :data='tableData' ></mytable>
                <div style="text-align: right">共4件商品 实付款120元</div>
            </div>
        </div>
    </div>
</template>
<script>
    import mytable from './Table/Table'
    import mybutton from './mybutton/mybutton'

export default {
    components:{
        mytable,
        mybutton
    },
    data(){
        return{
            columns1:[
                {
                title: '我的咖啡',
                key: 'action',  
                
                }
            ],
            tableData:[
                {
                name: '卡布奇诺',
                discribe: '热+中杯+正常糖',
                price: 30
                },
                {
                name: '焦糖玛奇朵',
                discribe: '热+中杯+正常糖',
                price: 30
                },
                {
                name: '摩卡',
                discribe: '热+中杯+正常糖',
                price: 30
                },
                {
                name: '美式浓缩',
                discribe: '热+中杯+正常糖',
                price: 30
                }
            ]
        }
    }
}
</script>

<style scoped>
.mainBody{
  position: relative;
  /* width: 100%; */
  /* min-height: 100%; */
  margin: 30px;
  border-radius: 6px;
  background: #fff;
  padding: 30px;
  overflow:hidden;
  
}

.AD{  
        margin-top: -40px;
        width: 100%;
        height: 220px;
        background: url(../../static/img/bbb.jpg);
        z-index: -1;
}
.primary{
    float: right;
    margin-top: 40px
}
.ge{
    /* width: 130%; */
    height: 30px;
    background: #eee;
    margin-left: -30px;
    margin-right: -30px;
    
}
.order{
    margin-bottom: 20px
}
</style>
