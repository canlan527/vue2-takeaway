<template>
  <div class="home-container">
    <div class="goods-container">
      <!-- 左侧菜单 -->
      <div class="menu-wrapper" ref="menuWrapperRef">
        <ul class="menu-list" v-if="goods.food_spu_tags">
          <li
            class="menu-item"
            v-if="goods.container_operation_source"
            :class="{ 'active': currentIndex === 0 }"
            @click="toTop"
          >
            <img :src="goods.container_operation_source.icon" alt="" />
            <span> {{ goods.container_operation_source.name }} </span>
          </li>
          <li
            class="menu-item"
            v-for="(item, index) in goods.food_spu_tags"
            :key="item.name"
            :class="{ 'active': currentIndex === (index + 1) }"
            @click="selectMenu(index, $event)"
          >
            <img v-if="item.icon" :src="item.icon" alt="" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>

      <!-- 右侧列表 -->
      <div class="goods-wrapper" ref="goodsWrapperRef">
        <ul class="goods-list" v-if="goods.food_spu_tags">
          <h3>{{ goods.container_operation_source.name }}</h3>
          <li class="goods-img food-item">
            <img
              :src="
                goods.container_operation_source.operation_source_list[0]
                  .pic_url
              "
              v-if="goods.container_operation_source"
              alt=""
            />
          </li>

          <div
            v-for="item in goods.food_spu_tags"
            :key="item.name"
            class="food-item"
          >
            <h3>{{ item.name }}</h3>
            <li
              class="goods-item"
              v-for="innerItem in item.spus"
              :key="innerItem.id"
            >
              <div class="item-img">
                <img :src="innerItem.picture" alt="" />
              </div>
              <div class="item-info">
                <div class="item-name">{{ innerItem.name }}</div>
                <div class="item-desc">{{ innerItem.description }}</div>
                <div class="item-saled-count">
                  {{ innerItem.month_saled_content }}
                </div>
                <div class="item-price">
                  ¥{{ innerItem.min_price }}/{{ innerItem.unit }}
                </div>
                <!-- 加减 -->
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
    <!-- <div class="goods-cart"></div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      show: true,
      goodsScroll: {},
      menuScroll: {},
      scrollY: 0,
      listHeight: [],
    };
  },
  created() {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 200);
    }).then(() => {
      this.$nextTick(() => {
        this.initBScroll();
        this.handleScroll();
      });
    });
  },
  computed: {
    ...mapState(["goods"]),
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let heightTop = this.listHeight[i];
        let heightBottom = this.listHeight[i + 1];
        if (
          !heightBottom ||
          (this.scrollY >= heightTop && this.scrollY < heightBottom)
        ) {
          return i;
        }
      }
      return 0;
    },
  },
  watch: {
    goods: {
      handler(val) {
        console.log(val);
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    initBScroll() {
      this.goodsScroll = new BScroll(this.$refs.goodsWrapperRef, {
        probeType: 3,
        click: true,
      });
      this.menuScroll = new BScroll(this.$refs.menuWrapperRef, {
        click: true,
      });
      // 监听 goodsScroll 滚动事件，将滚动的距离实时赋值给 this.scrollY
      this.goodsScroll.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    handleScroll() {
      // 计算滚动列表各区间的起始值
      const goodsListRef = this.$refs.goodsWrapperRef.querySelectorAll('.food-item')
      let height = 0;
      this.listHeight.push(height);
      goodsListRef.forEach((item) => {
        height += item.clientHeight;
        this.listHeight.push(height);
      });
    },
    selectMenu(index, event) {
      if(!event.constructor) {
        return
      }
      const goodsListRef = this.$refs.goodsWrapperRef.querySelectorAll('.food-item');
      // console.log(goodsListRef)
      const listDom = goodsListRef[index + 1]
      this.goodsScroll.scrollToElement(listDom, 300)
    },
    toTop() {
      const goodsListRef = this.$refs.goodsWrapperRef.querySelectorAll('.food-item')[0];
      this.goodsScroll.scrollToElement(goodsListRef, 300)
    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  .goods-container {
    position: fixed;
    top: 208px;
    left: 0;
    right: 0;
    bottom: 80px;
    overflow-y: hidden;
    box-sizing: border-box;
    display: flex;
    box-sizing: border-box;
    .menu-list {
      width: 88px;
      .menu-item {
        width: 100%;
        height: 56px;
        line-height: 54px;
        font-size: 13px;
        background: #f1f0f0;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        &.active {
          background: #fff;
        }
        &:hover {
          background: #e3e4e4;
        }
        img {
          margin-right: 4px;
          width: 18px;
          height: 18px;
        }
      }
    }
    .goods-wrapper {
      flex: 1;
      height: 100%;
      .goods-list {
        padding: 0 20px;
        overflow: hidden;
        box-sizing: border-box;
        h3 {
          font-size: 14px;
          font-weight: bold;
          color: #333;
          margin: 14px 0;
        }
        .goods-img {
          width: 100%;
          height: 106px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }
        }
        .goods-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #f5f5f5;
          padding: 20px;
          box-sizing: border-box;
          border-radius: 12px;
          box-shadow: 1px 2px 12px 2px rgba(0, 0, 0, 0.1);
          margin-bottom: 12px;
          .item-img {
            width: 86px;
            height: 86px;
            margin-right: 12px;
            img {
              width: 100%;
              height: 100%;
              border-radius: 10px;
            }
          }
          .item-info {
            flex: 1;
            // align-self: center;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            .item-name {
              font-size: 13px;
              font-weight: bold;
              color: #333;
              margin: 12px 0;
            }
            .item-desc {
              color: #666;
              font-size: 12px;
              font-family: "Times New Roman", Times, serif;
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .item-saled-count {
              font-size: 12px;
              margin: 12px 0;
              color: #777;
              align-self: flex-end;
            }
            .item-price {
              font-size: 14px;
              color: orange;
              align-self: flex-end;
            }
          }
        }
      }
    }
  }
  // .goods-cart {
  //   position: fixed;
  //   bottom: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 80px;
  //   background: blueviolet;
  // }
}
</style>
