<template>
  <div class="arjs-loader">
    <model-viewer
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      src="/public/model1/scene.gltf"
      alt="A 3D model of an astronaut"
      style="width: 100vw; height: 100vh"
    >
      <button
        slot="ar-button"
        style="background-color: white; border-radius: 4px; border: none; position: absolute; top: 16px; right: 16px"
      >
        👋 Activate AR
      </button>
    </model-viewer>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped>
.arjs-loader {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
}
#arjs-cell {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 100%;
  margin: auto;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}
</style>
