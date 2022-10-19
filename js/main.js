/**
 * 라이브러리
 */
AOS.init();
const controller = new ScrollMagic.Controller();

/**
 * 헤드 & TOP버튼 이벤트
 */
const header = document.querySelector("header");
const toTopEl = document.querySelector('#top');

function headerMoving(direction) {
  if (direction === 'up') {
    header.className = 'show';
  } else if (direction === 'down') {
    header.className = 'hide';
  } else if (direction === 'root') {
    header.className = 'root';
  }
};

// 스크롤시 이벤트
let prevScrollTop = 0;
document.addEventListener("scroll", function () {
  let nextScrollTop = window.pageYOffset;  // pageYOffset 스크롤 방향 판독
  if (nextScrollTop == 0) {
    headerMoving('root');
  } else if (nextScrollTop > prevScrollTop) {
    headerMoving('down');
  } else if (nextScrollTop < prevScrollTop) {
    headerMoving('up');
  }
  prevScrollTop = nextScrollTop;

  if (window.scrollY > 500) {
    gsap.to(toTopEl, .2, {  // 탑버튼 보이기
      opacity: 1
    });
  } else {
    gsap.to(toTopEl, .2, {  // 탑버튼 숨기기
      opacity: 0
    });
  }
});

// 탑버튼 스크롤 이벤트
toTopEl.addEventListener('click', function () {
  gsap.to(window, .5, {
    scrollTo: 0
  });
});

// 로드시 이벤트
if (window.scrollY === 0) {
  header.classList.add('root');
} else if (window.scrollY > 0) {
  header.classList.add('show');
}

/**
 * 슬라이드 Swiper
 */
const mySwiper = new Swiper('.visual .swiper-container', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.visual .swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return '<span class="current-num">' + current + '</span> <span class="line">|</span> <span class="total-num">' + total + '</span>';
    }
  }
});

const slider = document.querySelector('.visual-slider__inner');
const visual = document.querySelector('.visual');
const slideBtn = document.querySelector('.btn-control');
const durationNum = 4000;

slideBtn.addEventListener('click', function () {
  if (slideBtn.classList.contains('is-pause')) {
    slideBtn.classList.remove('is-pause');
    mySwiper.autoplay.start();
  } else {
    slideBtn.classList.add('is-pause');
    mySwiper.autoplay.stop();
  }
});

/**
 * 구간 진입 이벤트
 */
const spyEls = document.querySelectorAll('.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: 1
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
});

function scrollBackground(productEl) {
  new ScrollMagic
    .Scene({
      triggerElement: productEl,
      triggerHook: 0
    })
    .setClassToggle(productEl, 'active')
    .addTo(new ScrollMagic.Controller())
};
scrollBackground('.white-bg')

function topFixd(topFixdEl, topEls) {
  new ScrollMagic
    .Scene({
      triggerElement: topFixdEl,
      triggerHook: 9
    })
    .setClassToggle(topEls, 'fixed')
    .addTo(new ScrollMagic.Controller())
};
const topEls = document.querySelectorAll('#top')
topFixd('.footerfix', topEls)