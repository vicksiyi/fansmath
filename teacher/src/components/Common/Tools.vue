<template>
  <div class="tools">
    <div class="tools">
      <div
        v-for="(item, index) in tools"
        :key="item.id"
        @click="activeChange(index)"
        :class="`item ${index == active ? 'tools-selected' : ''}`"
      >
        <el-image
          style="width: 40px; height: 40px; margin: auto"
          :src="item.icon"
        ></el-image>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tools",
  props: {
    tools: {
      type: Array,
      default: () => {},
    },
    active: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    activeChange(index) {
      this.$emit("activeChange", index);
    },
  },
};
</script>

<style scoped>
.tools-selected {
  background: #c0c4cc;
}
.tools-selected span {
  color: #fff !important;
}
.tools {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.tools .item img {
  width: 40px;
  height: 40px;
  margin: auto;
}
.tools .item span {
  font-size: 12px;
  color: #495060;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.tools .item {
  width: 60px;
  height: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  margin: 10px 15px;
}
.tools .item:hover {
  -webkit-box-shadow: 0 0 0 2px #cff09e, 0 0 0 4px #ff0364;
  box-shadow: 0 0 0 0.5px #5cadff, 0 0 0 0.5px #5cadff;
  -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
  -webkit-animation: gelatine 0.5s 1;
  animation: gelatine 0.5s 1;
  opacity: 0.6;
  cursor: pointer;
}
</style>
