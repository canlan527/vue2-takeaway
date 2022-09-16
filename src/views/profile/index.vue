<template>
  <transition appear name="slide">
    <div class="profile-container profile" ref="profileRef">
      <div class="profile-header">
        <span class="icon-box" @click="goBack">
          <i class="iconfont">&#xe693;</i>
        </span>
        <span class="profile-header-text">个人中心</span>
      </div>
      <div class="profile-content">
        <div class="profile-intro">
          <div class="profile-intro-avatar">
            <img :src="avatar" alt="" />
          </div>
          <div class="profile-intro-title">
            <span class="profile-intro-remain">Good Morinig</span>
            <span class="profile-intro-name">gorgeous_im</span>
          </div>
        </div>
        <ul class="profile-list">
          <Card title="订单管理" bg="rgb(53, 140, 255)">
            <div class="order-list">
              <h4>您的订单</h4>
              <li>中秋外带全家桶 × 1</li>
              <li>炸鸡 × 1</li>
              <li>汉堡 × 2</li>
              <div class="see-all">See-all</div>
            </div>
          </Card>
          <Card title="钱包余额" bg="rgba(201, 211, 255,0.3)">
            <div class="wallet">
              <div class="time">{{ month }}月 Spending</div>
              <div class="main-number">¥1555.88</div>
              <div class="see-all">See-all</div>
            </div>
          </Card>
          <Card title="查看门店" bg="rgba(255, 225, 201,0.7)">
            <div class="stores-infomation">
              <div class="logo">
                <img :src="storesLogo" alt="" />
              </div>
              <div class="info">
                <div class="info-1">24小时营业</div>
                <div class="info-2">flat Discount on every purchase!</div>
              </div>
            </div>
          </Card>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Card from "@/components/card";
import avatar from "@/assets/imgs/avatar.png";
import storesLogo from "@/assets/imgs/1.jpeg";

export default {
  name: "profile",
  data() {
    return {
      avatar,
      storesLogo,
      isLogin: false,
      month: 7,
    };
  },
  mounted() {
    console.log(this.$refs.profileRef);
  },
  components: {
    Card,
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.profile-container {
  position: absolute;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #fff;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.5s ease;
  }
  &.slide-enter,
  &.slide-leave-to {
    transform: translateX(100%);
  }
  .profile-header {
    position: relative;
    background: #fff;
    padding: 20px 14px;
    box-sizing: border-box;
    text-align: center;
    color: #777;
    border-bottom: 1px solid #f5f5f5;
    .icon-box {
      width: 20px;
      height: 20px;
      display: inline-block;
      margin: 4px;
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translate(-50%, -50%);
    }
    .iconfont {
    }
    .profile-header-text {
      font-weight: bold;
    }
  }
  .profile-content {
    padding: 14px;
    .profile-intro {
      width: 100%;
      display: flex;
      .profile-intro-avatar {
        width: 58px;
        height: 58px;
        margin-right: 20px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
      .profile-intro-title {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        .profile-intro-remain {
          color: #777;
          font-size: 14px;
        }
        .profile-intro-name {
          transform: translateY(-4px);
          font-weight: bolder;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
        }
      }
    }
    .profile-list {
      font-size: 16px;
      .order-list {
        position: relative;
        font-weight: normal;
        font-size: 13px;
        color: #fff;
        line-height: 22px;
        .see-all {
          position: absolute;
          top: -10px;
          right: 10px;
          font-size: 16px;
          color: #fff;
        }
      }
      .wallet {
        position: relative;
        line-height: 34px;
        .main-number {
          margin: 20px 0;
        }
        .see-all {
          position: absolute;
          top: -10px;
          right: 10px;
          font-size: 16px;
          color: rgb(79, 79, 255);
        }
      }
      .stores-infomation {
        display: flex;
        .logo {
          width: 100px;
          height: 100px;
          margin-right: 20px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 17px;
          }
        }
        .info {
          flex: 1;
          .info-1 {
            margin-bottom: 20px;
          }
          .info-2 {
            font-size: 13px;
            color: #777;
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
