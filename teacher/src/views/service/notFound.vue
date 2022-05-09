<template>
  <div class="not-found">
    <div class="figure">
      <img src="../../assets/look-magnifying-glass.svg" alt="Error: 4xx" />
    </div>
    <div id="errorbox">
      <div class="not-found">
        <h1>错误 (4xx)</h1>
        页面不存在窝~
        <div class="not-found--links">
          下面链接可能会帮到你:
          <ul>
            <li><a href="/">首页</a></li>
            <li><a href="/login">登录页</a></li>
            <li>
              <a href="/register">注册页</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "notFound",
};
</script>

<style>
div.figure {
  height: 300px;
  width: 300px;
  margin: 40px auto;
  padding: 0;
}
div.figure img {
  height: 300px;
  width: 300px;
}
#errorbox {
  line-height: 1.6em;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 20px;
  text-align: left;
  word-wrap: break-word;
}
#errorbox .not-found {
  color: rgba(0, 0, 0, 0.75);
  font-size: 21px;
  font-weight: lighter;
  line-height: 36px;
  text-align: center;
}
#errorbox .not-found h1 {
  color: rgba(0, 0, 0, 0.75);
  font-size: 38px;
  font-weight: lighter;
  line-height: 47px;
}
#errorbox h1 {
  color: #222;
  font-size: 1.5em;
  font-weight: normal;
  margin: 10px 0;
}
#errorbox .not-found--links {
  margin: 48px 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
}
#errorbox .not-found--links ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}
ul,
ol {
  margin-left: 46px;
}
#errorbox .not-found--links ul li {
  margin-top: 10px;
}
#errorbox a {
  color: #005ff8;
  text-decoration: none;
}
a,
.f-a,
.f-link {
  text-decoration: none;
  color: #007ee5;
  cursor: pointer;
}
a {
  color: #0061ff;
  text-decoration: none;
}
</style>
