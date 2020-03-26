export default function (Vue) {
  const editor = new Vue({
    data(){
      return{
        screenId:0,
        menuStatus:'select-screen',
        sceneId:0,
        layoutModeId: 0,
      }
    }
  })
  
  Vue.mixin({
    created(){
      this.$editor = editor;
    }
  })
}

