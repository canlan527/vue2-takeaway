<template>
  <div class="header-container" :style="headerStyle">
    <div class="search-bar">
      <Search></Search>
      <div class="profile-icon" @click="goToProfile">
        <i class="iconfont">&#xe682;</i>
      </div>
    </div>
    <div class="header-avatar" @click="() => (this.showMask = !this.showMask)">
      <img :src="seller.pic_url" alt="" />
    </div>
    <div class="header-like">
      <span @click="() => (this.isLike = !this.isLike)">
        {{ isLike ? "取消收藏" : "点击收藏" }}
        <i :class="[isLike ? 'icon-star-fill' : 'icon-star', 'iconfont']"></i>
      </span>
    </div>
    <transition name="fade">
      <div class="header-mask" v-show="showMask">
        <div class="header-mask-desc">
          <div class="header-desc-close" @click.stop="handleShowMash">
            <i class="iconfont icon-roundclosefill"></i>
          </div>
          <div class="header-desc-content">
            <div class="seller-avatar">
              <img :src="seller.pic_url" alt="" />
            </div>
            <div class="seller-name">{{ seller.name }}</div>
            <div class="seller-rating" v-if="seller.show_info">
              <i
                class="iconfont icon-star-fill"
                v-for="item in rating.rateScoreInt"
                :key="item"
              ></i>
              <i class="iconfont icon-star_half" v-if="rating.half"></i>
              {{ seller.show_info[0].value }}
            </div>
            <div class="seller-delivery-info">
              <span class="seller-delivery-item">{{
                seller.min_price_tip
              }}</span>
              |
              <span class="seller-delivery-item">{{
                seller.shipping_fee_tip
              }}</span>
              |
              <span class="seller-delivery-item">{{
                seller.delivery_time_tip
              }}</span>
            </div>
            <div class="seller-delivery-time">
              配送时间：{{ seller.shipping_time }}
            </div>
          </div>
          <div class="header-desc-footer">
            <span class="attention-special-text">特价</span>
            <span class="attention-normal-text">特价商品8元起</span>
          </div>
        </div>
      </div>
    </transition>
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
      showMask: false,
    };
  },
  components: {
    Search,
  },
  created() {
    // console.log(this.seller);
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.seller.head_pic_url})`,
        backgroundSize: "100% 100%",
      };
    },
    rating() {
      if (this.seller) {
        let half = 0;
        const rateScore = this.seller.wm_poi_score;
        let rateScoreInt = parseInt(rateScore, 10);
        const rateScoreFloat = parseInt(rateScore.toString().split(".")[1]);
        if (rateScoreFloat) {
          rateScoreFloat > 5 ? rateScoreInt++ : ++half;
        } 
        return {
          rateScoreInt,
          half,
        };
      }
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
    handleShowMash() {
      this.showMask = false;
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
    bottom: 10px;
    left: 20px;
    span {
      color: #fff;
      font-size: 14px;
      .iconfont {
        color: tan;
      }
    }
  }
  .header-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 100;
    background: rgba(0, 0, 0, 0.3);
    .header-mask-desc {
      position: absolute;
      top: 60%;
      left: 0;
      right: 0;
      bottom: 0;
      background: #fff;
      padding: 20px 20px;
      box-sizing: border-box;
      font-size: 16px;
      .header-desc-close {
        position: absolute;
        right: 30px;
        top: 22px;
        .iconfont {
          font-size: 24px;
          color: #777;
        }
      }
      .header-desc-content {
        width: 100%;
        height: 78%;
        margin: 12px 0;
        padding: 40px 0 30px;
        border-bottom: 1px solid #dcdcdc;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        .seller-avatar {
          width: 56px;
          height: 56px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .seller-name {
          font-weight: bold;
          font-size: 14px;
          color: #333;
        }
        .seller-rating {
          color: #777;
          font-size: 12px;
          .iconfont {
            color: rgb(255, 206, 72);
          }
        }
        .seller-delivery-info {
          color: #777;
          font-size: 12px;
          .seller-delivery-item {
            margin: 6px;
          }
        }
        .seller-delivery-time {
          color: #777;
          font-size: 12px;
        }
      }

      .header-desc-footer {
        text-align: center;
        font-size: 13px;
        .attention-special-text {
          display: inline-block;
          padding: 3px;
          margin-right: 6px;
          background: orange;
          color: #fff;
          border-radius: 3px;
        }
        .attention-normal-text {
          color: #424242;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
