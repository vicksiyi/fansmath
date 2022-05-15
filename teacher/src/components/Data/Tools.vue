<template>
  <div class="tools">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in tools" :key="index" :span="6">
        <div class="item">
          <h1>{{ item.title }}</h1>
          <span>{{ item.num }}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Tools",
  props: {
    tools: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.item {
  text-align: center;
  line-height: 30px;
  margin-top: 20px;
}
.item h1 {
  font-size: 18px;
  font-weight: 200;
  color: #80848f;
}
.item span {
  font-size: 30px;
  font-weight: 800;
  line-height: 50px;
  color: #1c2438;
}
</style>
