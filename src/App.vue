<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <router-view name="profile" v-slot="{ Component }">
      <transition name="silde">
        <component :is="Component"></component>
      </transition>
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

<style lang="less"></style>
