<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      导航 ：
      <router-link to="/">首页</router-link>|
      <!-- <router-link to="/hi">Hi页面</router-link>| -->
      <router-link :to="{name:'Hi',params:{username:'俺老孙来也'}}">Hi页面</router-link>|
      <router-link to="/hi/hi1">-Hi页面1</router-link>|
      <router-link to="/hi/hi2">-Hi页面2</router-link>|
      <router-link to="/hi3/198/jspang website is very good">-Hi页面3</router-link>|
      <router-link to="/bbbbbb">我是瞎写的</router-link>|
      <router-link to="/count">count</router-link>|
    </p>

    <button @click="goback">后退</button>

    <button @click="goforward">前进</button>

    <button @click="goHome">回到首页</button>

    <P>{{$route.name}}</P>
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
    <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goback() {
      this.$router.go(-1);
    },
    goforward() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
