<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p @click="$store.commit('add')">{{counter.state}}</p>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  get counter(): any {
    return this.$store
  }
  created() {
    console.log(this)
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
