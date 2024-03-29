<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <my-vue/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MyVue from "@/components/MyVue";

export default {
  name: 'App',
  components: {
    MyVue
  }
}
</script>

<style>

</style>
