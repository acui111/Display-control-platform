<template>
  <!-- 场景列表的每一项 -->
  <div id="scene-perviewer">
    <template v-for="layer in layerList">
      <div 
        class="scene-layer"
        :style="{
          left: (layer.left/65536) *100 + '%',
          top: (layer.top/65536)*100 + '%',
          width: (layer.width/65536)*100 + '%',
          height: (layer.height/65536)*100 + '%',
          'backgroundImage': `url(${layer.src})`,
          'backgroundSize':'100% 100%',
        }"
        >
        {{layer.id}}
      </div>
    </template>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'SceneItem',
    
    data(){
      return{
        layerList : [],
      }
    },
    mounted(){
      this.$events.on('setScenePerviewer',({layerList})=>{
        this.layerList = layerList;
      })
    }
  }
</script>
  
<style scoped>
  #scene-perviewer{
    width: 100%;
    height: calc(100% - 262px);
    background-color: #000;
    position: relative;
  }
  #scene-perviewer .scene-layer{
    position: absolute;
    border: 1px solid white;
  }
</style>