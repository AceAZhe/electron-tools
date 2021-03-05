<template>
  <div class="instructions">
    <NewEditor ref="newEditor"></NewEditor>
  </div>
</template>

<script>
import NewEditor from "@/components/new-editor.vue"
export default {
  components:{
    NewEditor
  },
  mounted(){
    this.$nextTick(()=>{
      this.init();
    })
  },
  methods:{
    init(){
      this.$refs.newEditor.setHtml("<p>计划基于electron做一款应用调试，python测试，单元测试，api中文文档，常见electron问题记录于一体工具......，发布到git仓库，为了提升自己的能力以及，之后跳槽面试做准备。之后升级ts，以及单元测试。</p>");
    }
  }
}
</script>

<style lang="scss" scoped>

</style>