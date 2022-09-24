<template>
  <div class="tab-container">
    <router-link class="tab-item" v-for="item in tabs" :key="item.path" :to="item.path">
      <span class="tab-link">{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data() {
    return {
      tabs: [
        {
          name: '点菜',
          path: '/home'
        },
         {
          name: '评价',
          path: '/comment'
        },
         {
          name: '商家',
          path: '/seller'
        }

      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tab-container {
  display: flex;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  color: #333;
  .tab-item {
    flex: 1;
    text-align: center;
    .tab-link {
      padding-bottom: 3px;
      color:#464646;
    }
    &.router-link-active {
      .tab-link {
        color: #000;
        border-bottom: 2px solid orange;
      }
    }
  }
}
</style>