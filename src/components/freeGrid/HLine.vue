<template>
  <div
    id="components-h-line"
    :style="{ top: top + 'px', background: status ? '#f00' : '#ccc' }"
  ></div>
</template>

<script>
export default {
  name: "HLine",
  props: ["id", "top", "status"]
};
</script>

<style scoped>
#components-h-line {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 2px;
  position: absolute;
}
</style>
