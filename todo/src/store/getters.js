/*
 * @Description: getters
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-03 23:20:35
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-03 23:20:35
 * @FilePath: /todo/src/store/getters.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */

const getters = { // 计算属性
  // 获取已完成的数据
  getCompletedItems(state) {
    return state.allItems.filter(item => item.isComplete == true)
  },
  // 获取未完成的数据
  getUnCompletedItems(state) {
    return state.allItems.filter(item => item.isComplete == false)
  }
}

export default getters