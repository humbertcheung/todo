/*
 * @Description: Vuex文件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-31 21:24:20
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-04-03 23:21:10
 * @FilePath: /todo/src/store/index.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import { createStore } from "vuex"
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'

const store = createStore({
  state,
  getters,
  actions,
  mutations
})

export default store