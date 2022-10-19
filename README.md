# 📌 자신이 원하는 사이트 레이아웃 클론

- [원본 웹사이트](https://www.cjolivenetworks.co.kr/)
- [클론 웹사이트](https://ddoyun.github.io/cjolivenetworks-clone/)

## 🧷 사용 기술
- HTML/CSS
- JavaScript

## 주요 구현 사항
___ 
### 스크롤 시, 메뉴 show / hide 기능  
- JavaScript `headerMoving()` 와 `window.scroll`사용
- 작성 스크립트: main.js

### 스크롤 시, 텍스트 on 기능
- JavaScript `ScrollMagic.js` 사용
- 작성 스크립트: main.js

### 화면 배경 전환 기능
- JavaScript `headerMoving()` 와 `window.scroll`사용
- 작성 스크립트: main.js

## 폴더 구조
___

```
.root
├── index.html
├── js
│   └── main.js
├── fonts
│   └── font
├── css
│   ├── aos.css
│   ├── font.css
│   └── main.css
├── image
├── movie
├── favicon.png
└──README.md
```

## 아쉬웠던 점
___
### flex
flex를 이용하여 레이아웃 정렬 시, 익숙하지 않아 구조적으로 효율적인 코드 구성이 힘들었다.

### SVG 이벤트
원본 사이트에서 SVG가 이벤트를 보고 적용해 보았는데, 어떤식으로 적용할 지 헤매이다가 aos storok 이벤트를
이용하여 적용했다. Path 이벤트는 원본 사이트를 참고 하였지만, 처음 적용해보는 storok 모션이라 어려움은 있었지만
하나 새로 배운것 같아서 기억에 남는다.

### swiper 타이머 기능
이 기능은 적용하다가 시간이 부족하여 중간에 넘어간 기능인데, 배너 타이머 시간에 맞춰서 프로그래스 바가 차는
모션이 동작하는 기능이다. 과제 제출 후 시간이 된다면 보완하고 싶다.

### 그 외 미적용 기능
나머지도 역시 시간이 부족해서 적용을 못했는데, 예상치 못한 부분에서 시간이 걸려서 적용 못 한 기능이 몇개 있다.
  - 스크롤 시, 동영상 서서히 보이는 기능
  - hover 및 click 시 팝업 창이 보이는 기능 (이 부분은 어려운 기능은 아니기 때문에 제외했다.) 

## 구현 목표
___

### flex 레이아웃 적용
익숙해지기 위해서 해당 사이트를 정했었다. 하지만 생각보다는 많이 안들어가고 오히려
자바스크립트 기능이 많아서 좀 당황했지만, 어느정도 익힌것 같다 이제 세부적으로 사용하는 스킬을 기르고 싶다.

### GSAP / ScrollMagic 라이브러리 적용
크게 만지진 않았지만 조금씩 써보아서 좋았고, 아무래도 자주 쓰이는 라이브러리이기 때문에 좀 더 익숙하게
사용하고 싶다. 아직 부족하게 적용된거 같아서 아쉽다.
