<template>
  <div id="header-menu">
    <a-layout style="width:100%;height:60px;background:rgba(14,69,123,1)" type="flex" justify="space-around">
      <a-row style="width:100%;height:100%">

        <a-col class="header-menu-left" :span="4">
          <img src="/image/logo.png" alt="logo">
          <span>中天智领智慧显控系统</span>
          <p>{{title}}</p>
        </a-col>


        <a-col class="header-menu-center" :span="16" :push="3">

          <div class="btn-select-screen" @click="selectScreen">
            <router-link to="/home/screenmanagement">
              <img 
                src="image/btn-select-screen_s.png" 
                v-if="this.$editor.menuStatus == 'select-screen'">
              <img 
                src="image/btn-select-screen.png"
                v-else>
              <p style="color:rgba(66,167,255,1)"
                v-if="this.$editor.menuStatus == 'select-screen'"
              >选择屏幕</p>
              <p v-else>选择屏幕</p>
            </router-link>
          </div>

          <div 
            @click="publishScene"
            class="btn-publish-scene" 
            style="margin:0 18px 0 43px"
            v-if="this.$editor.screenId > 0"
            >
            <img src="image/btn-publish-scene_s.png" 
              v-if="this.$editor.menuStatus == 'publish-scene'">
            <img src="image/btn-publish-scene.png" 
              v-else>
            
            <p 
              style="margin-left:10px;color:rgba(66,167,255,1)"
              v-if="this.$editor.menuStatus == 'publish-scene'"
            >上屏</p>
            <p
              style="margin-left:10px"
              v-else
            >上屏</p>
          </div>
          <div 
            v-if="this.$editor.screenId > 0"
            style="width:1px;height:36px;background:rgba(100,183,255,1)"
            >
          </div>

          <div 
            @click="addScene"
            class="btn-add-scene" 
            style="margin-left:15px"
            v-if="this.$editor.screenId > 0"
            >
            <router-link to="/home/sceneadd">
              <img src="image/btn-add-scene_s.png" 
                v-if="this.$editor.menuStatus == 'add-scene'">
              <img src="image/btn-add-scene.png" 
                v-else>
              <p 
                style="color:rgba(66,167,255,1)"
                v-if="this.$editor.menuStatus == 'add-scene'"
              >新建场景</p>
              <p v-else>新建场景</p>
            </router-link>
          </div>

          <div 
            class="btn-save-scene" 
            @click="saveScene" 
            v-if="this.$editor.screenId > 0"
            >
            <img src="image/btn-save-scene.png" 
            v-if="this.$editor.menuStatus == 'add-scene'">
            <img src="image/btn-save-scene_n.png"
              v-else>
            <p 
              v-if="this.$editor.menuStatus == 'add-scene'"
            >保存场景</p>
            <p v-else style="color:rgba(165,165,165,1)">保存场景</p>
          </div>

          <div 
            class="btn-remove-scene"
            v-if="this.$editor.screenId > 0" 
            @click="removeScene">
            <img src="image/btn-remove-scene_s.png" 
              v-if="this.$editor.menuStatus == 'remove-scene'">
            <img src="image/btn-remove-scene.png" 
              v-else>
            <p 
              style="color:rgba(66,167,255,1)"
              v-if="this.$editor.menuStatus == 'remove-scene'"
            >删除场景</p>
            <p v-else>删除场景</p>
          </div>

          <div 
            @click="resetScene"
            class="btn-reset-scene"
            v-if="this.$editor.screenId > 0" 
            >
            <img src="image/btn-reset-scene.png" 
              v-if="this.$editor.menuStatus == 'reset-scene'">
            <img src="image/btn-reset-scene_n.png"
              v-else>
            <p v-if="this.$editor.menuStatus == 'reset-scene'">恢复默认</p>
            <p v-else style="color:rgba(165,165,165,1)">恢复默认</p>
          </div>

          <div 
            @click="editScene"
            class="btn-edit-scene" 
            v-if="this.$editor.screenId > 0">
            <router-link to="/home/sceneedit">
              <img src="image/btn-edit-scene_s.png" 
                v-if="this.$editor.menuStatus == 'edit-scene'"> 
              <img src="image/btn-edit-scene.png" 
                v-else> 
              <p 
                style="color:rgba(66,167,255,1)"
                v-if="this.$editor.menuStatus == 'edit-scene'"
              >调整布局</p>
              <p v-else>调整布局</p>
            </router-link>
          </div>
        </a-col>


        <a-col :span="4" class="header-menu-right">
          <div>
          <img src="/image/icon_name.png" width="19px" height="19px">
          <span style="font-size:15px;font-family:Verdana;font-weight:400;color:rgba(221,239,255,1);margin-left:3px">未登录</span>
          </div>
          <div>
            <img src="/image/icon_mix.png" width="16px" height="1px">
          </div>
          <div>
            <img src="/image/icon_close.png" width="16" height="16">
            
          </div>
        </a-col>
      </a-row>
    </a-layout>

    <SceneSave/>

    <SceneRemove/>

    <router-view></router-view>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import SceneSave from './SceneSave'
  import SceneRemove from './SceneRemove'
  export default {
    name: 'Header',
    data(){
      return{
        title:'请选择一块屏幕',
      }
    },
    components:{
      SceneSave,
      SceneRemove
    },
    methods:{
      //选择
      selectScreen(){
        this.$editor.screenId = 0;
        this.$editor.menuStatus = 'select-screen';
      },
      //上屏
      publishScene(){
        this.$editor.menuStatus = 'publish-scene';
      },
      //新建
      addScene(){
        this.$editor.menuStatus = 'add-scene';
        this.$router.replace('/home/sceneadd');
      },
      //保存
      saveScene(){
        this.$events.emit('saveScene',true);
      },
      //删除
      removeScene(){
        this.$editor.menuStatus = 'remove-scene';
        this.$events.emit('removeScene',true);
      },
      //恢复默认
      resetScene(){
        this.$editor.menuStatus = 'reset-scene';
      },
      //调整
      editScene(){
        this.$editor.menuStatus = 'edit-scene';
        this.$router.replace('/home/sceneedit');
      },
    },
    mounted(){
      this.$events.on('setHeaderMenuTitle',(title)=>{
        this.title = title;
      })
    },
  }
</script>
  
<style scoped>
  #header-menu{
    width: 100%;
    height: 100%;
    
  }
  #header-menu .header-menu-left{
    height: 100%;
    padding:10px 12px 10px;
  }
  #header-menu .header-menu-left img{
    width: 13px;
    height: 12px;
  }
  #header-menu .header-menu-left span{
    font-size:12px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(221,239,255,1);
    margin-left: 5px;
  }
  #header-menu .header-menu-left p{
    font-size:16px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(66,167,255,1);
  }

  #header-menu .header-menu-center div{
    display: inline-block;
  }
  #header-menu .header-menu-center img{
    width: 19px;
    height: 19px;
    margin: 16px 0 0 12px;
  }
  #header-menu .header-menu-center p{
    font-size:11px;
    font-family:SimHei;
    font-weight:400;
    color:rgba(221,239,255,1);
    margin-top:6px
  }
  #header-menu .header-menu-center .btn-save-scene,
  #header-menu .header-menu-center .btn-reset-scene{
    margin:0px 55px
  }

  #header-menu .header-menu-right{
    display: flex;
    justify-content: space-around;
    height: 60px;
    line-height: 45px;
  }
</style>