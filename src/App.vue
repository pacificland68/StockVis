<template>
  <div>
    <h2>Tecent</h2>
    <!-- <div id="container" style="width: 1000px; height: 200px;"></div> -->
    <!-- <Secondary /> -->
    <Tertiary />
  </div>
</template>

<script setup lang="ts">
import { Line } from '@antv/g2plot'
import Secondary from './Secondary.vue'
import Tertiary from './Tertiary.vue'
import { onMounted, ref } from 'vue'

// var ws = new WebSocket('ws://10.31.20.235:8000/ws/stock/')

// let data: any = ref([])
// let line = ref()
// var worker = new Worker('worker.js')

// ws.onmessage = function (event) {
//   var datasource = JSON.parse(event.data)
//   var message = datasource.message
//   data.value.push(message[0])
//   data.value.push(message[1])
//   line.value.changeData(data.value)

//   worker.postMessage(event.data)
// }

// worker.onmessage = function (event) {
//   var processedData = event.data
//   data.value.push(processedData[0])
//   data.value.push(processedData[1])
//   line.value.changeData(data.value)
// }

// ws.onopen = function (event) {
//   // 发送初始消息
//   ws.send(JSON.stringify({ message: 'hello' }))
//   // 启动心跳检测，每30秒发送一次消息
//   // setInterval(() => {
//   //   ws.send(JSON.stringify({ message: 'heartbeat' }))
//   // }, 30000)
// }

// ws.onerror = function (event) {
//   console.error('WebSocket error observed:', event)
// }

// onMounted(() => {
//   line.value = new Line('container', {
//     data: data.value,
//     xField: 'data_time',
//     yField: 'value',
//     seriesField: 'type',
//     yAxis: {
//       min: 287
//     },
//     renderer: 'canvas'
//   })

//   line.value.render()
// })
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
