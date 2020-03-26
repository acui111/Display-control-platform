<template>
  <div
    id="components-v-line"
    :style="{ left: left + 'px', background: status ? '#f00' : '#ccc' }"
  ></div>
</template>

<script>
export default {
  name: "VLine",
  props: ["id", "left", "status"]
};
</script>

<style scoped>
#components-v-line {
  margin: 0px;
  padding: 0px;
  height: 100%;
  width: 2px;
  position: absolute;
}
</style>
