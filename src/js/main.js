const body = document.querySelector("body");
let winH = window.innerHeight;

// cursor
const cursor = document.querySelectorAll(".cursor");
const cursorFirst = document.querySelector(".cursor__first");
const cursorSecond = document.querySelector(".cursor__second");
const linkCursor = document.querySelectorAll("a");

cursor.forEach((cursor) => {
  window.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
});

linkCursor.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursorFirst.classList.add("cursor__link");
    cursorSecond.classList.add("cursor__link");
  });

  link.addEventListener("mouseleave", () => {
    cursorFirst.classList.remove("cursor__link");
    cursorSecond.classList.remove("cursor__link");
  });
});

// scroll header fixed
const header = document.querySelector("header");
const headerHeight = header.offsetHeight;

// window가 스크롤 될 때 발생
window.onscroll = () => {
  let scrollY = window.scrollY;
  // header의 사이즈보다 스크롤한 값이 크거나 같을 때 실행
  if (scrollY >= headerHeight) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

// global nav
const navBtn = document.querySelector(".hamburger-btn");
const globalnav = document.querySelector(".global-nav");

navBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (!globalnav.classList.contains("global-nav--open")) {
    globalnav.classList.add("global-nav--open");
    navBtn.classList.add("hamburger-btn-open");
    body.style.overflowY = "hidden";
  } else {
    globalnav.classList.remove("global-nav--open");
    navBtn.classList.remove("hamburger-btn-open");
    body.style.overflowY = "auto";
  }
});

//
// animation effects
//

const animationEff = () => {
  let effects;

  const initAni = () => {
    effects = document.querySelectorAll(".eff");
    eventHandler();
  };

  const eventHandler = () => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("load", checkScroll);
    window.addEventListener("resize", initAni);
  };

  const checkScroll = () => {
    for (let i = 0; i < effects.length; i++) {
      // viewTop이 스크롤에 의해 유동적으로 변함.
      let viewTop = effects[i].getBoundingClientRect().top;
      // console.log(viewTop);
      if (winH > viewTop) {
        effects[i].classList.add("fadeIn");
      }
    }
  };

  return initAni();
};
animationEff();
