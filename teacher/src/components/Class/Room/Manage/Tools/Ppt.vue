<template>
  <div class="ppt">
    <div class="manage">
      <div class="left">
        <el-button
          type="primary"
          @click="scaleX"
          icon="el-icon-zoom-out"
        ></el-button>
        <span class="scale">{{ scale }}%</span>
        <el-button
          type="primary"
          @click="scaleD"
          icon="el-icon-zoom-in"
        ></el-button>
      </div>
      <div class="right">
        <el-button
          type="primary"
          @click="changePdfPage(0)"
          icon="el-icon-caret-left"
        ></el-button>
        <span class="scale">{{ currentPage }}/{{ pageCount }}</span>
        <el-button
          type="primary"
          @click="changePdfPage(1)"
          icon="el-icon-caret-right"
        ></el-button>
      </div>
    </div>
    <div class="pdf">
      <pdf
        ref="pdf"
        :src="src"
        :page="currentPage"
        :rotate="pageRotate"
        @num-pages="pageCount = $event"
        @page-loaded="currentPage = $event"
        @loaded="loadPdfHandler"
      ></pdf>
    </div>
    <!-- 管理 -->
    <div class="manage bottom">
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        ><el-button type="primary">上传PPT</el-button></el-upload
      >
      <el-button type="primary">保存并修改</el-button>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";
export default {
  name: "Ppt",
  components: {
    pdf,
  },
  data() {
    return {
      src: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      scale: 100,
    };
  },
  methods: {
    // pdf加载时
    loadPdfHandler(e) {
      e;
      this.currentPage = 1; // 加载的时候先加载第一页
    },
    // 改变PDF页码,val传过来区分上一页下一页的值,0上一页,1下一页
    changePdfPage(val) {
      if (val === 0 && this.currentPage > 1) {
        this.currentPage--;
      }
      if (val === 1 && this.currentPage < this.pageCount) {
        this.currentPage++;
      }
    },
    //放大
    scaleD() {
      this.scale += 5;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    //缩小
    scaleX() {
      if (this.scale === 100) {
        return;
      }
      this.scale += -5;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
  },
};
</script>

<style scoped>
.main {
  margin: 0 auto;
  border: 2px solid #409eff;
  padding: 10px;
}
.pdf {
  height: 400px;
  overflow-y: scroll;
}
.scale {
  font-size: 20px;
}
.manage {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: auto;
}
.bottom {
  width: 50%;
  margin: 20px auto;
}
</style>
