<template>
  <div>
    <div class="footer">
      <div class="window">
        <span>
          {{ copyRight }}
        </span>
        <div class="bottom">
          {{ desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { desc, copyRight } from "@/data/footer";
export default {
  name: "Footer",
  data() {
    return {
      desc,
      copyRight,
    };
  },
  methods: {},
};
</script>


<style scoped>
.footer {
  width: 100%;
  color: #fff;
  background: #909399;
  padding: 30px;
}
.footer .window {
  width: 60%;
  margin: 30px auto;
  text-align: center;
}
.footer .window .bottom {
  font-size: 15px;
  margin-top: 20px;
}
</style>
