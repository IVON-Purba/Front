# FrontEnd 작성법

## 1. 해당 작업 공간을 모두 clone한 후, purba-web-ts로 들어갑니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/7b2ded73-0b22-46ab-8dd4-e5c02fce085d" width="640" height="360" />

## 2. purba-web-ts/src/components로 들어가 phoneTemplate.vue를 purba-web-ts/src/views에 복사하고 원하는 이름으로 바꿉니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/df80de33-4a67-4058-8123-81044a470cd4" width="640" height="360" />
<img src="https://github.com/IVON-Purba/Front/assets/127276008/4e1c76a3-498c-4f9c-9ab4-efd12d8d5e5b" width="640" height="360" />

## 3. 복사한 뷰를 열어서, 해당 내용을 수정하고 원하는 형태로 템플릿을 꾸밉니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/6e3c8cc0-89cc-48a7-802f-a9e1ba647dae" width="640" height="360" />

## 4. css 코드 삽입은 purba-web-ts/src/css/index.css를 열어서 css를 수정합니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/65211225-11bd-4e37-88e8-a5886428ab72" width="640" height="360" />

## 5. 수정한 뷰를 확인하기 위해서는 다음과 같은 과정이 필요합니다.
### 5-1. purba-web-ts/src/router/index.ts에 다음 내용을 추기합니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/4e96dd17-a5bc-45a1-8828-128b5534386a" width="640" height="360" />

import 뷰객체이름(임의로지정) from "../views/최초에 수정한 뷰이름.vue"

path: "/경로명(임의로지정)",
name: "뷰객체닉네임(임의로지정)",
component: 뷰객체이름(앞에서 정한이름)

추가.

### 5-2. purba-web-ts/src/App.vue에 다음 내용을 수정합니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/f94268a9-3e83-4ed0-8b06-efe16e125900" width="640" height="360" />

앞에서 지정해준 경로명으로 수정해줍니다.


## 6. 이제 추가한 뷰를 확인할 수 있습니다. 터미널을 열어 실행시킵니다.
<img src="https://github.com/IVON-Purba/Front/assets/127276008/a479cad5-d5c9-4fb7-abf0-e4cff845cf49" width="640" height="360" />
<img src="https://github.com/IVON-Purba/Front/assets/127276008/7581c1fe-0528-4204-856c-6b53082533c7" width="320" height="480" />

이때, 주의사항으로 cd 명령어를 통해 purba-web-ts폴더로 이동하고 yarn start를 해야합니다.
