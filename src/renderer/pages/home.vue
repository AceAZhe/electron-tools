<template>
  <div class="home h100">
    <el-container class="container h100">
      <el-aside class="h100 left">
        <el-menu
           class="h100" 
           :default-active="defaultActive">
          <el-menu-item :index="item.index" v-for="(item,index) in leftMenu" :key="index" @click="select(item)">
            <i :class="item.icon"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>       
        </el-menu>
      </el-aside>
      <el-main class="h100 right">
          <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
    data(){
        return{
            defaultActive:"2",
            leftMenu:[
                {
                    index:"1",
                    icon:"el-icon-tickets",
                    name:"使用说明",
                    path:"/instructions"
                }, {
                    index:"2",
                    icon:"el-icon-mobile",
                    name:"应用测试",
                    path:"/pythontest"
                }, {
                    index:"3",
                    icon:"el-icon-collection-tag",
                    name:"单元测试",
                    path:"/unittest"
                }, {
                    index:"4",
                    icon:"el-icon-document-checked",
                    name:"应用调试",
                    path:"/debugtest"
                }, {
                    index:"5",
                    icon:"el-icon-document",
                    name:"electron文档",
                    path:"/apitest"
                },
            ]
        }
    },
    methods:{
        select(item){
            this.defaultActive=item.index;
            this.$router.push(item.path)
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
  .container {
    .left {
      width: 200px !important;
      user-select: none;
    }
    .right {
      width: calc(100% - 200px);
      padding: 0;
    }
  }
}
</style>