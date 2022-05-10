<template>
  <div class="login">
    <el-container>
      <el-header><Header :isLogin="true"></Header></el-header>
      <el-main><Submit></Submit></el-main>
      <el-footer><Footer></Footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import Submit from "@/components/Register/Submit";
export default {
  name: "Register",
  components: { Header, Footer, Submit },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
.el-footer {
  padding: 0;
}
</style>
