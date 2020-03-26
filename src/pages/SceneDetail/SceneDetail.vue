<template>
  <!-- 场景详情 -->
  <div id="scene-detail">
    <SceneList :sceneList="sceneList"/>
    <ScenePerviewer />
    <SignalList :signalList="signalList"/>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import SceneList from '../../components/sceneDetail/SceneList'
  import ScenePerviewer from '../../components/sceneDetail/ScenePerviewer'
  import SignalList from '../../components/common/SignalList'
  import data from '../../data'
  import _ from 'lodash'
  export default {
    name:'SceneDetail',
    components:{
      SceneList,
      ScenePerviewer,
      SignalList
    },
    data(){
      return{
        signalList:_.cloneDeep(data.signalList),
        sceneList:_.cloneDeep(data.sceneList),
      }
    },
    mounted(){
      const {layerList,id} = _.first(this.sceneList);
      this.$events.emit('setScenePerviewer',{layerList});
      this.$editor.sceneId = id;
    }
  }
</script>
  
<style scoped>
  #scene-detail{
    width: 100%;
    height: calc(100% - 60px);
    background-image: url(/image/bj.png);
    background-size: cover;
  }
  
</style>