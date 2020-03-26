<template>
  <!-- 所有的区域 -->
  <div id="region-list">
    <a-row class="region-list-content">
      <ul>
        <li v-for="region in regionList" :key="region.id">
          <a-col :span="12" :offset="6">
            <p class="region-name">{{region.name}}</p>
            <hr class="line"/>
            <ScreenList 
              :screenList="region.screenList" 
              :regionName="region.name"
            />
          </a-col>
        </li>
      </ul>
    </a-row>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import ScreenList from './ScreenList'
  import data from '../../data'
  import _ from 'lodash'
  export default {
    name:'region-list',
    data(){
      return{
        regionList:[],
      }
    },
    components:{
      ScreenList
    },
    mounted(){
      this.regionList = _.cloneDeep(data.regionList)
    },
  }
</script>
  
<style scoped>
  #region-list{
    height: 100%;
    display: flex;
    flex-direction:column;
  }
  #region-list .region-list-content{
    width: 100%;
    height: 100%;
  }
  #region-list .region-list-content .region-name{
    font-size:19px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(66,167,255,1);
    margin:0;
    margin:50px 0 8px 0;
  }
  #region-list .region-list-content .line{
    margin:0;
    width:100%;
    opacity:0.7;
    border-radius:1px;
    background:rgba(11,60,109,1);
    border:1px solid rgba(66,167,255,1);
    position: relative;
  }
</style>