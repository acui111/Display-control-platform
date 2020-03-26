<template>
  <div
    id="components-layer"
    ref="components-layer"
    :style="{
      left: left + 'px',
      top: top + 'px',
      width: width + 'px',
      height: height + 'px',
      'z-index': order,
      background: color
    }"
  ></div>
</template>

<script>
import _ from "lodash";
import interact from "interactjs";

export default {
  name: "Layer",
  props: ["id", "left", "top", "order", "width", "height"],
  computed: {
    color() {
      return `rgba(${_.random(0, 255)}, ${_.random(0, 255)}, ${_.random(
        0,
        255
      )}, 0.9)`;
    }
  },
  mounted() {
    interact(this.$refs["components-layer"])
      .draggable({
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: "parent",
            endOnly: false
          })
        ],
        onstart: ev => {},

        onmove: ev => {
          this.$events.emit("dragLayer", {
            id: this.id,
            geometry: {
              left: this.left + ev.dx,
              top: this.top + ev.dy
            }
          });
        },

        onend: ev => {
          this.$events.emit("dragLayerEnd", { id: this.id });
        }
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: "parent"
          }),

          interact.modifiers.restrictSize({
            min: { width: 32, height: 32 }
          })
        ],
        onstart: ev => {},

        onmove: ev => {
          this.$events.emit("resizeLayer", {
            id: this.id,
            geometry: {
              left: this.left + ev.deltaRect.left,
              top: this.top + ev.deltaRect.top,
              width: ev.rect.width,
              height: ev.rect.height
            }
          });
        },

        onend: ev => {
          this.$events.emit("resizeLayerEnd", { id: this.id });
        }
      })
      .on("tap", ev => {
        this.$events.emit("tapLayer", { id: this.id });
      })
      .on("doubletap", ev => {
        this.$events.emit("doubletapLayer", { id: this.id });
      })
      .on("hold", ev => {});
  }
};
</script>

<style scoped>
#components-layer {
  position: absolute;
}
</style>
