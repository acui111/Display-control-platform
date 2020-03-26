<template>
    <div
      id="components-grid"
      ref="components-grid"
      :style="{
        width: width + 'px',
        height: height + 'px'
      }"
    >
      <template v-for="fLayer of fLayers">
        <Layer
          :key="fLayer.id"
          :id="fLayer.id"
          :top="fLayer.top"
          :order="fLayer.order"
          :left="fLayer.left"
          :width="fLayer.width"
          :height="fLayer.height"
          :src="fLayer.src"
        />
      </template>
    </div>

  
</template>
  
<script type="text/ecmascript-6">
  import { v4 as uuidv4 } from "uuid";
  import _ from "lodash";
  import Layer from "./Layer";
  export default {
    name:"Grid",
    components: {Layer},
    props: ["width", "height", "layerList"],
    data(){
      return{
        fLayers: [],
      }
    },
    mounted(){
      this.$events.on('setFixedGridLayout',()=>{
        this.setLayout();
      });
      this.$events.on('setFixedGridLayer',({id,sceneId,src})=>{
        const layer = _.find(this.fLayers,{id});
        layer.src = src;
        layer.sceneId = sceneId;
      })
    },
    methods: {
      setLayout(){
        this.fLayers = [];
        for (let feature of this.layerList) {
          this.fLayers.push({
            id: uuidv4(),
            left: (feature.left / 65536) * this.width,
            top: (feature.top / 65536) * this.height,
            order: 0,
            width: (feature.width / 65536) * this.width,
            height: (feature.height / 65536) * this.height,
            src: ""
          });
        }
      }
    },
    computed: {},
  }
</script>
  
<style scoped>
  #components-grid {
    position: relative;
    border: 1px solid rgba(66,167,255,1);
  }
</style>