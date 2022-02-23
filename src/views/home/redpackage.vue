<template>
  <div class="arjs-loader">
    <a-scene
      id="scene"
      style="z-index: 999"
      vr-mode-ui="enabled: false;"
      inspector="url: https://maumkt.ppdaicdn.com/js/aframe-inspector.js"
      physics="debug: false;"
      cursor="rayOrigin: mouse; fuse: true"
    >
      <a-entity
        camera
        look-controls
        orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"
      >
        <a-cursor id="cursor"></a-cursor>
      </a-entity>
      <a-assets>
        <!-- <a-asset-item id="tree" src="model8/scene.gltf"></a-asset-item> -->
      </a-assets>
      <a-entity cubemap="folder: Yokohama3/"></a-entity>
      <a-entity template="src: #clouds"></a-entity>
      <a-entity gltf-model="model11/scene.gltf" > </a-entity>
      <a-entity
        id="ball"
        hide-on-click
        look-at="[camera]"
        gltf-model="model9/scene.gltf"
        position="0 2.5 -1.023"
        scale="2 2 2"
      ></a-entity>
      <a-sky src="model7/textures/lambert1_emissive.jpeg"> </a-sky>
      <!-- <a-entity gltf-model="model7/scene.gltf"></a-entity> -->
    </a-scene>
    <div id="arjs-cell">
      <video id="video" playsinline autoplay></video>
    </div>
    <el-col style="z-index: 9999; position: absolute; bottom: 0; left: 0px">
      <el-select v-model="selectCamera" placeholder="请选择">
        <el-option v-for="item in options" :key="item.deviceId" :label="item.label" :value="item.deviceId"> </el-option>
      </el-select>
      <el-button @click="cameraStart">启动摄像头</el-button>
      <div class="button-layout">
        <el-button id="longLeftClick" @click="left">左</el-button>
        <div class="button-center">
          <el-button id="longRightClick" @click="front">前</el-button>
          <el-button @click="back">后</el-button>
        </div>
        <el-button id="longRightClick" @click="right">右</el-button>
        <el-button id="longRightClick" @click="top">top</el-button>
        <el-button id="longRightClick" @click="bottom">bottom</el-button>
        <el-button @click="start">抓取</el-button>
      </div>
    </el-col>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const videoInput = ref([]);
const options = ref([]);
const selectCamera = ref('');
// eslint-disable-next-line no-use-before-define
AFRAME.registerComponent('hide-on-click', {
  schema: {
    target: { type: 'selector' },
  },
  init() {
    const { el } = this;
    const interval = setInterval(() => {
      const position = el?.getAttribute('position');
      const y = (position?.y || 0) + 0.1;
      el?.setAttribute('position', { x: position?.x, y, z: position?.z });
      if (y >= 30) clearInterval(interval);
    }, 100);
  },
});
function gotStream(stream: any) {
  const videoElement = document.querySelector('video') as HTMLVideoElement;
  videoElement.srcObject = stream;
  return navigator.mediaDevices.enumerateDevices();
}

const init = () => {
  // eslint-disable-next-line no-use-before-define
  if (window.stream) {
    window.stream.getTracks().forEach((track: any) => {
      track.stop();
    });
  }
  const constraints = {
    audio: false,
    video: {
      height: window.innerHeight,
      deviceId: selectCamera.value,
    },
  };
  // eslint-disable-next-line no-use-before-define
  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
};
function cameraStart() {
  init();
}

function handleError(error: any) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}
onMounted(() => {
  console.log('onMounted');
  navigator.mediaDevices
    .enumerateDevices()
    .then((devices: any) => {
      console.log(devices);
      for (let i = 0; i < devices.length; i += 1) {
        const device = devices[i];
        if (device.kind === 'videoinput') {
          // eslint-disable-next-line no-use-before-define
          videoInput.value.push(device.deviceId);
          options.value.push(device);
        }
      }
      console.log(videoInput);
    })
    .catch(handleError);
});
</script>
<style scoped>
.arjs-loader {
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
}

.button-layout {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button-center {
  display: flex;
  flex-direction: column;
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
