<template>
  <!-- 新建场景页 -->
  <div id="new-scene" ref="new-scene">
    <LayoutModeList/>
    
    <FreeGrid
      v-if="gridMode=='free'"
      ref="grid"
      :width="gridWidth"
      :height="gridHeight"
      :rows="gridRows"
      :cols="gridCols"
      :layerList="layerList"
      style="background:rgba(19,40,61,1)"
    />

    <FixedGrid
      v-if="gridMode == 'fixed'"
      :width="gridWidth"
      :height="gridHeight"
      :layerList="layerList"
      style="background:rgba(19,40,61,1)"
    />

    <SignalList :signalList="signalList"/>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import LayoutModeList from '../../components/common/LayoutModeList'
  import FreeGrid from '../../components/freeGrid/FreeGrid'
  import FixedGrid from '../../components/fixedGrid/FixedGrid'
  import SignalList from '../../components/common/SignalList'
  import data from '../../data'
  import _ from 'lodash'
  export default {
    name:'NewSnece',
    components:{
      LayoutModeList,
      FreeGrid,
      FixedGrid,
      SignalList
    },
    data(){
      return{
        layerList: [],
        signalList:_.cloneDeep(data.signalList),
        gridRows: 0,
        gridCols: 0,
        gridWidth: 0,
        gridHeight: 0,
        gridMode: ""
      }
    },
    mounted(){
      this.gridWidth = this.$refs['new-scene'].clientWidth - 2;
      this.gridHeight = this.$refs['new-scene'].clientHeight - 262;

      this.$events.on("setFixedGrid", ({layerList}) =>{
        this.gridMode = "fixed";
        this.layerList = layerList;
        this.$nextTick(()=>{
          this.$events.emit('setFixedGridLayout');
        });
      });

      this.$events.on("setFreeGrid", ({layerList,rows,cols}) =>{
        this.gridMode = "free";
        this.layerList = layerList;
        this.gridRows = rows;
        this.gridCols = cols;
        this.$nextTick(()=>{
          this.$events.emit('setFreeGridLayout');
        });
      });

    },
  }
</script>
  
<style scoped>
  #new-scene{
    width: 100%;
    height: calc(100% - 60px);
    background-image: url(/image/bj.png);
    background-size: cover;
    overflow-x: hidden; 
  }
</style>