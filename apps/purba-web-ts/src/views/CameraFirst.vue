<template>
  <div id="app" class="backgroundContainer">
    <div class="phoneContainer">
      <div class="status-bar">
        <p>{{ currentTime }}</p>
        <img alt="" id="battery" src="../assets/battery.png" />
      </div>
      <div class="withBack">
        <img
          role="button"
          tabindex="0"
          alt=""
          @click="goBack"
          @keyup="goBack"
          class="backImg"
          src="../assets/뒤로가기.png"
        />
      </div>
      <div class="cameraContainer">
        <video class="cameraDisplay" ref="videoElement" autoplay></video>
      </div>
      <router-link to="/ci">
        <button class="captureBtn" @click="capture">촬영</button>
      </router-link>
      <canvas ref="canvas" style="display: none"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, Ref } from "vue";
import { useRouter } from "vue-router";
import { useImageStore } from "../stores/imageStore";

export default defineComponent({
  name: "CameraFirst",
  setup() {
    const currentTime = ref<string | null>(null);
    let timer: number | NodeJS.Timeout | null = null;
    const videoElement: Ref<HTMLVideoElement | null> = ref(null);
    const canvas: Ref<HTMLCanvasElement | null> = ref(null);

    const router = useRouter();
    const goBack = () => {
      router.back();
    };

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      currentTime.value = `${hours}:${minutes}`;
    };

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        if (videoElement.value) {
          videoElement.value.srcObject = stream;
        }
      } catch (err) {
        console.error("에러가 발생했습니다.", err);
      }
    };

    const capture = () => {
      if (videoElement.value && canvas.value) {
        const context = canvas.value.getContext("2d");
        if (context) {
          canvas.value.width = 800;
          canvas.value.height = 600;
          context.drawImage(
            videoElement.value,
            0,
            0,
            canvas.value.width,
            canvas.value.height
          );
          saveImage(canvas.value);
          const imageDataUrl = canvas.value.toDataURL("image/png");
          const imageStore = useImageStore();
          imageStore.setImageDataUrl(imageDataUrl);
        }
      }
    };

    const saveImage = (canvas: HTMLCanvasElement) => {
      const imageDataUrl2 = canvas.toDataURL("image/png");
      console.log(imageDataUrl2); // 실제 애플리케이션에서는 콘솔에 로그를 찍는 대신 이미지를 처리합니다.

      const link = document.createElement("a");
      link.href = imageDataUrl2;
      link.download = "ivon_image.png"; // 다운로드될 파일의 이름 지정
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    onMounted(() => {
      updateTime();
      timer = setInterval(updateTime, 60000);
      startCamera();
    });

    onUnmounted(() => {
      if (timer !== null) {
        clearInterval(timer);
      }
    });

    return {
      currentTime,
      startCamera,
      capture,
      videoElement,
      canvas,
      goBack
    };
  }
});
</script>

<style>
@import "../css/index.css";
</style>
../stores/imageStore
