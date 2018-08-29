<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/Hi">hi首页</router-link> |
      <router-link :to="{name:'hi1',params:{username:'jspang',id:'666'}}">hi首页1</router-link> |
      <router-link to="/Hi/hi2">hi首页2</router-link> |
      <router-link to="/goParams/199/this is goParams test">goParams</router-link>
      <br>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/params/192/newsContent is great">Params</router-link>
    
    <transition name="fade" mode="in-out">
      <router-view></router-view>
    </transition>
    </div>
    <p>{{ $route.name }}</p>
    <div>
      <router-view name="left" style="float:left;width:50%;height:300px;background-color:#db4"></router-view>
      <router-view name="right" style="float:right;width:50%;height:300px;background-color:#c4d"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity 0.5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
