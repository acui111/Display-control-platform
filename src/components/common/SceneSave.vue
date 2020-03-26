<template>
  <div id="save-scene">
    <a-modal
      :visible="sceneSaveVisible"
      :closable=false
      :centered=true
      :footer="null"
      width="453px"
      :bodyStyle="{'width':'453px','padding':'0','height':'344px','background':'rgba(19,78,135,1)','border':'1px solid rgba(66,167,255,1)','border-radius':'3px','position':'relative'}"
        >
      <!-- 对话框头部 -->
      <div style="width:100%;height:40px;text-align:center;line-height:40px">
        <p
          style="font-size:16px;font-family:SimHei;font-weight:400;color:rgba(219,238,255,1);border-bottom:1px solid rgba(24,113,200,1)"
        >保存场景</p>
      </div>
      <!-- 对话框主体 -->
      <div style="margin:33px 62px 0">
        <div>
          <p style="margin:0;margin-bottom:7px;font-size:13px;font-family:SimHei;font-weight:400;color:rgba(227,242,255,1);"
          >场景名称：</p>
          <a-input 
            placeholder="请输入场景名称" 
            style="border-radius:1px;background:rgba(238,247,255,1)"
          />
        </div>
        <div>
          <p 
            style="margin:0;margin:24px 0 7px;font-size:13px;font-family:SimHei;font-weight:400;color:rgba(227,242,255,1);"
          >布局方案：</p>
          <div style="width:100%;height:83px;background:rgba(238,247,255,1);border-radius:1px;">
            浏览场景
          </div>
          <div style="padding-top:13px">
            <a-checkbox></a-checkbox>
            <span 
              style="font-size:11px;font-family:SimHei;font-weight:400;color:rgba(227,242,255,1);"
            >同时将此布局保存为一个新的布局方案，便于以后快速使用</span>
          </div>
        </div>
      </div>
      <!-- 对话框底部按钮 -->
      <div style="width:100%;height:40px;position:absolute;right:0;bottom:0">
        <div style="position:absolute;right:0;bottom:0;margin-bottom:8px">
          <img 
            src="/image/save_icon1.png" 
            @click="saveScene" 
            width="67" height="23"
          >
          <img 
            src="/image/save_icon2.png" 
            @click="cancelScene" 
            width="67" height="23" 
            style="margin-left:21px;margin-right:8px"
          >
        </div>
      </div>
    </a-modal>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'SceneSave',
    data(){
      return{
        sceneSaveVisible:false,
      }
    },
    methods:{
      saveScene(){
        this.sceneSaveVisible = false
      },
      cancelScene(){
        this.sceneSaveVisible = false
      },
    },
    mounted() {
      this.$events.on('saveScene',(sceneSaveVisible)=>{
        this.sceneSaveVisible = sceneSaveVisible
      })
    }
  }
</script>
  
<style scoped>
  
</style>