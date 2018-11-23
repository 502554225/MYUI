<template>
  <div>
    <radio-group value="壹">
      <radio lable = '壹'></radio>
      <radio lable = '贰'></radio>
      <radio lable = '叁'></radio>
    </radio-group>
    <radio-group value="111" type="button">
      <radio lable = '111'></radio>
      <radio lable = '222'></radio>
      <radio lable = '3333'></radio>
    </radio-group>
    <cascader :data="list"></cascader>
    <steps>
      <step titil="已完成" describe="这里是一个描述"></step>
      <step titil="已完成"></step>
      <step titil="已完成"></step>
    </steps>
  </div>
</template>

<script>
  import radio from './radio/radio'
  import radioGroup from './radio/radio-group'
  import cascader from './cascader/cascader'
  import steps from './Steps/steps'
  import step from './Steps/step'
  export default {
  name: 'HelloWorld',
  data () {
    return {
      list: [
        {
          value:'hangzhou',
          label:'杭州',
          child:[
            {
              value:'xihuqv',
              label:'西湖区',
              child:[
                {
                  value:'xihuqv',
                  label:'西湖区'
                }
              ]
            },
            {
              value:'gongshuqv',
              label:'拱墅区',
            }
          ]
        },
        {
          value:'beijing',
          label:'北京',
          child:[
            {
              value:'yihuan',
              label:'一环',
            },
            {
              value:'erhuan',
              label:'二环',
            }
          ]
        }
      ]
    }
  },
  components:{
    radioGroup,
    radio,
    cascader,
    step,
    steps
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
