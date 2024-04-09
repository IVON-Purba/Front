<template>
  <div id="app" class="backgroundContainer">
    <div class="phoneContainer centerAlign">
      <div class="status-bar">
        <p>{{ currentTime }}</p>
        <img alt="" id="battery" src="../assets/battery.png" />
      </div>
      <img alt="" class="logoPoorba" src="../assets/푸르바.png" />
      <h2 class="word3">전화번호</h2>
      <form action="#" method="post">
        <label for="phonenumber">
          <input
            type="text"
            name="username"
            id="phonenumber"
            class="inputBar"
            placeholder="전화번호를 입력해주세요"
            required
          />
        </label>
        <input
          type="submit"
          id="color1"
          class="longCLickBtn"
          value="로그인하기"
        />
      </form>
      <div class="bottomFirst">
        <h3 class="subTitleLeft">회원이 아니신가요?</h3>
        <router-link to="/cr">
          <input type="submit" class="longCLickBtn" value="회원가입하기" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  name: "FirstIn",
  setup() {
    const currentTime = ref<string | null>(null);
    let timer: number | NodeJS.Timeout | null = null;

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      currentTime.value = `${hours}:${minutes}`;
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

    return { currentTime };
  }
});
</script>

<style>
@import "../css/index.css";
</style>
