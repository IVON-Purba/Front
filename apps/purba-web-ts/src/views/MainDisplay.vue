<template>
  <div id="app" class="backgroundContainer">
    <div class="phoneContainer">
      <div class="status-bar">
        <p>{{ currentTime }}</p>
        <img alt="" id="battery" src="../assets/battery.png" />
      </div>
      <div class="withBack">
        <img alt="" class="logoPoorba PoorbaMove" src="../assets/푸르바.png" />
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

      <div class="btnBundles">
        <RouterLink to="/cm">
          <button class="mainBtn">
            <img alt="" class="mainIcon" src="../assets/카메라.png" />
            <span class="mainTxt">카메라</span>
          </button>
        </RouterLink>
        <button class="mainBtn">
          <img alt="" class="mainIcon" src="../assets/갤러리.png" />
          <span class="mainTxt">갤러리</span>
        </button>
      </div>

      <div class="btnBundles">
        <button class="mainBtn">
          <img alt="" class="mainIcon" src="../assets/일정관리.png" />
          <span class="mainTxt">일정관리</span>
        </button>
        <button class="mainBtn">
          <img alt="" class="mainIcon" src="../assets/대화.png" />
          <span class="mainTxt">AI 대화</span>
        </button>
      </div>

      <div class="btnBundles">
        <RouterLink to="/an">
          <button class="mainBtn">
            <img alt="" class="mainIcon" src="../assets/공지사항.png" />
            <span class="mainTxt">공지사항</span>
          </button>
        </RouterLink>
        <button class="mainBtn">
          <img alt="" class="mainIcon" src="../assets/환경설정.png" />
          <span class="mainTxt">환경설정</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MainDisplay",
  setup() {
    const currentTime = ref<string | null>(null);
    let timer: number | NodeJS.Timeout | null = null;

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

    return { currentTime, goBack };
  }
});
</script>

<style>
@import "../css/index.css";
</style>
