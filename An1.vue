<template>
    <div id="app" class="backgroundContainer">
      <div class="phoneContainer">
        <div class="status-bar">
          <p>{{ currentTime }}</p>
          <img alt="" id="battery" src="../assets/battery.png" />
        </div>
        <!-- 수정된 부분: 상단바 -->
        <div class="topBar">
          <!-- 공지사항 제목 -->
          <p class="pageTitle">만안구 보건소 독감 접종 안내</p>
        </div>
        <!-- 수정 종료 -->
  
        <!-- 공지사항 내용 -->
        <div class="noticeContent" style="margin-top: 20px;"> <!-- 위쪽 여백 추가 -->
          <p class="writtenDate">2024.04.20 작성</p> <!-- 작성일 추가 -->
          <h2 style="text-align: center;"><strong>독감 무료 예방접종 실시</strong></h2>
          <p><strong>일시:</strong> 2024년 4월 20일~27일</p>
          <p><strong>대상:</strong> 안양시에 거주중인 만 65세 이상 주민</p>
          <p><strong>운영 시간:</strong> 오전 9시~오후 6시</p>
          <p><strong>장소:</strong> 안양시 만안구 보건소</p>
          <button class="viewDetailsBtn">전문 보기</button>
        </div>
  
        <!-- 일정에 추가하기 버튼 -->
        <div class="buttonContainer">
          <button class="addToCalendarBtn">일정에 추가하기</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted, onUnmounted } from "vue";
  
  export default defineComponent({
    name: "An1",
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
    },
  });
  </script>
  
  <style>
  /* index.css 파일 import */
  @import "../css/index.css"; /* 추가됨 */
  
  /* 수정된 부분: 상단바 스타일 */
  .topBar {
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center;
    margin-top: 10px;
  }
  
  .pageTitle {
    font-size: 24px;
    font-weight: bold;
    margin-top: 7px;
    text-align: center;
  }
  /* 수정 종료 */
  
  /* 공지사항 내용 스타일 */
  .noticeContent {
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 7px;
    margin-bottom: 15px; /* 내용 아래 여백 추가 */
    position: relative; /* 부모 요소로부터 상대적 위치 설정 */
  }
  /* 작성일 스타일 */
  .writtenDate {
    position: absolute; /* 부모 요소를 기준으로 위치 설정 */
    top: -15px; /* 내용 위에 위치 */
    right: 10px; /* 부모 요소의 오른쪽에 위치 */
    color: #666; /* 회색으로 설정 */
    font-size: 14px; /* 작은 글꼴 크기 */
  }
  .noticeContent h2 {
    font-weight: bold;
    margin-bottom: 30px;
  }
  
  .noticeContent p {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .boldText {
    font-weight: bold;
  }
  
  /* 전문 보기 버튼 스타일 */
  .viewDetailsBtn {
    margin-top: 20px; 
    margin-right: 10px;
    padding: 8px 16px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* 일정에 추가하기 버튼 스타일 */
  .addToCalendarBtn {
    margin-top: 20px; /* 버튼과 내용 사이의 여백 추가 */
    padding: 12px 24px; /* 크기 조절 */
    border: none;
    background-color: #28a745; /* 배경색 변경 */
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* 버튼 컨테이너 스타일 */
  .buttonContainer {
    display: flex;
    justify-content: center;
  }
  </style>