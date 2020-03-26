<template>
  <!-- 所有布局组成的列表项 -->
  <div id="layout-list">
    <div class="header">
      <span>请选择一个布局模式</span>
      <img src="/image/give_up.png" @click="giveUpScene">
      <SceneGiveUp/>
    </div>
    <div class="container">

      <template v-for="layout in layoutList">
        <LayoutModeItem
          :key="layout.id"
          :id="layout.id"
          :src="layout.src"
          :layerList="layout.layerList"
        />
      </template>

      <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick" style="background:rgba(221,239,255,1)">
            <a-menu-item 
              :key="gridStyle.id" 
              v-for="gridStyle in gridStyles"
            >
            {{gridStyle.rows}}x{{gridStyle.cols}}
            </a-menu-item>
          </a-menu>
          <img src="/image/free_layout.png" width="137" height="43">
        </a-dropdown>

    </div>
  </div>
</template>
  
<script>
  import LayoutModeItem from './LayoutModeItem'
  import SceneGiveUp from './SceneGiveUp'
  import _ from "lodash";
  export default {
    name:'LayoutList',
    components:{
      LayoutModeItem,
      SceneGiveUp
    },
    mounted() {
        this.$nextTick(()=>{
          this.$editor.layoutModeId = 1;
          const {layerList} = _.first(this.layoutList);
          this.$events.emit("setFixedGrid", {layerList});
        });
    },
    data(){
      return{
        layoutList:[
          {
            id: 1,
            src:"image/news_pic1.png",
            layerList: [
              {
                  id:1,
                  top:0,
                  left:0,
                  width:65536/2,
                  height:65536,
                  signalId:0,
                },
                {
                  id:2,
                  top:0,
                  left:65536/2,
                  width:65536/4,
                  height:65536/2,
                  signalId:0,
                },
                {
                  id:3,
                  top:0,
                  left:(65536/4)*3,
                  width:65536/4,
                  height:65536/2,
                  signalId:0,
                },
                {
                  id:4,
                  top:65536/2,
                  left:65536/2,
                  width:65536/4,
                  height:65536/2,
                  signalId:0,
                },
                {
                  id:5,
                  top:65536/2,
                  left:(65536/4)*3,
                  width:65536/4,
                  height:65536/2,
                  signalId:0,
                }
            ]
          },
          {
            id: 2,
            src: "image/news_pic2.png",
            layerList: [
              {
                id:1,
                top:0,
                left:0,
                width:(65536/4)*3,
                height:65536,
                signalId:0
              },
              {
                id:2,
                top:0,
                left:(65536/4)*3,
                width:65536/4,
                height:65536/2,
                signalId:0
              },
              {
                id:3,
                top:65536/2,
                left:(65536/4)*3,
                width:65536/4,
                height:65536/2,
                signalId:0
              }
            ]
          },
          {
            id:3,
            src: "image/news_pic3.png",
            layerList: [
              {
                id:1,
                top:0,
                left:0,
                width:65536/4,
                height:65536/2,
                signalId:0
              },{
                id:2,
                top:0,
                left:65536/4,
                width:65536/2,
                height:65536,
                signalId:0
              },{
                id:3,
                top:0,
                left:(65536/4)*3,
                width:65536/4,
                height:65536/2,
                signalId:0
              },{
                id:4,
                top:65536/2,
                left:0,
                width:65536/4,
                height:65536/2,
                signalId:0
              },{
                id:5,
                top:65536/2,
                left:(65536/4)*3,
                width:65536/4,
                height:65536/2,
                signalId:0
              }
            ]
          }
        ],

        gridStyles: [
          {
            id: 1,
            rows: 2,
            cols: 2,
            layerList: [
              
            ],
          },
          {
            id: 2,
            rows: 3,
            cols: 3,
            layerList: []
          },
          {
            id: 3,
            rows: 4,
            cols: 4,
            layerList: []
          }
        ],
      }
    },
    methods:{
      handleMenuClick({key}){
        this.$events.emit('setFreeGrid', _.find(this.gridStyles,{id:key}));
      },
      giveUpScene(){
        this.$events.emit('giveUpScene',true)
      }
    }
  }
</script>
  
<style scoped>
  #layout-list{
    width: 100%;
    height: 115px;
    position: relative;
  }
  #layout-list .header{
    width: 100%;
    height: 47px;
    text-align: center;
    line-height: 47px;
  }
  #layout-list .container{
    display:flex;
    justify-content: space-around;
    align-items: center;
  }
  #layout-list .header span{
    font-size:13px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(221,239,255,1)
  }
  #layout-list .header .grid{
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 100px;
  }
  #layout-list .header img{
    width: 53px;
    height: 23px;
    position:absolute;
    right:0;
    top: 0;
    margin:8px
  }
</style>