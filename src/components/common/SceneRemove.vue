<template>
  <div id="remove-scene">
    <a-modal
      :visible="removeSceneVisible"
      :closable=false
      :centered=true
      :footer="null"
      width="240px"
      :bodyStyle="{'width':'240px','padding':'0','height':'133px','background':'rgba(19,78,135,1)','border':'1px solid rgba(66,167,255,1)','border-radius':'3px'}"
      >
      <div 
        style="width:100%;height:27px;text-align:center;position:relative;border-bottom:1px solid rgba(24,113,200,1)"
      >
        <span 
          style="line-height:27pxfont-size:15px;font-family:SimHei;font-weight:400;color:rgba(66,167,255,1);"
        >提示!</span>
        <img 
          src="/image/icon3.png" 
          @click="closeScene" width='9' height="9" 
          style="position:absolute;right:0;top:0;margin:4px">
      </div>
      <div 
        style="width:100%;height:105px;text-align:center;position:relative;line-height:75px;"
      >
        <p 
          style="margin:0;font-size:16px;font-family:SimHei;font-weight:400;color:rgba(219,238,255,1)"
        >确认删除场景吗？</p>
        <img 
          src="/image/icon1.png" 
          @click="removeScene" width='67' height="23"
          style="position:absolute;left:0;bottom:0;margin:0 23px 8px"
        >
        <img 
          src="/image/icon2.png" 
          @click="cancelRemoveScene" width='67' height="23"
          style="position:absolute;right:0;bottom:0;margin:0 23px 8px"
          >
      </div>
    </a-modal>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        removeSceneVisible:false,
      }
    },
    methods:{
      //右上角的叉号取消
      closeScene(){
        this.removeSceneVisible = false
      },
      //点击确认删除
      removeScene(){
        this.removeSceneVisible = false
      },
      //点击取消删除
      cancelRemoveScene(){
        this.removeSceneVisible = false
      }
    },
    mounted() {
      this.$events.on('removeScene',(removeSceneVisible)=>{
        this.removeSceneVisible = removeSceneVisible
      })
    }
  }
</script>
  
<style scoped>
</style>