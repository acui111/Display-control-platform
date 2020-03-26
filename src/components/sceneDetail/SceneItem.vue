<template>
  <!-- 场景列表的每一项 -->
  <div id="scene-item" :class="{active:this.$editor.sceneId == this.id}">
    <div class="scene-item-container">
      <template v-for="layer in layerList">
        <div
          @click="onClick"
          :style="{
            left: (layer.left/65536) *146 + 'px',
            top: (layer.top/65536)* 64+ 'px',
            width: (layer.width/65536)*146 + 'px',
            height: (layer.height/65536)*64 + 'px',
            'backgroundImage': `url(${layer.src})`,
            'backgroundSize':'100% 100%',
          }"
          >
        </div>
      </template>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  export default {
    name:'SceneItem',
    props: ['id','name','layerList'],
    methods:{
      onClick(){
        this.$editor.sceneId = this.id;
        this.$events.emit('setScenePerviewer',{layerList:this.layerList});
      }
    },
  }
</script>
  
<style scoped>
  #scene-item{
    width: 162px;
    height: 80px;
    margin-right: 120px;
    display:flex;
    align-items: center;
  }
  #scene-item .scene-item-container{
    width: 146px;
    height: 64px;
    position: relative;
  }
  #scene-item div{
    position: absolute;
  }
  .active{
    border: 8px solid white;
    border-image: url('/image/new_Selection.png') 8 8 repeat;
  }
</style>