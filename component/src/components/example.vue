<template>
    <div class="container">
        <div class="container-item">
            <checkbox></checkbox>
        </div>
        <div class="container-item">
            <radiogroup value="壹">
                <radio lable = '壹'></radio>
                <radio lable = '贰'></radio>
                <radio lable = '叁'></radio>
            </radiogroup>
        </div>
        <div class="container-item">
        <radiogroup value="111" type="button">
            <radio lable = '111'></radio>
            <radio lable = '222'></radio>
            <radio lable = '3333'></radio>
            </radiogroup>
        </div>
        <div class="container-item">
            <cascader :data="list"></cascader>
        </div>
        <div class="container-item">
            <steps :current="1">
              <step titil="已完成" describe="这里是一个描述"></step>
              <step titil="进行中" describe="这里是一个描述"></step>
              <step titil="待进行" describe="这里是一个描述"></step>
            </steps>
        </div>
        <div class="container-item">
            <steps :current="1" state="error">
              <step titil="已完成" describe="这里是一个描述"></step>
              <step titil="进行中" describe="这里是一个描述"></step>
              <step titil="待进行" describe="这里是一个描述"></step>
            </steps>
        </div>
        <div class="container-item">
            <steps :current="1" direction="vertical">
              <step titil="已完成" describe="这里是一个描述"></step>
              <step titil="进行中" describe="这里是一个描述"></step>
              <step titil="待进行" describe="这里是一个描述"></step>
            </steps>
        </div>
        <div class="container-item">
            <mytable :columns='columns1' :data='tableData'></mytable>
        </div>
        <div class="container-item">
            <mytable :columns='columns1' :data='tableData ' :border='true'></mytable>
        </div>
        <div class="container-item">
            <mytable :columns='columns2' :data='tableData' :selection="true"></mytable>
        </div>
        <div class="container-item">
            <ibutton>default</ibutton>
        </div>
        <div class="container-item">
            <ibutton size="big">big</ibutton>
        </div>
        <div class="container-item">
            <ibutton type="round">round</ibutton>
        </div>
        <div class="container-item">
            <ibutton color="blue">blue</ibutton>
        </div>
        <div class="container-item">
            <ibutton isForbidden="true">fobidden</ibutton>
        </div>
        <div class="container-item">
            <ibutton :icon="icon" :isForbidden="isForbidden" @click.native="commit">{{btnData}}</ibutton>
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
  import ibutton from './button/button.vue';
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
        ibutton
    },
    data(){
        return{
            icon:'',
            isForbidden:false,
            btnData:'提交',
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
                        value:'xihu',
                        label:'西湖'
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
            ],
            columns1:[
          
              // {
              //   title: 'Name1',
              //   key: 'name1'
              // },
              {
                title: 'Name',
                key: 'name'
              },
              {
                title: 'Age',
                key: 'age',
                
              },
              {
                title: 'Address',
                key: 'address',  
                      
              },
              {
                title: 'Action',
                key: 'action',  
                render: (h,params) => {
                  return h('div', [
                    h('Button', {
                      style: {
                        marginRight: '5px'
                      },
                      on: {
                            click: () => {
                              this.show(params.index)
                            }
                          }
                    }, 'View'),
                    h('Button', {
                      }, 'Delete')
                    ]);
                }  
              }
            ],
            columns2:[
              {
                type: 'selection',
                width: 60,
                align: 'center'
              },
              {
                title: 'Name',
                key: 'name'
              },
              {
                title: 'Age',
                key: 'age'
              },
              {
                title: 'Address',
                key: 'address',            
              }
            ],
            tableData:[
              {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park',
              },
              {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park',
              },
              {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park',
              },
              {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park',
              }
            ]
        }
    },
    methods:{
      commit(){
        console.log('commit')
        this.icon='Loading'
        setTimeout(function(){
          this.icon = ''
          this.isForbidden=true
          this.btnData = '提交成功'
        }.bind(this),3000)
      }
    }
}
</script>
<style>
.container{
  display: flex;
  flex-direction: column;
}
.container-item{
  margin-top: 30px;
  margin-left: 100px
}
</style>
