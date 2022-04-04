<!--
 * @Description: 页面尾部
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-21 13:46:54
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-31 22:57:23
 * @FilePath: /todo/src/components/TFooter.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="container">
    <div class="box">
      <label id="add-icon" for="task">+</label>
      <input
        type="text"
        id="task"
        v-model="task_content"
        placeholder="添加任务"
        @keyup.enter="addTodo"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: "TFooter",
  data() {
    return {
      task_content: "",
    };
  },
  methods: {
    // 通过辅助函数映射 store 中的 action
    ...mapActions([
      // 添加item
      'ADD_ITEM',
      // id递增
      'ID_INCREMENT'
    ]),
    addTodo(){
      if (!this.task_content) {
        alert('任务内容不能为空！')
        return
      }
      this.ID_INCREMENT()
      const newTodo = {
        // 获取数据的id
        tId: this.tId,
        isComplete: false,
        taskContent: this.task_content
      }
      // 添加新item
      this.ADD_ITEM(newTodo)
      // 清空输入框
      this.task_content = ""
    },
  },
  computed: {
    // 通过辅助函数映射 store 中的 state
    ...mapState([
      // 获取id
      'tId'
    ]),
  }
};
</script>

<style lang="scss" scoped>
$bgColor: rgba(0, 0, 0, 0.623);
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  .box {
    background: $bgColor;
    box-sizing: border-box;
    padding: 5px 20px;
    border-radius: 5px;
    width: 86%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    #add-icon {
      font: {
        size: 32px;
        weight: 500;
      }
      margin-right: 12px;
    }
    #task {
      margin-right: 20px;
      width: 100%;
      font: {
        size: 18px;
        weight: 500;
      }
      border: 0;
      color: #ffffff;
      background: transparent;
      &:focus {
        // 去除聚焦时高亮效果
        outline: none;
      }
      &::placeholder {
        // 设置提示文本的颜色
        color: #ffffff;
      }
    }
  }
}
</style>