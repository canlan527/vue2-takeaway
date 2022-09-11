<template>
  <div class="search-container">
    <i class="iconfont">&#xe6e1;</i>
    <input type="text" class="search-input" placeholder="请输入商品名称">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.search-container {
  position: relative;
  width: 100%;
  height: 36px;
  font-size: 16px;
  color: #ccc;
  line-height: 36px;
  box-sizing: border-box;
  .iconfont {
    position: absolute;
    left:0;
    top: 0;
    font-size: 18px;
    color:#ccc;

  }
  .search-input {
    width: 100%;
    height: 36px;
    line-height: 36px;
    border-radius: 8px;
    border:none;
    outline: none;
    background: #fff;
    padding-left: 20px;
    color: #ccc;
    box-sizing: border-box;
    &::placeholder {
      color: #ccc;
    }
  }
}
</style>