<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <router-view name="profile" v-slot="{ Component }">
      <!-- <transition appear name="slide"> -->
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
         
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/header";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="less">
</style>
