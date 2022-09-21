<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <router-view></router-view>
    <router-view name="profile" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from "@/components/header";

export default {
  data() {
    return {
      headerData:{},
    }
  },
  components: {
    Header,
  },
  created() {
    this.$store.dispatch("fetchGoods");
    this.$store.dispatch("fetchSeller");
    this.$store.dispatch("fetchRating");
  },
  // computed: {
  //   seller () {
  //     return this.$store.seller
  //   },
  // },
  computed: {
    ...mapState(['seller'])
  },
  // watch: {
  //   seller: {
  //     handler(val) {
  //       console.log(val)
  //     },
  //     deep:true,
  //     immediate: true,
  //   }
  // }
};
</script>

<style lang="less"></style>
