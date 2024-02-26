<template>
  <div>
    <canvas ref="canvas" width="600" height="400"></canvas>
  </div>
</template>

<!-- <script setup>
import { ref, onMounted } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)
const renderer = ref(null)
const scene = ref(null)
const camera = ref(null)
const light = ref(null)
const material = ref(null)
const geometry = ref(null)
const line = ref(null)
const data = ref([])

onMounted(() => {
  canvas.value = this.$refs.canvas
  init()
  animate()

  // 模拟数据更新
  setInterval(() => {
    data.value.push({
      x: data.value.length,
      y: Math.random() * 100
    })
    updateLine()
  }, 1000)
})

function init() {
  // 创建 WebGL 渲染器
  renderer.value = new THREE.WebGLRenderer({
    canvas: canvas.value
  })

  // 创建场景
  scene.value = new THREE.Scene()

  // 创建相机
  camera.value = new THREE.PerspectiveCamera(45, canvas.value.width / canvas.value.height, 0.1, 1000)
  camera.value.position.set(0, 0, 500)

  // 创建光线
  light.value = new THREE.AmbientLight(0xffffff)
  scene.value.add(light.value)

  // 创建材质
  material.value = new THREE.LineBasicMaterial({
    color: 0x0000ff
  })

  // 创建几何体
  geometry.value = new THREE.BufferGeometry()

  // 创建折线
  line.value = new THREE.Line(geometry.value, material.value)
  scene.value.add(line.value)
}
function animate() {
  requestAnimationFrame(animate.value)

  renderer.value.render(scene.value, camera.value)
}
function updateLine() {
  // 更新几何体数据
  const vertices = data.value.map(item => [item.x, item.y])
  geometry.value.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices.flat()), 2))

  // 更新线段
  line.value.geometry.attributes.position.needsUpdate = true
}
</script> -->

<script>
import Vue from 'vue';

export default {
  name: 'App',
  components: {},
  data() {
    return {
      canvas: null,
      gl: null,
      program: null,
      positionBuffer: null,
      indexBuffer: null,
      positionAttributeLocation: null,
      colorUniformLocation: null,
      data: []
    };
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.init();
    this.animate();

    // Simulate data update
    setInterval(() => {
      this.data.push({
        x: this.data.length,
        y: Math.random() * 100
      });
      this.updateLine();
    }, 1000);
  },
  methods: {
    init() {
      // Get WebGL context
      this.gl = this.canvas.getContext('webgl');

      // Create shader program
      const vertexShaderSource = `
        attribute vec2 position;

        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `;
      const fragmentShaderSource = `
        precision mediump float;

        uniform vec4 color;

        void main() {
          gl_FragColor = color;
        }
      `;
      this.program = createProgram(this.gl, vertexShaderSource, fragmentShaderSource); // Function to create program

      // Create vertex buffer
      this.positionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
        -1.0, -1.0,
        1.0, -1.0,
        1.0,  1.0,
        -1.0,  1.0,
      ]), gl.STATIC_DRAW);

      // Create index buffer
      this.indexBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
      this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
        0, 1, 2,
        0, 2, 3,
      ]), gl.STATIC_DRAW);

      // Get attribute location
      this.positionAttributeLocation = this.gl.getAttribLocation(this.program, 'position');

      // Get uniform location
      this.colorUniformLocation = this.gl.getUniformLocation(this.program, 'color');

      // Set viewport
      this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);

      // Clear color buffer
      this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
      this.gl.clear(gl.COLOR_BUFFER_BIT);

      // Enable vertex attribute
      this.gl.enableVertexAttribArray(this.positionAttributeLocation);

      // Bind vertex buffer
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);

      // Tell attribute how to read data from buffer
      this.gl.vertexAttribPointer(this.positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

      // Bind index buffer
      this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);

      // Use program
      this.gl.useProgram(this.program);
    },
    animate() {
      requestAnimationFrame(this.animate);

      // Draw line
      this.gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
    },
    updateLine() {
      // Update vertex buffer
      const vertices = this.data.map(item => [item.x, item.y]);
      this.gl.buffer
    }
</script>

