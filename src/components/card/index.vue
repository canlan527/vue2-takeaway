<template>
  <div class="card-container">
    <h3>{{title || ''}}</h3>
    <div class="card-content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    bg: {
      type: String,
      default: "",
    },
  },
  computed: {
    contentStyle() {
      return {
        background: `${this.bg}` || "#fff",
      };
    },
  },
};
</script>

<style lang="less" scoped>
.card-container {
  margin: 16px 0;
  padding: 8px;
  background: #fff;
  box-sizing: border-box;
  font-weight: bold;
  font-size: 24px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  
  h3 {
    font-size: 18px;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  .card-content {
    width: 100%;
    color: #333;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
  }
}
</style>
