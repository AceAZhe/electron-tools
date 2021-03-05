<template>
  <div class="new-editor">
      <div id="editor-bar" style="display:none"></div>
      <div id="editor-content"></div>
  </div>
</template>

<script>
import Editor from 'wangeditor';
import hljs from 'highlight.js';
export default {
    data(){
        return{
            myEditor:null
        }
    },
    mounted(){
        this.$nextTick(()=>{
            this.init()
        })
    },
    methods:{
        init(){
            this.myEditor=new Editor("#editor-bar","#editor-content");
            this.myEditor.config.onchangeTimeout = 500;
            this.myEditor.config.historyMaxSize = 5;
            this.myEditor.config.compatibleMode = function () {
                return true
            }
            this.myEditor.config.colors = [
                '#000000',
                '#eeece0',
                '#1c487f',
                '#4d80bf'
            ]
            this.myEditor.config.fontNames = [
                '黑体',
                '仿宋',
                '楷体',
                '标楷体',
                '华文仿宋',
                '华文楷体',
                '宋体',
                '微软雅黑',
                'Arial',
                'Tahoma',
                'Verdana',
                'Times New Roman',
                'Courier New',
            ]
            this.myEditor.config.lineHeights = ['1', '1.15', '1.6', '2', '2.5', '3'];
            this.myEditor.highlight = hljs;
            this.myEditor.config.placeholder="";
            this.myEditor.create();
            this.myEditor.$textElem.attr('contenteditable', false); 
        },
        setHtml(html){
            this.myEditor.txt.html(html); 
        },
        appendHtml(html){
            this.myEditor.txt.append(html); 
        },
        getText(){
            return this.myEditor.txt.text(); 
        },
        getHtml(){
            return this.myEditor.txt.html(); 
        },
        clearText(){
            this.myEditor.txt.clear(); 
        }
    }
}
</script>
<style lang="scss" scoped>
.new-editor{
    font-size: 14px;
    padding: 5px 10px;
}
</style>