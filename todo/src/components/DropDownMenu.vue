<!--
 * @Description: 下拉框组件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-21 19:24:07
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-23 22:57:34
 * @FilePath: /todo/src/components/DropDownMenu.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->

<template>
  <div class="container" v-if="isvisual">
    <div class="dropdown">
      <div class="dropdown-menu" @click="showAllOnclick">显示全部</div>
      <div class="dropdown-menu" @click="showCompleteOnclick">显示已完成</div>
      <div class="dropdown-menu" @click="hideCompleteOnclick">隐藏已完成</div>
      <div class="dropdown-menu" @click="changeBgImgOnclick">更换随机背景</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownMenu",
  props: {
    isvisual: Boolean,
  },
  methods: {
    showAllOnclick() {
      // 触发关闭当前下拉框的事件
      this.$bus.$emit('closeDrop')
      this.$bus.$emit("showAll");
    },
    showCompleteOnclick() {
      this.$bus.$emit('closeDrop')
      this.$bus.$emit("showComplete");
    },
    hideCompleteOnclick() {
      this.$bus.$emit('closeDrop')
      this.$bus.$emit("hideComplete");
    },
    changeBgImgOnclick() {
      this.$bus.$emit('closeDrop')
      this.$bus.$emit("changeBgImg");
    },
  },
};
</script>

<style lang="scss" scoped>
$color: rgba(0, 0, 0, 0.623);
.container {
  box-shadow: 5px 5px 10px 1px gainsboro;
  border-radius: 5px;
  background-color: #fff;
  .dropdown {
    display: flex;
    flex-direction: column;
    align-content: center;
    .dropdown-menu {
      padding: 0px 10px;
      line-height: 35px;
      height: 35px;
      list-style-type: none;
      text-align: center;
      color: $color;
      user-select: none;
      &:hover {
        background: #62a2e9;
        color: white;
        cursor: pointer;
      }
      &:active {
        background: #fff;
        color: $color;
      }
    }
  }
}
</style>