/*
 * @Description: mutations
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-03 23:18:40
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-19 16:39:06
 * @FilePath: /todo/src/store/mutations.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
const mutations = { // 更改状态
  // 添加 item
  ADD_ITEM(state, newItem) {
    state.allItems.push(newItem)
  },
  // 删除 item
  DEL_ITEM(state, itemObj) {
    const index = state.allItems.findIndex(item => item.tId === itemObj.taskId)
    state.allItems.splice(index, 1)
  },
  // 修改 item 状态
  CHANGE_STATUS(state, statusObj) {
    state.allItems.forEach(item => {
      if (item.tId === statusObj.id) {
        item.isComplete = statusObj.status
      }
    });
  },
  // id自增
  ID_INCREMENT(state) {
    state.tId++
  },
  // 修改Item
  MODIFY_ITEM(state, itemObj) {
    state.allItems.forEach(item => {
      if (item.tId === itemObj.taskId) {
        item.taskContent = itemObj.taskContent
      }
    })
  }
}

export default mutations