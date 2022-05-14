<template>
  <div class="chapter">
    <el-row :gutter="20">
      <!-- 左边管理 -->
      <el-col :span="8">
        <el-card>
          <Tools
            :active="manageActive"
            :tools="manages"
            @activeChange="activeChange"
          ></Tools>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-card>
          <h1>{{ title }}</h1>
          <div class="content">
            <!-- 学生管理 -->
            <div v-if="manageActive === 0"><Introduction></Introduction></div>
            <div v-if="manageActive === 1"><Target></Target></div>
            <div v-if="manageActive === 2">
              <Video></Video>
            </div>
            <div v-if="manageActive === 3"><Ppt></Ppt></div>
            <div v-if="manageActive === 4"><Link></Link></div>
            <div v-if="manageActive === 5"><Message></Message></div>
            <div v-if="manageActive === 6"><Barrage></Barrage></div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { manages } from "@/data/room";
import Tools from "@/components/Common/Tools";
import Introduction from "./Tools/Introduction";
import Target from "./Tools/Target";
import Video from "./Tools/Video";
import Ppt from "./Tools/Ppt";
import Link from "./Tools/Link";
import Message from "./Tools/Message";
import Barrage from "./Tools/Barrage";
export default {
  name: "Chapter",
  components: {
    Tools,
    Introduction,
    Target,
    Video,
    Ppt,
    Link,
    Message,
    Barrage,
  },
  computed: {
    ...mapState({
      manageActive: (state) => state.chapterManage.manageActive,
    }),
    title() {
      return this.manages[this.manageActive].title;
    },
  },
  data() {
    return {
      manages: manages,
    };
  },
  methods: {
    activeChange(index) {
      this.$store.commit("manageActiveChange", index);
    },
  },
};
</script>

<style scoped>
.chapter {
  padding: 20px;
}
h1 {
  font-size: 18px;
  text-align: center;
}
.content {
  padding-top: 10px;
}
</style>
