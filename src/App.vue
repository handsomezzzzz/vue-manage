<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
}
#app{
  height: 100vh;
}
</style>
