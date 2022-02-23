<template>
  <el-row class="mb-4">
    <!-- <el-button @click="routerJump('markdown')">markdown 示例</el-button>
    <el-button @click="routerJump('svg')">Svg 示例</el-button>
    <el-button @click="routerJump('login')">Axios 示例</el-button>
    <el-button @click="routerJump('icon')">ICON 示例</el-button>
    <el-button @click="routerJump('windi')">Windi CSS 示例</el-button>
    <el-button @click="routerJump('404')">404 示例</el-button> -->
    <div id="textToDisplay"><img src="../../assets/logo.png" alt="" /></div>
    <a-scene
      inspector="url: https://maumkt.ppdaicdn.com/js/aframe-inspector.js"
      physics="debug: false;"
      cursor="rayOrigin: mouse; fuse: true"
    >
      <a-entity cubemap="folder: Yokohama3/"></a-entity>

      <a-entity camera look-controls position="0 2 5">
        <a-cursor id="cursor"></a-cursor>
      </a-entity>
      <a-assets>
        <a-assets>
          <img
            id="balltexture"
            src="https://cdn.glitch.com/96535d07-cfdb-4bbf-b141-8b97f776d9f9%2Fballdimpled.png?v=1631725609500"
          />
        </a-assets>
        <a-asset-item id="tree" src="model/scene.gltf"></a-asset-item>
        <a-mixin id="ballMix" gltf-model="model5/scene.gltf" scale="0.25 0.25 0.25"></a-mixin>
        <a-mixin
          id="cube"
          event-set__grab="material.color: #FFEF4F"
          event-set__grabend="material.color: #F2E646"
          event-set__hit="material.color: #F2E646"
          event-set__hitend="material.color: #EF2D5E"
          event-set__mousedown="material.color: #FFEF4F"
          event-set__mouseenter="material.color: #F2E646"
          event-set__mouseleave="material.color: #EF2D5E"
          event-set__mouseup="material.color: #F2E646"
          material="color: #EF2D5E;"
        ></a-mixin>
      </a-assets>

      <!-- <a-entity
        look-at="[camera]"
        dynamic-body="shape: box; mass: 2"
        gltf-model="model1/scene.gltf"
        scale="0.5 0.5 0.5"
        position="-2.343 0.513 -2.323"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      ></a-entity> -->

      <!-- <a-entity
        dynamic-body="shape: box; mass: 2"
        gltf-model="model4/scene.gltf"
        scale="0.02 0.02 0.02"
        look-at="[camera]"
        position="2.206 1.201 -3.228"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 10000"
      ></a-entity> -->

      <!-- <a-sphere
        id="ball"
        shadow
        look-at="[camera]"
        material="color:orange;src:#balltexture"
        position="0.1 2.5 -1.023"
        scale="0.5 0.5 0.5"
        dynamic-body
        radius="0.19"
      ></a-sphere> -->
      <a-entity id="ball" mixin="ballMix" position="1 5 1"> </a-entity>
      <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
      <a-entity id="ball" mixin="ballMix" position="3 5 1"> </a-entity>
      <a-entity id="ball" mixin="ballMix" position="4 5 1"> </a-entity>
      <a-entity
        hide-on-click="target:#chickenAnimate"
        position="0 0 0.5"
        visible="true"
        scale="0.001 0.001 0.001"
        geometry="primitive: plane; width: 1.5; height: 1.8"
        material="color: #333333; shader: flat; transparent: false"
        class="raycastable"
      >
      </a-entity>
      <!-- <a-entity
        id="text"
        hide-on-click="target:#chickenAnimate"
        gltf-model="model5/scene.gltf"
        position="2 5 -1"
        scale="0.5 0.5 0.5"
      >
      </a-entity> -->
      <!-- <a-entity
        id="text"
        hide-on-click="target:#chickenAnimate"
        gltf-model="model5/scene.gltf"
        position="3 5 -1"
        scale="0.5 0.5 0.5"
      >
      </a-entity>
 -->
      <!-- <a-box
        id="chickenAnimate"
        position="2 4 -1"
        width="5"
        height="5"
        visible="false"
        depth="5"
        wireframe="true"
        color="#4CC3D9"
      ></a-box> -->

      <a-box
        static-body
        position="2 1 -1"
        width="5"
        height="1"
        shadow
        depth="5"
        material="color:orange;src:#balltexture"
      ></a-box>

      <a-entity
        static-body
        position="-1 4 -1"
        width="1"
        height="5"
        depth="5"
        geometry="primitive: box"
        material="color:orange;src:#balltexture"
      ></a-entity>

      <a-box static-body visible="false" position="5 4 -1" width="1" height="5" depth="5" color="#4CC3D9"></a-box>

      <a-box static-body visible="false" position="2 4 -4" width="5" height="5" depth="1" color="#4CC3D9"></a-box>
      <a-entity id="paw">
        <a-entity
          id="paw-cylinder"
          static-body
          position="0 5 0"
          mixin="cube"
          geometry="primitive: cylinder; height: 2; radius: 0.1"
        ></a-entity>
        <a-entity
          id="paw-sphere"
          static-body
          position="0 3.806 -0.006"
          mixin="cube"
          constraint="target: #paw-cylinder;damping: 0.25;stiffness: 25;"
          geometry="primitive:box; width: 0.4; height: 0.4; depth: 0.4"
        ></a-entity>
        <a-entity
          id="paw-bottom"
          position="-0.233 3.472 -0.036"
          :rotation="'0 0 ' + pawRotation"
          constraint="target: #paw-spher;damping: 0.25;stiffness: 25;"
        >
          <a-entity static-body mixin="cube" geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive: sphere; radius: 0.05"
            position="0.007 -0.175 0.000"
          ></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            position="0.168 -0.340 0"
            rotation="0 0  50.000"
          ></a-entity>
        </a-entity>

        <a-entity
          id="paw-bottom"
          position="0.238 3.466 -0.036"
          :rotation="'0 180 ' + pawRotation"
          constraint="target: #paw-spher;damping: 0.25;stiffness: 25;"
        >
          <a-entity static-body mixin="cube" geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive: sphere; radius: 0.05"
            position="0.007 -0.175 0.000"
          ></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            position="0.168 -0.340 0"
            rotation="0 0  50.000"
          ></a-entity>
        </a-entity>

        <a-entity
          id="paw-bottom"
          position="0.006 3.466 -0.262"
          :rotation="'0 -90 ' + pawRotation"
          constraint="target: #paw-spher;damping: 0.25;stiffness: 25;"
        >
          <a-entity static-body mixin="cube" geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive: sphere; radius: 0.05"
            position="0.007 -0.175 0.000"
          ></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            position="0.168 -0.340 0"
            rotation="0 0  50.000"
          ></a-entity>
        </a-entity>
        <a-entity
          id="paw-bottom"
          position="0.006 3.466 0.216"
          :rotation="'0 90 ' + pawRotation"
          constraint="target: #paw-spher;damping: 0.25;stiffness: 25;"
        >
          <a-entity static-body mixin="cube" geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive: sphere; radius: 0.05"
            position="0.007 -0.175 0.000"
          ></a-entity>
          <a-entity
            static-body
            mixin="cube"
            geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            position="0.168 -0.340 0"
            rotation="0 0  50.000"
          ></a-entity>
        </a-entity>
      </a-entity>
      <a-entity light="type: point; color: #f4f4f4; intensity: 0.1; distance: 0" position="-2.5 1.2 2.2"></a-entity>
      <a-entity light="type: point; color: #f4f4f4; intensity: 0.1; distance: 0" position="-20 -7 -40"></a-entity>
      <a-entity light="type: ambient; color: #f4f4f4; intensity: 0.25;" position="-8 10 -18"></a-entity>
      <a-box
        static-body
        width="20"
        height="20"
        depth="1"
        rotation="-90 0 0"
        visible="false"
        position="0 -0.5 0"
      ></a-box>
    </a-scene>
  </el-row>
  <el-row>
    <el-button @click="top">上</el-button>
    <el-button @click="bottom">下</el-button>
    <el-button @click="left">左</el-button>
    <el-button @click="right">右</el-button>
    <el-button @click="front">前</el-button>
    <el-button @click="back">后</el-button>
    <el-button @click="start">抓取</el-button>
  </el-row>
</template>

<script setup lang="ts">
const controllerId = '#paw';
let pawRotation = -15;
const start = () => {
  pawRotation = -50;
  const pawList = document.querySelectorAll('#paw-bottom');
  for (let i = 0; i < pawList.length; i += 1) {
    const rotation = pawList[i]?.getAttribute('rotation');
    console.log(rotation);
    if (parseInt(rotation?.z, 10) >= -15) {
      pawRotation = -50;
    } else {
      pawRotation = -15;
    }
    pawList[i]?.setAttribute('rotation', { x: rotation?.x, y: rotation?.y, z: pawRotation });
  }
};
const top = () => {
  console.log('top');
  const ball = document.querySelector(controllerId);
  const position = ball?.getAttribute('position');
  const y = (position?.y || 0) + 0.1;
  ball?.setAttribute('position', { x: position?.x, y, z: position?.z });
};
const bottom = () => {
  console.log('bottom');
  const ball = document.querySelector(controllerId);
  const position = ball?.getAttribute('position');
  const y = (position?.y || 0) - 0.1;
  ball?.setAttribute('position', { x: position?.x, y, z: position?.z });
};
const left = () => {
  console.log('left');
  const ball = document.querySelector(controllerId);
  const position = ball?.getAttribute('position');
  const x = (position?.x || 0) - 0.1;
  ball?.setAttribute('position', { x, y: position?.y, z: position?.z });
};
const right = () => {
  console.log('right');
  const ball = document.querySelector(controllerId);
  const position = ball?.getAttribute('position');
  const x = (position?.x || 0) + 0.1;
  ball?.setAttribute('position', { x, y: position?.y, z: position?.z });
};
const front = () => {
  console.log('front');
  const ball = document.querySelector(controllerId);
  const position = ball?.getAttribute('position');
  const z = (position?.z || 0) + 0.1;
  ball?.setAttribute('position', { x: position?.x, y: position?.y, z });
};
const back = () => {
  console.log('back');
  const ball = document.querySelector(controllerId);
  const position = ball?.getAttribute('position');
  const z = (position?.z || 0) - 0.1;
  ball?.setAttribute('position', { x: position?.x, y: position?.y, z });
};

AFRAME.registerComponent('hide-on-click', {
  // dependencies: ['raycaster'],
  schema: {
    target: { type: 'selector' },
  },
  init() {
    console.log(this);
    const { data } = this;
    const { el } = this;

    const ballList = document.querySelectorAll('#ball');
    console.log(ballList);
    const addPhysicalToEntity = (entity: any) => {
      entity.target.setAttribute('dynamic-body', ' mass: 2');
    };
    for (let i = 0; i < ballList.length; i += 1) {
      ballList[i].addEventListener('click', addPhysicalToEntity);
    }
  },
});
</script>
<style>
.arjs-loader {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arjs-loader div {
  text-align: center;
  font-size: 1.25em;
  color: white;
}
</style>
