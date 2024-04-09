<template>
  <div id="app" class="backgroundContainer">
    <div class="phoneContainer">
      <div class="status-bar">
        <p>{{ currentTime }}</p>
        <img alt="" id="battery" src="../assets/battery.png" />
      </div>
      <div class="modalBack" v-if="ModalWindow1 == 1">
        <div class="modalWindow">
          <h2 class="word2">무엇을 하시겠습니까?</h2>
          <div class="modalGroup">
            <router-link to="/cs">
              <button class="modalBtn">요약</button>
            </router-link>
            <button class="modalBtn" @click="ModalWindow1 = 0">읽어주기</button>
          </div>
        </div>
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
      <h2 class="word1">캡처 화면</h2>
      <div class="cameraContainer">
        <img
          v-if="imageDataUrl"
          :src="imageDataUrl"
          alt="캡처된 이미지"
          class="captureDisplay"
        />
      </div>
      <div class="buttonGroup1">
        <router-link to="/cm">
          <button class="captureBtn2">재촬영</button>
        </router-link>
        <button @click="ModalWindow1 = 1" class="captureBtn2">완료</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useImageStore } from "../stores/imageStore";

export default defineComponent({
  name: "CameraImage", // 뷰 추가시 name을 뷰 이름에 맞게 변경해서 사용
  setup() {
    const currentTime = ref<string | null>(null);
    let timer: number | NodeJS.Timeout | null = null;
    const { imageDataUrl } = useImageStore();
    const ModalWindow1 = ref(0);

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      currentTime.value = `${hours}:${minutes}`;
    };

    const router = useRouter();
    const goBack = () => {
      router.back();
    };

    onMounted(() => {
      updateTime();
      timer = setInterval(updateTime, 60000);
    });

    onUnmounted(() => {
      if (timer !== null) {
        clearInterval(timer);
      }
    });

    return { currentTime, goBack, imageDataUrl, ModalWindow1 };
  }
});
</script>

<style>
@import "../css/index.css";
</style>
