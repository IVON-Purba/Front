<template>
  <div id="app" class="backgroundContainer">
    <div class="phoneContainer centerAlign">
      <div class="status-bar">
        <p>{{ currentTime }}</p>
        <img alt="" id="battery" src="../assets/battery.png" />
      </div>
      <div class="withBack">
        <img alt="" class="logoPoorba" src="../assets/푸르바.png" />
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

      <h3 class="subTitleLeft">이름</h3>
      <form action="#" method="post">
        <label for="uname">
          <input
            type="text"
            id="uname"
            name="username"
            class="inputBar"
            placeholder="이름을 입력해주세요"
            required
          />
        </label>
      </form>
      <h3 class="subTitleLeft">전화번호</h3>
      <form action="#" method="post">
        <label for="phonenumber">
          <input
            type="text"
            id="phonenumber"
            name="usernumber"
            class="inputBar"
            placeholder="전화번호를 입력해주세요"
            required
          />
        </label>
      </form>

      <div class="authContainer">
        <h2>인증번호</h2>
        <router-link to="/main"><button>인증번호 받기</button></router-link>
      </div>
      <form action="#" method="post">
        <label for="authnumber">
          <input
            type="text"
            id="authnumber"
            name="authnumber"
            class="inputBar"
            placeholder="인증번호를 입력해주세요"
            required
          />
        </label>
      </form>
      <input
        type="submit"
        id="color2"
        class="longCLickBtn"
        value="회원가입하기"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "CreateAccount",
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
