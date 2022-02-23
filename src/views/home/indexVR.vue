<template>
  <div class="arjs-loader">
    <a-scene
      id="scene"
      artoolkit
      style="z-index: 999"
      vr-mode-ui="enabled: false;"
      inspector="url: https://maumkt.ppdaicdn.com/js/aframe-inspector.js"
      physics="debug: false;"
      cursor="rayOrigin: mouse; fuse: true"
    >
      <a-entity cubemap="folder: Yokohama3/"></a-entity>

      <a-entity
        camera
        look-controls
        wasd-controls
        orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"
        position="0 0 0"
      >
        <a-cursor id="cursor"></a-cursor>
      </a-entity>
      <a-assets>
        <a-asset-item id="tree" src="model/scene.gltf"></a-asset-item>
        <a-mixin id="ballMix" gltf-model="model2/scene.gltf" scale="0.3 0.3 0.3" dynamic-body></a-mixin>
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
        <img
          id="balltexture"
          src="https://cdn.glitch.com/96535d07-cfdb-4bbf-b141-8b97f776d9f9%2Fballdimpled.png?v=1631725609500"
        />
        <img id="boxTexture" src="https://i.imgur.com/mYmmbrp.jpg" />

        <a-mixin id="wallMix" static-body visible="true"></a-mixin>
      </a-assets>

      <a-entity id="rotationY" rotation-y rotation="0 -45 0">
        <a-entity id="ball" mixin="ballMix" position="1 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="1 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="2 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="3 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="3 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="3 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="3 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="3 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="4 5 1"> </a-entity>
        <a-entity id="ball" mixin="ballMix" position="4 5 1"> </a-entity>

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
        <a-box id="bottom1" mixin="wallMix" position="2 1 -2" width="5" height="1" depth="3" color="green"></a-box>
        <a-box id="bottom2" mixin="wallMix" position="3 1 0.5" width="3" height="1" depth="2" color="green"></a-box>
        <a-box
          id="bottom3"
          mixin="wallMix"
          position="0.457 1.7 -0.5"
          width="2"
          height="3"
          depth="0.1"
          color="gray"
        ></a-box>
        <a-box
          id="bottom4"
          mixin="wallMix"
          position="1.45 1.7 0.5"
          width="0.1"
          height="3"
          depth="2"
          color="gray"
        ></a-box>
        <a-box
          id="bottom5"
          mixin="wallMix"
          position="0.460 1.7 1.45"
          width="2"
          height="3"
          depth="0.1"
          color="gray"
        ></a-box>
        <a-box
          id="bottom6"
          mixin="wallMix"
          position="-0.5 1.7 0.5"
          width="0.1"
          height="3"
          depth="2"
          color="gray"
        ></a-box>

        <a-box id="top" mixin="wallMix" position="2 8.7 -1" width="5" height="1.5" depth="5" color="green"></a-box>
        <a-box id="left" mixin="wallMix" position="-0.6 4 -1" width="0.2" height="8" depth="5" opacity="0.3"></a-box>
        <a-box id="right" mixin="wallMix" position="4.6 4 -1" width="0.2" height="8" depth="5" opacity="0.3"></a-box>
        <a-box id="back" mixin="wallMix" position="2 4 -3.6" width="5" height="8" depth="0.2" color="pink"></a-box>
        <a-box id="front" mixin="wallMix" position="2 4 1.4" width="5" height="8" depth="0.2" opacity="0.3"></a-box>
        <a-entity id="paw" position="3.3 3.3 -2.3">
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
            <a-entity
              static-body
              mixin="cube"
              geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            ></a-entity>
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
            <a-entity
              static-body
              mixin="cube"
              geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            ></a-entity>
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
            <a-entity
              static-body
              mixin="cube"
              geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            ></a-entity>
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
            <a-entity
              static-body
              mixin="cube"
              geometry="primitive:box; width: 0.03; height: 0.4; depth: 0.03"
            ></a-entity>
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
      </a-entity>
      <!-- <a-entity light="type: point; color: #f4f4f4; intensity: 0.1; distance: 0" position="-2.5 1.2 2.2"></a-entity>
      <a-entity light="type: point; color: #f4f4f4; intensity: 0.1; distance: 0" position="-20 -7 -40"></a-entity>
      <a-entity light="type: ambient; color: #f4f4f4; intensity: 0.25;" position="-8 10 -18"></a-entity> -->
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

const controllerId = '#paw';
const videoInput = ref([]);
const options = ref([]);
const selectCamera = ref('');
let pawRotation = -15;
const longClick = () => {
  const left = document.querySelector('longLeftClick');
  const isLeft = true;

  const leftController = () => {
    const ball = document.querySelector(controllerId);
    const position = ball?.getAttribute('position');
    const x = (position?.x || 0) - 0.1;
    ball?.setAttribute('position', { x, y: position?.y, z: position?.z });
  };

  const rightController = () => {
    const ball = document.querySelector(controllerId);
    const position = ball?.getAttribute('position');
    const x = (position?.x || 0) + 0.1;
    ball?.setAttribute('position', { x, y: position?.y, z: position?.z });
  };

  const frontController = () => {
    const ball = document.querySelector(controllerId);
    const position = ball?.getAttribute('position');
    const z = (position?.z || 0) + 0.1;
    ball?.setAttribute('position', { x: position?.x, y: position?.y, z });
  };
  const backController = () => {
    const ball = document.querySelector(controllerId);
    const position = ball?.getAttribute('position');
    const z = (position?.z || 0) - 0.1;
    ball?.setAttribute('position', { x: position?.x, y: position?.y, z });
  };
  let isStart = false;
  let interval = null;
  left?.addEventListener(
    'touchstart',
    (el: any) => {
      console.log(el);
      isStart = true;
      if (isStart) {
        console.log(iStart, isLeft);
        interval = setInterval(() => {
          if (isLeft) {
            leftController();
          } else {
            rightController();
          }
        }, 100);
      }
    },
    false,
  );
  left?.addEventListener(
    'touchend',
    (el: any) => {
      isStart = false;
      clearInterval(interval);
    },
    false,
  );
};

longClick();

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
    pawList[i]?.setAttribute('rotation', {
      x: rotation?.x,
      y: rotation?.y,
      z: pawRotation,
    });
  }
};
function setup() {
  console.log('setup');
}
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

AFRAME.registerComponent('rotation-y', {
  init() {},
});
AFRAME.registerComponent('hide-on-click', {
  // dependencies: ['raycaster'],
  schema: {
    target: { type: 'selector' },
  },
  init() {
    console.log(this);
    const { data } = this;
    // const { el } = this;

    const ballList = document.querySelectorAll('#ball');
    console.log(ballList);
    const addPhysicalToEntity = (entity: any) => {
      entity.target.setAttribute('dynamic-body', ' mass: 2');
    };
    for (let i = 0; i < ballList.length; i += 1) {
      ballList[i].addEventListener('click', addPhysicalToEntity);
    }
    const getTouches = (evt: any) => {
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    };
    const el = document.querySelector('#rotationY');
    console.log('init');
    let xDown = null;
    let yDown = null;
    el?.addEventListener(
      'touchstart',
      (evt: any) => {
        console.log('touchstart');
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
      },
      false,
    );
    el?.addEventListener(
      'touchmove',
      (evt: any) => {
        console.log('touchmove');

        if (!xDown || !yDown) {
          return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          /* most significant */
          if (xDiff > 0) {
            /* left swipe */
            const rotation = el?.getAttribute('rotation');
            el?.setAttribute('rotation', {
              x: rotation?.y,
              y: rotation?.y + xDiff,
              z: rotation?.z,
            });
          } else {
            /* right swipe */
          }
        } else if (yDiff > 0) {
          /* up swipe */
        } else {
          /* down swipe */
        }
        xDown = null;
        yDown = null;
      },
      false,
    );
  },
});
window.addEventListener(
  'resize',
  () => {
    console.log('xxx');
  },
  false,
);

function gotStream(stream) {
  const videoElement = document.querySelector('video');
  videoElement.srcObject = stream;
  return navigator.mediaDevices.enumerateDevices();
}

function handleError(error) {
  console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
}

const init = () => {
  if (window.stream) {
    window.stream.getTracks().forEach((track) => {
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
  navigator.mediaDevices.getUserMedia(constraints).then(gotStream).catch(handleError);
};
function cameraStart() {
  init();
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
          videoInput.value.push(device.deviceId);
          options.value.push(device);
        }
      }
      console.log(videoInput);
    })
    .catch(handleError);
});

// window.addEventListener('arjs-video-loaded', (evt) => {
//   console.log('VIDEO LOADED');
//   const video = evt.detail.component;
//   const cell = document.querySelector('#arjs-cell');
//   THREEx.setWrapperElement(cell, video);
// });
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
