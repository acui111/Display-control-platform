<template>
  <div
    id="fixed-grid-layer"
    ref="fixed-grid-layer"
    :style="{
      left: left + 'px',
      top: top + 'px',
      width: width + 'px',
      height: height + 'px',
      'zIndex': order,
      'border': '1px solid rgba(100,183,255,1)',
      'backgroundImage': `url(${src})`,
      'backgroundSize':'100% 100%',
    }"
  ></div>
</template>

<script>
import _ from "lodash";
import interact from "interactjs";

export default {
  name: "Layer",
  props: ["id", "left", "top", "order", "width", "height","src"],
  computed: {
    color() {
      return `rgba(${_.random(0, 255)}, ${_.random(0, 255)}, ${_.random(
        0,
        255
      )}, 0.9)`;
    }
  },
  mounted(){

    interact(this.$refs["fixed-grid-layer"]).dropzone({
        accept: ".draggable",
        ondropactivate: (ev) => {

        },

        ondragleave: (ev) => {

        },

        ondrop: (ev) => {
          this.$events.emit('setFixedGridLayer',{
            id:this.id,
            sceneId:ev.relatedTarget.getAttribute("id"),
            src:ev.relatedTarget.getAttribute("src")
          })
        },
        ondropdeactivate: (ev) => {

        },
    });
  },
};
</script>

<style scoped>
#fixed-grid-layer {
  position: absolute;
}
</style>
