<template>
  <!-- 每个区域对应的所有屏幕 -->
  <div id="screen-list">
    <a-row class="screen-list-content">
      <ul>
        <li v-for="screen in screenList" :key="screen.id">
          <a-col :span="6" style="position:relative">
            <img :src="screen.src" @click="onScreenSelect(screen)"/>
            <p class="screen-name">{{screen.name}}</p>
          </a-col>
        </li>
      </ul>
    </a-row>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import data from '../../data'
  import _ from 'lodash'
  export default {
    name:'ScreenList',
    props: ['screenList','regionName'],
    data(){
      return{
      
      }
    },
    methods:{
      onScreenSelect({id,name}){
        this.$editor.screenId = id;
        this.$events.emit('setHeaderMenuTitle',this.regionName + ' _ ' + name)
        this.$router.replace('/home/scenedetail')
      }
    }
  } 
</script>
  
<style scoped>
  #screen-list{
    height: 100%;
    display: flex;
    flex-direction:column;
  }
  #screen-list .screen-list-content{
    width: 100%;
    height: 100%;
  }
  #screen-list .screen-list-content img{
    width: 53px;
    height: 46px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 16px auto 5px;
  }
  #screen-list .screen-list-content .screen-name{
    font-size:13px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(221,239,255,1);
    text-align: center;
    margin-top:67px
  }
</style>