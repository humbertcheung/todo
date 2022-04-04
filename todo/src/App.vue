<!--
 * @Description: Vue入口页面
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-20 21:39:10
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-31 22:30:31
 * @FilePath: /todo/src/App.vue
 * Copyright (C) 2022 syzhang. All rights reserved.
-->
<template>
  <div class="root" :style="rootStyle">
    <THeader class="header"></THeader>
    <div class="content animate__animated animate__bounceInUp">
      <!-- <transition-group name="item"> -->
        <TItem
          class="item"
          v-for="item in sources"
          :key="item.tId"
          :taskId="item.tId"
          :taskContent="item.taskContent"
          :taskComplete="item.isComplete"
        ></TItem>
      <!-- </transition-group> -->
    </div>
    <!-- <transition name="complete"> -->
      <div class="complete_content animate__animated animate__flip" v-if="showComplete">
        <div class="complete_title">已完成</div>
        <!-- <transition-group name="item"> -->
          <TItem
            class="item"
            v-for="item in getCompletedItems"
            :key="item.tId"
            :taskId="item.tId"
            :taskContent="item.taskContent"
            :taskComplete="item.isComplete"
          ></TItem>
        <!-- </transition-group> -->
      </div>
    <!-- </transition> -->
    <TFooter class="footer"></TFooter>
  </div>
</template>

<script>
import THeader from "./components/THeader.vue";
import TFooter from "./components/TFooter.vue";
import TItem from "./components/TItem.vue";
import catBg from "./assets/bg-cat.jpg";
import busBg from "./assets/bg-bus.jpg";
import homeBg from "./assets/bg-home.jpg";
import { mapGetters, mapState } from 'vuex';

export default {
  name: "App",
  components: {
    THeader,
    TFooter,
    TItem,
  },
  data() {
    return {
      type: 0, // 业务类型。-1：表示展示未完成的数据； 0：表示展示所有数据； 1：表示展示已完成的数据
      showComplete: false, // 展示已完成列表
      rootStyle: {}, // 用来控制主题背景的
    };
  },
  mounted() {
    // bus总线，监听--展示全部事件
    this.$bus.$on("showAll", () => {
      this.showComplete = false;
      this.type = 0;
    });
    // bus总线，监听--展示已完成项
    this.$bus.$on("showComplete", () => {
      this.showComplete = true;
      this.type = -1;
    });
    // bus总线，监听--隐藏已完成项
    this.$bus.$on("hideComplete", () => {
      this.showComplete = false;
      this.type = -1;
    });
    // bus总线，监听--更换背景
    this.$bus.$on("changeBgImg", () => {
      // 随机更换背景
      const names = [catBg, busBg, homeBg];
      let index = Math.floor(Math.random() * names.length);
      this.rootStyle = {
        // 图片路径不能直接以字符串的形式传给url函数，否则会找不到。
        // 必须要先通过 import 导入，然后再去引用导入的路径才可以正常识别
        backgroundImage: `url('${names[index]}')`,
      };
    });
  },
  computed: {
    // 通过辅助函数映射state
    ...mapState([
      // 所有item
      'allItems'
    ]),
    // 通过辅助函数映射store中的计算属性
    ...mapGetters([
      // 获取已完成的item
      'getCompletedItems',
      // 获取未完成的item
      'getUnCompletedItems',
    ]),
    // 数据来源
    sources() {
      // 根据业务类型返回数据
      switch (this.type) {
        case -1: // 返回未完成数据
          return this.getUnCompletedItems;
        case 0: // 返回所有数据
          return this.allItems;
        case 1: // 返回已完成数据
          return this.getCompletedItems;
        default:
          // 默认情况,返回所有数据
          return this.allItems;
      }
    },
  },
};
</script>

<style lang="scss">
$color: #ffffff;
$bgName: "home.jpg";
$bgImg: url("./assets/bg-#{$bgName}");

#app {
  .root {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $color;
    margin: 60px auto;
    padding-bottom: 20px;
    background: {
      image: $bgImg;
      size: 100% 100%;
    }
    width: 450px;
    min-height: 850px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      flex-grow: 1; // 通过设置增长系数去填充剩余的区域,就可以让 footer 贴着底部
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin-bottom: 10px;
      .item {
        margin-bottom: 1px;
      }
    }
    .complete_content {
      flex-grow: 10;
      display: flex;
      flex-direction: column;
      justify-content: start;
      margin-bottom: 40px;
      .complete_title {
        background: rgba(0, 0, 0, 0.623);
        border-radius: 3px;
        padding: 2px 10px;
        margin: {
          left: 30px;
          bottom: 10px;
        }
        width: 50px;
        text-align: center;
      }
      .item {
        margin-bottom: 1px;
      }
    }
  }
}
.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateX(40px);
}
.item-enter-active,
.item-leave-active {
  transition: all 0.4s ease;
}
.complete-enter-from,
.complete-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
.complete-enter-active,
.complete-leave-active {
  color: gainsboro;
  transition: all 0.8s ease;
}
</style>
