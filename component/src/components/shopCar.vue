<template>
    <div style="width:100%;height:100%">
        <div class="AD"></div>
        <div class="mainBody" >
            <mytable :columns='columns1' :data='tableData' :selection="true"></mytable>
            <mybutton type="primary" width="400" height="34">结算</mybutton>
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
                render: (h,params) => {
                    return h('div', [
                    h('Span', {
                        style: {
                        marginRight: '5px',
                        color:'#5295E7',
                        cursor:'pointer'
                        },
                        // on: {
                        //     click: () => {
                        //         this.show(params.index)
                        //     }
                        // }
                    }, '编辑'),
                    h('Span', {
                        style: {
                        marginRight: '5px',
                        color:'#5295E7',
                        cursor:'pointer'
                        },
                        }, '删除')
                    ]);
                }  
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
</style>
