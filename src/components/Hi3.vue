<template>
  <div>
    <p>{{msg}}</p>
    <p>新闻ID：{{ $route.params.newsId}}</p>
    <p>新闻标题：{{ $route.params.newsTitle}}</p>
  </div>
</template>


<script>
export default {
  name: "hi3",
  data() {
    return {
      msg: "我是Hi3,,,,"
    };
  },
  beforeRouteEnter: (to, from, next) => {
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
};
</script>


<style scoped>
</style>
