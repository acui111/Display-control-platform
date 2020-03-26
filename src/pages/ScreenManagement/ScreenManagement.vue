<template>
  <div id="screen-management">
    <RegionList/>
  </div>
</template>
  
<script type="text/ecmascript-6">
  import RegionList from '../../components/screenManagement/RegionList'
  export default {
    name:'ScreenManagement',
    components:{
      RegionList,
    }
  }
</script>
  
<style scoped>
  #screen-management{
    width: 100%;
    height: calc(100% - 60px);
    background-image: url(/image/bj.png);
    background-size: cover;
  }
</style>