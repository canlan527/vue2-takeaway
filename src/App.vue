<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <Tab></Tab>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <router-view name="profile" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/header";
import Tab from "@/components/tab";

export default {
  data() {
    return {
      headerData: {},
    };
  },
  components: {
    Header,
    Tab,
  },
  created() {
    this.$store.dispatch("fetchGoods");
    this.$store.dispatch("fetchSeller");
    // this.$store.dispatch("fetchRating");
  },
  computed: {
    ...mapState(["seller", "goods"]),
  },
};
</script>

<style lang="less">
#app {
}
</style>
