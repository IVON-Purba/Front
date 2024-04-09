# FrontEnd 작성법

## 1. 해당 작업 공간을 모두 clone한 후, purba-web-ts로 들어갑니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/41d0046e-9d97-4747-b74b-5724f7196bfb" width="640" height="360" />

## 2. purba-web-ts/src/components로 들어가 phoneTemplate.vue를 purba-web-ts/src/views에 복사하고 원하는 이름으로 바꿉니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/b77942dc-49ee-4f16-86e7-72d825da2387" width="640" height="360" />
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/ffa70e60-51c5-4d1d-b6fb-30be0d570c84" width="640" height="360" />

## 3. 복사한 뷰를 열어서, 해당 내용을 수정하고 원하는 형태로 템플릿을 꾸밉니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/c3ce96ae-3a4a-4a1f-a64c-8f75efd0030c" width="640" height="360" />

## 4. css 코드 삽입은 purba-web-ts/src/css/index.css를 열어서 css를 수정합니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/19606ceb-931a-46d9-bd79-58dc3b8a3517" width="640" height="360" />

## 5. 수정한 뷰를 확인하기 위해서는 다음과 같은 과정이 필요합니다.
### 5-1. purba-web-ts/src/router/index.ts에 다음 내용을 추기합니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/2f03be1c-2b15-4fe3-bc45-957f74fc97fa" width="640" height="360" />

import 뷰객체이름(임의로지정) from "../views/최초에 수정한 뷰이름.vue"

path: "/경로명(임의로지정)",
name: "뷰객체닉네임(임의로지정)",
component: 뷰객체이름(앞에서 정한이름)

추가.

### 5-2. purba-web-ts/src/App.vue에 다음 내용을 수정합니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/37d0050a-b88d-4dcc-9927-eecd30225068" width="640" height="360" />

앞에서 지정해준 경로명으로 수정해줍니다.


## 6. 이제 추가한 뷰를 확인할 수 있습니다. 터미널을 열어 실행시킵니다.
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/4e235a52-c057-4074-9c8a-017a0b688215" width="640" height="360" />
<img src="https://github.com/IVON-Purba/FrontEnd/assets/127276008/c3300ed9-8f2e-41af-bb1d-653900024984" width="320" height="480" />

이때, 주의사항으로 cd 명령어를 통해 purba-web-ts폴더로 이동하고 yarn start를 해야합니다.
