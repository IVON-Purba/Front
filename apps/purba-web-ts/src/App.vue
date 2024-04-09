<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppView"
});
</script>

<template>
  <div>
    <RouterLink to="/"><h2 id="ProjectName">프로젝트 시안</h2></RouterLink>
  </div>
  <router-view></router-view>
</template>

<style>
@import "./css/index.css";
</style>
