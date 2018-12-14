<template>
<div class="main">
  <div class="tarbar-top">
      <div class="tarbar-btn">
        <div class="myLogo">
          <div class="information">
            <div class="information-body"></div>
            <div class="btn-box">
              <router-link to="/login"><mybutton >注销</mybutton></router-link>
            </div>
          </div>
        </div>
        <div class="tarbar-btn-body">
            <tabs ref="tabs" :value = "router" @changeV="changeR">
              <tab label="首页" :name="1" @click.native="changeR(1)"></tab>
              <tab label="购物车" :name="2" @click.native="changeR(2)"></tab>
              <tab label="历史订单" :name="3" @click.native="changeR(3)"></tab>
            </tabs>
        </div>
        
      </div>
  </div>
  <div class="fitter"></div>
  <div class="bc"></div>
  <router-view/>
  <foot></foot>
  
</div>
  
</template>

<script>
  
  import tabs from './Tabs/Tabs'
  import tab from './Tabs/Tab'
  import mybutton from './mybutton/mybutton'
  import foot from './footer'
  export default {
  name: 'HelloWorld',
  components:{
    mybutton,
    tab,
    tabs,
    foot
  },
  data () {
    return {
      router:1,
      
    }
  },
  computed:{
    
  },
  methods:{
    changeR(index){
      this.router = index;
    }
  },
  watch:{
    router(){
      this.$router.push('/index'+this.router);
    }
  },
  mounted(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  position: relative;
  width: 100%;
  background: #eee;
}

.tarbar-top{
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: 10;
  width: 100%;
  height: 40px;
  color: black;
  
}
.fitter{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  opacity: 0.4;
  z-index: 0;
  filter: blur(2px);
  background: rgba(255, 255, 255, 0.9);
  pointer-events: none;
  /* background-color: #fff; */
}
.tarbar-btn{
  /* display: flex; */
  position: absolute;
  /* float: right; */
  right: 0;
  width: 400px;
  z-index: 10;
}

.button-box{
  display: flex;
  float: right;
  width: 500px;
 
}
.btn{
  flex: auto;
}
.myLogo{
  position: relative;
  float: right;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  border-radius: 50%;
  background: #999;
  z-index: 10;
}
.tarbar-btn-body{
  float: right;
  width: 300px;
  margin-top: 10px
}
.information{
  position: absolute;
  width: 220px;
  height: 140px;
  top: 40px;
  right: 0px;
  background: #fff;
  visibility: hidden;
}
.myLogo:hover  .information{
  visibility: visible;
  z-index: 20;
}
.information-body{
  width: 100%;
  height: 110px;
}
.btn-box{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
}
</style>
