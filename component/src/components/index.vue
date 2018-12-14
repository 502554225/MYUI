<template>
  <div class="index">
    <div class="AD"></div>
    <div class="mainBody" >
        <tabs :value = "1" :vertical="true" >
                    <tab :label="1" :name="1" >
                      <card v-for="item in goodsList" :name="item.name" :price='item.price' :discribe="item.discribe"></card>
                    </tab>
                    <tab :label="2" :name="2">22222222</tab>
                    <tab :label="3" :name="3">3333333</tab>
        </tabs>
        
    </div>
  </div>
</template>
<script>
  import tabs from './Tabs/Tabs'
  import tab from './Tabs/Tab'
  import radio from './radio/radio'
  import radiogroup from './radio/radio-group'
  import cascader from './cascader/cascader'
  import steps from './Steps/steps'
  import step from './Steps/step'
  import mytable from './Table/Table'
  import checkbox from './checkbox/checkbox'
  import mybutton from './mybutton/mybutton'
  import card from './card/card'
export default {
    components:{
        tabs,
        tab,
        radiogroup,
        radio,
        cascader,
        step,
        steps,
        mytable,
        checkbox,
        mybutton,
        card

    },
    data(){
        return{
          goodsList:[
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            },
            {
              name:"卡布奇诺",
              price:'30',
              discribe:"一杯好喝的咖啡"
            }
            
          ]
        }
    }
}
</script>

<style scoped>
.index{
  width: 100%;
  height: 100%;
}
.mainBody{
  position: relative;
  margin: 30px;
  border-radius: 6px;
  background: #fff;
  padding: 30px;
}

.AD{  
        margin-top: -40px;
        width: 100%;
        height: 220px;
        background: url(../../static/img/bbb.jpg);
        z-index: -1;
}
.tab{
  display: flex;
  flex-wrap: wrap;
  margin-left: 30px
  /* justify-content: space-b */
}
.tab *{
  width: 33%;
}
</style>
