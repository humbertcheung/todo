<!--
 * @Description: 页面头部
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-20 23:50:04
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-23 22:35:54
 * @FilePath: /todo/src/components/THeader.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="container">
    <span class="title">任务</span>
    <span class="operation" @click="showOperation = !showOperation">
      <span class="operation-icon"></span>
    </span>
  </div>
  <DropDownMenu
    class="dropdown"
    :isvisual="showOperation"
  ></DropDownMenu>
</template>

<script>
import DropDownMenu from "./DropDownMenu.vue";

export default {
  name: "THeader",
  components: {
    DropDownMenu,
  },
  data() {
    return {
      showOperation: false, // 展示操作按钮
    };
  },
  methods: {
    operation() {
      console.log("点击操作");
    },
  },
  mounted() {
    // 通过bus总线来监听 closeDrop事件
    this.$bus.$on('closeDrop', () => {
      this.showOperation = false
    })
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .title {
    font-size: 40px;
    font-weight: 600;
    color: white;
    user-select: none;
  }
  .operation {
    width: 12%;
    height: 34px;
    border-radius: 3px;
    background: rgba(0, 0, 0, 0.623);
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    // 设置右侧的操作按钮（三个点）
    .operation-icon {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #ffffff;
      &:before,
      &:after {
        content: "";
        position: absolute;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #ffffff;
      }
      &:before {
        left: -8px;
      }
      &:after {
        left: 8px;
      }
    }
  }
}
.dropdown {
  position: absolute;
  margin-top: 70px;
  margin-left: 330px;
  z-index: 100;
}
</style>