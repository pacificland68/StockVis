<template>
  <canvas ref="lineChart" width="600" height="400"></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

let lineChart: any = ref(null)

onMounted(() => {
  if (!lineChart.value) return
  const canvas = lineChart.value
  const ctx = canvas.getContext('2d')
  const margin = 50
  const maxY = 100 // 假设Y轴的最大值为100
  const minY = 0 // 假设Y轴的最小值为0
  const width = canvas.width
  const height = canvas.height
  console.log('height', height)

  // 绘制坐标轴
  ctx.beginPath()
  ctx.moveTo(50, height - 50) // 移动到左下角作为起点
  ctx.lineTo(50, 50) // Y 轴向上绘制
  ctx.moveTo(50, height - 50)
  ctx.lineTo(width - 50, height - 50) // X 轴向右绘制
  ctx.stroke()

  // 绘制Y轴刻度
  const yInterval = 10 // Y轴每个刻度的间隔值
  const yScale = (height - 2 * margin) / (maxY - minY) // 每单位高度的像素
  for (let i = minY; i <= maxY; i += yInterval) {
    const y = height - margin - i * yScale
    ctx.moveTo(margin - 5, y)
    ctx.lineTo(margin, y)
    ctx.fillText(i.toString(), margin - 30, y)
  }

  // 准备数据，这里的数据点需要根据实际的坐标系进行调整
  const data = [
    { x: 50, y: height - 150 },
    { x: 61, y: height - 250 }
  ]

  // 绘制X轴刻度（以数据点数量为基础）
  const xInterval = (width - 2 * margin) / data.length // X轴每个刻度的像素宽度
  data.forEach((point, index) => {
    const x = margin + index * xInterval
    ctx.moveTo(x, height - margin)
    ctx.lineTo(x, height - margin + 5)
    ctx.fillText(point.x.toString(), x - 5, height - margin + 20)
  })

  // 绘制折线图
  ctx.beginPath()
  ctx.moveTo(data[0].x, data[0].y)
  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(data[i].x, data[i].y)
  }
  ctx.stroke()

  // 标记数据点
  for (let i = 0; i < data.length; i++) {
    ctx.beginPath()
    ctx.arc(data[i].x, data[i].y, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  // 添加文本
  //   ctx.fillText('数据点1', data[0].x - 10, data[0].y + 20)
  //   ctx.fillText('数据点2', data[1].x - 10, data[1].y + 20)
})
</script>
