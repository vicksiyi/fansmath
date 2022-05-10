<template>
  <div class="teachers">
      <TeacherCard v-for="item in [1,2,3]" :isDelete="true" :key="item.id"></TeacherCard>
  </div>
</template>

<script>
import TeacherCard from "@/components/Common/TeacherCard";
export default {
  name: "Teachers",
  components: { TeacherCard },
};
</script>

<style scoped>
.teachers {
  padding: 20px;
}
</style>
