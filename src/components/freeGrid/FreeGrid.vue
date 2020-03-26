<template>
  <div
    id="components-grid"
    ref="components-grid"
    :style="{
      width: width + 'px',
      height: height + 'px'
    }"
  >
    <template v-for="hLine of hLines">
      <HLine
        :key="hLine.id"
        :id="hLine.id"
        :top="hLine.top"
        :status="hLine.status"
        style="background:rgba(100,183,255,1)"
      />
    </template>

    <template v-for="vLine of vLines">
      <VLine
        :key="vLine.id"
        :id="vLine.id"
        :left="vLine.left"
        :status="vLine.status"
        style="background:rgba(100,183,255,1)"
      />
    </template>

    <template v-for="fLayer of fLayers">
      <Layer
        :key="fLayer.id"
        :id="fLayer.id"
        :top="fLayer.top"
        :order="fLayer.order"
        :left="fLayer.left"
        :width="fLayer.width"
        :height="fLayer.height"
      />
    </template>
  </div>
  
</template>
  
<script type="text/ecmascript-6">
  import { v4 as uuidv4 } from "uuid";
  import _ from "lodash";
  import HLine from "./HLine";
  import VLine from "./VLine";
  import Layer from "./Layer";
  export default {
    name:"Grid",
    components: {Layer, VLine, HLine },
    props: ["width", "height", "rows", "cols", "layerList"],
    data(){
      return{
        hLines: [],
        vLines: [],
        fLayers: [],
      }
    },
    mounted(){
      this.$events.on('setFreeGridLayout',()=>{
        this.setLayout();
      })
      this.$events.on("dragLayer", ({ id, geometry }) => {
        const target = _.find(this.fLayers, { id });
        target.left = geometry.left;
        target.top = geometry.top;

        _.forEach(this.hLines, hLine => {
          hLine.status = 0;
          if (target.top - hLine.top > 0 && target.top - hLine.top < 5) {
            hLine.status = 1;
          }
          if (
            hLine.top - (target.top + target.height) > 0 &&
            hLine.top - (target.top + target.height) < 5
          ) {
            hLine.status = 1;
          }
        });

        _.forEach(this.vLines, vLine => {
          vLine.status = 0;
          if (target.left - vLine.left > 0 && target.left - vLine.left < 5) {
            vLine.status = 1;
          }
          if (
            vLine.left - (target.left + target.width) > 0 &&
            vLine.left - (target.left + target.width) < 5
          ) {
            vLine.status = 1;
          }
        });
      });

      this.$events.on("dragLayerEnd", ({ id }) => {
        const target = _.find(this.fLayers, { id });
        _.forEach(this.hLines, hLine => {
          hLine.status = 0;
          if (target.top - hLine.top > 0 && target.top - hLine.top < 5) {
            target.top = hLine.top;
          }
          if (
            hLine.top - (target.top + target.height) > 0 &&
            hLine.top - (target.top + target.height) < 5
          ) {
            target.top = hLine.top - target.height;
          }
        });

        _.forEach(this.vLines, vLine => {
          vLine.status = 0;
          if (target.left - vLine.left > 0 && target.left - vLine.left < 5) {
            target.left = vLine.left;
          }
          if (
            vLine.left - (target.left + target.width) > 0 &&
            vLine.left - (target.left + target.width) < 5
          ) {
            target.left = vLine.left - target.width;
          }
        });
      });

      this.$events.on("resizeLayer", ({ id, geometry }) => {
        const target = _.find(this.fLayers, { id });
        target.left = geometry.left;
        target.top = geometry.top;
        target.width = geometry.width;
        target.height = geometry.height;

        _.forEach(this.hLines, hLine => {
          hLine.status = 0;
          if (geometry.top - hLine.top > 0 && geometry.top - hLine.top < 5) {
            hLine.status = 1;
          }
          if (
            hLine.top - (geometry.top + geometry.height) > 0 &&
            hLine.top - (geometry.top + geometry.height) < 5
          ) {
            hLine.status = 1;
          }
        });

        _.forEach(this.vLines, vLine => {
          vLine.status = 0;
          if (geometry.left - vLine.left > 0 && geometry.left - vLine.left < 5) {
            vLine.status = 1;
          }
          if (
            vLine.left - (geometry.left + geometry.width) > 0 &&
            vLine.left - (geometry.left + geometry.width) < 5
          ) {
            vLine.status = 1;
          }
        });
      });

      this.$events.on("resizeLayerEnd", ({ id }) => {
        const target = _.find(this.fLayers, { id });
        _.forEach(this.hLines, hLine => {
          hLine.status = 0;
          if (target.top - hLine.top > 0 && target.top - hLine.top < 5) {
            target.height += target.top - hLine.top;
            target.top = hLine.top;
          }
          if (
            hLine.top - (target.top + target.height) > 0 &&
            hLine.top - (target.top + target.height) < 5
          ) {
            target.height += hLine.top - (target.top + target.height);
            target.top = hLine.top - target.height;
          }
        });

        _.forEach(this.vLines, vLine => {
          vLine.status = 0;
          if (target.left - vLine.left > 0 && target.left - vLine.left < 5) {
            target.width += target.left - vLine.left;
            target.left = vLine.left;
          }
          if (
            vLine.left - (target.left + target.width) > 0 &&
            vLine.left - (target.left + target.width) < 5
          ) {
            target.width += vLine.left - (target.left + target.width);
            target.left = vLine.left - target.width;
          }
        });
      });

      this.$events.on("tapLayer", ({ id }) => {
        const target = _.find(this.fLayers, { id });
        const topLayer = _.maxBy(this.fLayers, "order");
        target.order = topLayer.order + 1;
      });

      this.$events.on("doubletapLayer", ({ id }) => {
        const target = _.find(this.fLayers, { id });
        let top, left, bottom, right;
        _.forEach(this.hLines, hLine => {
          if (hLine.top <= target.top) {
            top = hLine.top;
          }

          if (!bottom && hLine.top >= target.top + target.height) {
            bottom = hLine.top;
          }
        });

        _.forEach(this.vLines, vLine => {
          if (vLine.left <= target.left) {
            left = vLine.left;
          }

          if (!right && vLine.left >= target.left + target.width) {
            right = vLine.left;
          }
        });

        target.top = top;
        target.left = left;
        target.width = right - left;
        target.height = bottom - top;
      });
    },
    methods: {
      setLayout() {
        this.hLines = [];
        for (let n = 0; n < parseInt(this.rows) + 1; n++) {
          this.hLines.push({
            id: uuidv4(),
            top: (this.height / this.rows) * n,
            status: 0
          });
        }

        this.vLines = [];
        for (let n = 0; n < parseInt(this.cols) + 1; n++) {
          this.vLines.push({
            id: uuidv4(),
            left: (this.width / this.cols) * n,
            status: 0
          });
        }

        this.fLayers = [];
        for (let feature of this.layerList) {
          this.fLayers.push({
            id: uuidv4(),
            left: (feature.left / 65536) * this.width,
            top: (feature.top / 65536) * this.height,
            order: 0,
            width: (feature.width / 65536) * this.width,
            height: (feature.height / 65536) * this.height
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
  }
</style>