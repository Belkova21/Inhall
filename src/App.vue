<template>
  <div style="padding: -8px">
    <Menu></Menu>
    <div class="content">
      <router-view></router-view>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import Menu from "@/components/MenuWeb.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    FooterComponent,
    Menu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: -8px;
}
</style>
