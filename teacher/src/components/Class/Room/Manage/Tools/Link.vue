<template>
  <div class="link">
    <!-- 添加 -->
    <el-button type="primary" @click="add">添加</el-button>
    <el-table :data="links" border style="width: 100%; margin-top: 20px">
      <el-table-column label="名称" width="180">
        <template slot-scope="scope">
          <span v-if="!isEdit(scope.$index)">{{ scope.row.title }}</span>
          <el-input
            v-else
            v-model="scope.row.titleTemp"
            placeholder="请输入名称"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="link" label="链接">
        <template slot-scope="scope">
          <a v-if="!isEdit(scope.$index)" :href="scope.row.link">{{
            scope.row.link
          }}</a>
          <el-input
            v-else
            v-model="scope.row.linkTemp"
            placeholder="请输入链接"
          ></el-input
        ></template>
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button
            type="warning"
            @click="edit(scope.$index)"
            size="mini"
            v-if="!isEdit(scope.$index)"
            >编辑</el-button
          >
          <el-button
            type="success"
            @click="save(scope.$index)"
            size="mini"
            v-else
            >保存</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Link",
  data() {
    return {
      links: [
        {
          title: "有道翻译",
          link: "https://fanyi.youdao.com/",
        },
        {
          title: "QQ邮箱",
          link: "https://mail.qq.com/cgi-bin/loginpage?s=session_timeout&from=&r=26126e276f436e5696441de9b8785412&tiptype=LOGIN_ERR_COOKIE_FORBIDDEN",
        },
      ],
      edits: [],
    };
  },
  methods: {
    isEdit(index) {
      return this.edits.indexOf(index) !== -1;
    },
    edit(index) {
      if (this.edits.indexOf(index) === -1) {
        this.$set(this.links[index],"titleTemp",this.links[index].title)
        this.$set(this.links[index],"linkTemp",this.links[index].link)
        this.edits.push(index);
      }
    },
    save(index) {
      if (this.edits.indexOf(index) !== -1) {
        this.$set(this.links[index],"title",this.links[index].titleTemp)
        this.$set(this.links[index],"link",this.links[index].linkTemp)
        this.edits.splice(this.edits.indexOf(index), 1);
      }
    },
    add() {
      this.links.push({
        title: "",
        link: "",
        titleTemp: "",
        linkTemp: "",
      });
      this.edits.push(this.links.length - 1);
    },
  },
};
</script>

<style scoped>
a {
  color: #409eff;
}
</style>
