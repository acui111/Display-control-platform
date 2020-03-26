<template>
  <!-- 所有的场景组成的列表 -->
  <div id="scene">
    <img class="scene-left" src="/image/left.png" @click="goToLeft">
    <img class="scene-right" src="/image/right.png" @click="goToRight">
    <div 
      class="scene-list"
      v-scroll-left="scrollLeft"
      >
      <template v-for="scene in sceneList">
          <SceneItem
          :key="scene.id"
          :id="scene.id"
          :name="scene.name"
          :layerList="scene.layerList"
          />
      </template>
    </div>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import SceneItem from './SceneItem'
  export default {
    name:'SceneList',
    components:{
      SceneItem
    },
    props: ['sceneList'],
    data(){
      return{
        scrollLeft:0,
      }
    },
    methods:{
      goToLeft(){
        this.scrollLeft -= 246;
      },
      goToRight(){
        this.scrollLeft += 246;
      }
    }
  }
</script>
  
<style scoped>
  #scene{
    width: 100%;
    height: 115px;
    position: relative;
  }
  #scene .scene-left{
    width: 13px;
    height: 24px;
    position: absolute;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  #scene .scene-right{
    width: 13px;
    height: 24px;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
  }
  #scene .scene-list{
    width: 66%;
    height: 100%;
    position: absolute;
    left: 17%;
    display:flex;
    align-items: center;
    overflow-x:auto;
  }
  #scene .scene-list::-webkit-scrollbar {
    display: none;
  }
</style>