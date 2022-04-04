/*
 * @Description: actions
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-04-03 23:16:27
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-03 23:27:51
 * @FilePath: /todo/src/store/actions.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
const actions = { // 提交 mutation
  // 提交添加item的 mutation
  ADD_ITEM({ commit }, item) {
    commit('ADD_ITEM', item)
  },
  // 提交删除item的 mutation
  DEL_ITEM({ commit }, itemObj) {
    commit('DEL_ITEM', itemObj)
  },
  // 更改完成状态
  CHANGE_STATUS({ commit }, statusObj) {
    commit('CHANGE_STATUS', statusObj)
  },
  // id自增
  ID_INCREMENT({ commit }) {
    commit('ID_INCREMENT')
  }
}

export default actions