<template>
  <div ref="container"></div>
</template>

<script>
import * as THREE from 'three';

export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 创建场景
      const scene = new THREE.Scene();
      
      // 创建相机
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
      
      // 创建渲染器
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      this.$refs.container.appendChild(renderer.domElement);
      
      // 创建折线图
      const points = [];
      for (let i = 0; i < 10; i++) {
        points.push(new THREE.Vector3(i - 5, Math.random() * 10 - 5, 0));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const material = new THREE.LineBasicMaterial({ color: 0x00ff00 });
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      
      // 动画循环
      const animate = () => {
        requestAnimationFrame(animate);
        // line.rotation.x += 0.01;
        // line.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }
  }
};
</script>

<style>
#container {
  width: 100%;
  height: 100%;
}
</style>
