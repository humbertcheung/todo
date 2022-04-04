/*
 * @Description: bus总线，实现发布/订阅
 * @Version: 1.0
 * @Author: Humbert Cheung
 * @Date: 2022-03-21 21:30:12
 * @LastEditors: [Humbert Cheung]
 * @LastEditTime: 2022-03-21 23:51:15
 * @FilePath: /todo/src/bus.js
 * Copyright (C) 2022 syzhang. All rights reserved.
 */
import mitt from 'mitt';

const bus = {}
const emitter = mitt()

bus.$on = emitter.on
bus.$off = emitter.off
bus.$emit = emitter.emit

export default bus
/*
 * 使用之前需要通过命令 npm i mitt --save 安装 mitt,
 * Mitt是一个体积极小的第三方消息发布/订阅式JavaScript库
 * 本文件引入了 mitt，并利用 mitt()构造器生成了一个 emit 实例，
 * 同时把 on、off 和 emit 方法赋值给了空对象 bus，作为静态方法
*/