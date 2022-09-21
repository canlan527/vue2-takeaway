import Vue from "vue";
import Vuex from "vuex";
import { getGoods } from "@/api/goods";
import { getRating } from "@/api/ratings";
import { getSeller } from "@/api/seller";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    goods: {},
    seller: {},
    ratings: {},
  },
  mutations:{
    setGoods(state, goods) {
      state.goods = goods
    },
    setSeller(state, seller) {
      state.seller = seller
    },
    setRatings(state, ratings) {
      state.ratings = ratings
    }
  },
  actions: {
    async fetchGoods(ctx) {
      const res = await getGoods();
      ctx.commit("setGoods", res);
    },
    async fetchRating(ctx) {
      const res = await getRating();
      ctx.commit("setRatings", res);
    },
    async fetchSeller(ctx) {
      const res = await getSeller();
      ctx.commit("setSeller", res);
    },
  },
});
