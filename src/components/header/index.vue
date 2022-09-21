<template>
  <div class="header-container" :style="headerStyle">
    <div class="search-bar">
      <Search></Search>
      <div class="profile-icon" @click="goToProfile">
        <i class="iconfont">&#xe682;</i>
      </div>
    </div>
    <div class="header-avatar">
      <img :src="seller.pic_url" alt="" />
    </div>
    <div class="header-like">
      <span @click="() => this.isLike = !this.isLike">
        {{ isLike ? "取消收藏" : "点击收藏" }}
        <i :class="[isLike ? 'icon-star-fill' : 'icon-star', 'iconfont']"></i>
      </span>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search";

export default {
  props: {
    seller: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isLike: false,
    };
  },
  components: {
    Search,
  },
  created() {
    console.log(this.seller);
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.seller.head_pic_url})`,
        backgroundSize: "100% 100%",
      };
    },
  },
  watch: {
    seller: {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  methods: {
    goToProfile() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 180px;
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  top: -1px;
  .search-bar {
    width: 100%;
    display: flex;
    align-items: center;
    .search-container {
      width: 85%;
      margin-right: 14px;
    }
    .profile-icon {
      flex: 1;
      width: 100%;
      text-align: center;
      .iconfont {
        font-size: 30px;
        color: #777;
      }
    }
  }
  .header-avatar {
    position: absolute;
    left: 20px;
    bottom: 30px;
    width: 64px;
    height: 64px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .header-like {
    position: absolute;
    bottom:10px;
    left: 20px;
    span {
      color: #fff;
      font-size: 14px;
      .iconfont {
        color: tan;
      }
    }
  }
}
</style>
