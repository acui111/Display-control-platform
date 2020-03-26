<template>
  <!-- 每一项布局 -->
  <div id="layout-item">
    <img
      :class="{active:this.$editor.layoutModeId == this.id}"
      :src="src" 
      @click="onClick" 
      width="137"
    >
    </ul>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'LayoutItem',
    props:['id','src','layerList'],
    methods:{
      onClick(){
        this.$editor.layoutModeId = this.id;
        this.$events.emit("setFixedGrid", {layerList: this.layerList});
      }
    },
  }
</script>
  
<style scoped>
  #layout-item img{
    box-sizing: border-box;
  }
  .active{
    border: 8px solid rgba(1,231,254,1);
    border-image: url('/image/new_Selection.png') 8 8 repeat;
  }
</style>