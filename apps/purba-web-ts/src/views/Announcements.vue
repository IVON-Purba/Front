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
        <form action="#" method="post">
          <label for="searchInp">
            <input
              type="text"
              id="searchInp"
              name="searchInp"
              class="searchBar"
              placeholder="검색어를 입력해주세요"
              required
            />
          </label>
        </form>
        <img
          role="button"
          tabindex="0"
          alt=""
          @click="goBack"
          @keyup="goBack"
          class="backImg"
          src="../assets/bell.png"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "VueName", // 뷰 추가시 name을 뷰 이름에 맞게 변경해서 사용
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
