<template>
  <div class="header-container">
    <div class="search-bar">
      <Search></Search>
      <div class="profile-icon">
        <i class="iconfont">&#xe682;</i>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "@/components/search";

export default {
  components: {
    Search,
  },
};
</script>

<style lang="less" scoped>
.header-container {
  width: 100%;
  height: 180px;
  background-color: tan;
  padding: 20px;
  box-sizing: border-box;
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
}
</style>
