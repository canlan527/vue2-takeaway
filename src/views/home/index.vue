<template>
  <div>home</div>
</template>

<script>
import { getGoods } from "@/api/goods";
import { getSeller } from "@/api/seller";
import { getRating } from "@/api/ratings";
export default {
  data() {
    return {
      show: true,
    };
  },
  created() {
    this.getGoods();
    this.getSeller();
    this.getRating();
  },
  methods: {
    getGoods() {
      return getGoods().then((res) => {
        console.log(res);
      });
    },
    getSeller() {
      return getSeller().then((res) => {
        console.log(res);
      });
    },
    getRating() {
      return getRating().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
