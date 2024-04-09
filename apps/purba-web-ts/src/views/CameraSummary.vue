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
      <h2 class="word1">내용 추출 완료!</h2>
      <div class="infDiv">
        <p class="pre-wrap">{{ detail1 }}</p>
        <p class="pre-wrap">{{ detail2 }}</p>
      </div>
      <div class="buttonGroup1">
        <button class="shortBtn1">+ 확대</button>
        <button class="shortBtn1">- 축소</button>
      </div>
      <button class="longBtn1">전체 내용 확인</button>
      <button class="longBtn1">일정 추가</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CameraSummary", // 뷰 추가시 name을 뷰 이름에 맞게 변경해서 사용
  setup() {
    const currentTime = ref<string | null>(null);
    let timer: number | NodeJS.Timeout | null = null;
    const detail1 = ref("납기 전 금액\n129,870원\n2023. 1. 2. 까지");
    const detail2 = ref("납기 후 금액\n133,750원\n2023. 1. 31. 까지");

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

    return { currentTime, goBack, detail1, detail2 };
  }
});
</script>

<style>
@import "../css/index.css";
</style>
