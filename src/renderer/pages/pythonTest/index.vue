<template>
  <div class="python-test h100">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in tabList" :key="index"></el-tab-pane>
    </el-tabs>
    <div class="python-content" v-loading="loading">
      <div v-if="activeName==='1'" class="content1 h100">
        <el-card class="box-card h100">
          <div slot="header" class="clearfix">
            <span class="title">卡片名称</span>
          </div>
          <div v-for="(o,i) in 50" :key="i" class="line">
            {{'列表内容 ' + i }}
          </div>
        </el-card>
      </div>
      <div v-else>
        <el-form :model="form" ref="formDom" label-width="100px" class="form" :rules="rules">
          <el-form-item
            v-for="(item,index) in formItemList" :key="index"
            :label="item.label"
            :prop="item.prop">
            <el-input v-model.trim="form[item.prop]" autocomplete="off" v-if="item.type==='input'">
               <template slot="append">{{item.slot || ""}}</template>
            </el-input>
            <el-date-picker
              v-model.trim="form[item.prop]" 
              v-if="item.type==='datetime'"
              type="datetime">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
const moment = require('moment');
export default {
  data(){
    return{
      activeName:"1",
      exeList:[],
      loading:false,
      rules:{
        name: [
          { required: true, message: '应用名称不能为空', trigger: 'blur' },
        ],
        path: [
          { required: true, message: '安装地址不能为空', trigger: 'blur' },
        ],
        deadline: [
          { required: true, message: '重启时间不能为空', trigger: 'blur' },
        ],
        interval: [
          { required: true, message: '截至时间不能为空', trigger: 'blur' },
        ],
      },
      form:{
        name:"QQ.exe",
        path:"F:\\输入法\\Tencent\\QQ\\Bin\\QQ.exe",
        deadline:"",
        interval:5
      },
      formItemList:[
        {
          label:"应用名称",
          prop:"name",
          type:"input",
          temp:"1"
        },{
          label:"安装地址",
          prop:"path",
          type:"input",
          temp:"1"
        },{
          label:"重启间隔",
          prop:"interval",
          type:"input",
          slot:"秒",
          temp:"1"
        },{
          label:"截止时间",
          prop:"deadline",
          type:"datetime",
          temp:"1"
        },
      ],
      tabList:[
        {
          label:"应用重启",
          name:"1"
        },{
          label:"monkey测试",
          name:"2"
        },{
          label:"桌面截图",
          name:"3"
        },{
          label:"桌面录屏",
          name:"4"
        }
      ]
    }
  },
  created(){
    this.init()
  },
  methods:{
    init(){
      this.setDeadline();
    },
    setDeadline(){
      const currentDay=Date.now()+1*60*1000;
      this.form.deadline = moment(currentDay).format('YYYY-MM-DD HH:mm:ss');
    },
    handleClick(){
      this.setDeadline();
    },
    startUp(){
      this.loading=true;
      console.log(this.form)
      const params={
        ...this.form
      }
      params.deadline=new Date(params.deadline).getTime();
      params.interval=parseInt(params.interval);
      this.$tool.sendToPython("startUp",[{
        ...params
      }],(res)=>{
        console.log(res);
      },()=>{
        this.loading=false;
      })
    },
    submitForm(){
      this.$refs.formDom.validate((valid) => {
          if (valid) {
            this.startUp();
          }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.python-test{
  padding: 5px 10px;
  .python-content{
    padding: 10px;
    height: calc(100% - 60px);
    overflow: hidden;
    .form{
      width: 500px;
      margin-top: 30px;
    }
    .content1{
      /deep/.el-card__body{
        padding: 10px 0 !important;
        height: calc(100% - 60px);
        overflow-y: auto;
      }
      .box-card{
        .clearfix{
          .title{
            font-size: 16px;
          }
        }
        .line{
          font-size: 14px;
          height: 36px;
          line-height: 36px;
          padding: 0 20px;
          &:hover{
            background: rgba(0,0,0,0.02);
          }
        }
      }
    }
    
  }
}
</style>