/*
 * @Description: 脚本入口文件
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-20 21:39:10
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-31 21:41:37
 * @FilePath: /todo/src/main.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import { createApp } from 'vue'
import App from './App.vue'
import bus from './bus'
import animate from 'animate.css'
import store from './store'

const app = createApp(App)
// 全局注册 bus, 可以在父、子组件间通过全局对象 $bus 来进行事件传递
app.config.globalProperties.$bus = bus
app.use(animate)
// 通过 use 挂载 store插件，使整个实例都支持 store
app.use(store)

app.mount('#app')
