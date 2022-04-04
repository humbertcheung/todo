<!--
 * @Description: 待办项
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-21 14:37:58
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-31 22:34:23
 * @FilePath: /todo/src/components/TItem.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="container">
    <div class="box">
      <input
        type="checkbox"
        id="item"
        v-model="isComplete"
        @change="statusChange"
      />
      <label class="item-title" :style="labelStyle">{{ taskContent }}</label>
      <span class="delete" @click.stop="DEL_ITEM({taskId})"></span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "TItem",
  props: {
    taskId: Number,
    taskContent: String,
    taskComplete: Boolean,
  },
  data() {
    return {
      // item的状态
      isComplete: this.taskComplete,
    };
  },
  methods: {
    // 通过辅助函数映射 store 中的 actions
    ...mapActions([
      'CHANGE_STATUS',
      'DEL_ITEM'
    ]),
    // 用户点击复选框，修改状态时触发此方法
    statusChange() {
      const para = {
        status: this.isComplete,
        id: this.taskId,
      };
      this.CHANGE_STATUS(para)
    },
  },
  computed: {
    // 文本的样式对象
    labelStyle() {
      const lineThrough = this.isComplete ? "line-through" : "none";
      return {
        "text-decoration": lineThrough,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .box {
    background: #ffffff;
    color: rgba(0, 0, 0, 0.726);
    box-sizing: border-box;
    padding: 5px 20px;
    border-radius: 5px;
    width: 86%;
    height: 55px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    #item {
      margin-right: 20px;
    }
    .item-title {
      margin-right: 20px;
      width: 100%;
    }
    .delete {
      background-image: url("../assets/delete.png");
      background-size: 100% 100%;
      height: 20px;
      width: 20px;
      &:hover {
        cursor: pointer;
        background-image: url("../assets/delete-highlight.png");
      }
    }
  }
}
</style>