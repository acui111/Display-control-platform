<template>
  <!-- 信号源中每一项组成的列表 -->
  <div id="signal-list">
    <img src="/image/left.png" class="signal-left" @click="goToRight">
    <div
      class="scroll-container"
      v-scroll-left="scrollLeft"
    >
      <template v-for="signal in signalList" >
        <SignalItem
          :key="signal.id"
          :id="signal.id" 
          :title="signal.title" 
          :src="signal.src"
        />
      </template>
      
    </div>
    <img src="/image/right.png" class="signal-right" @click="goToRight">
  </div>
</template>
  
<script type="text/ecmascript-6">
import SignalItem from './SignalItem'
  export default {
    name:'SignalList',
    props:['signalList'],
    data(){
      return{
        scrollLeft:0,
      }
    },
    components:{
      SignalItem
    },
    methods:{
      goToLeft(){
        this.scrollLeft -= 174;
      },
      goToRight(){
        this.scrollLeft += 174;
      }
    },
  }
</script>
  
<style scoped>
  #signal-list{
    width: 100%;
    height: 147px;
    position:absolute;
    left: 0;
    bottom: 0;
    
  }
  #signal-list .signal-left{
    width:13px;
    height: 24px;
    position:absolute;
    left: 0;
    top: 50%;
    transform:translateY(-50%)
  }
  #signal-list .signal-right{
    width:13px;
    height: 24px;
    position:absolute;
    right: 0;
    top: 50%;
    transform:translateY(-50%)
  }
  #signal-list .scroll-container{
    width:96%;
    height: 100%;
    position:absolute;
    left: 2%;
    overflow-x: auto;
    display: flex;
    align-items: center;
  }
  #signal-list .scroll-container::-webkit-scrollbar {
    display: none;
  }
</style>