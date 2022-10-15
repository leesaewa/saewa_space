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
// scroll top
const topBtn = document.querySelector(".floating-nav__top");

// window가 스크롤 될 때 발생
window.addEventListener("scroll", () => {
  // header의 사이즈보다 스크롤한 값이 크거나 같을 때 실행
  if (window.scrollY >= headerHeight) {
    header.classList.add("fixed");
    topBtn.style.opacity = "1";
  } else {
    header.classList.remove("fixed");
    topBtn.style.opacity = "0";
  }
});

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

//
// dark mode
//
const darkTheme = document.querySelector(".floating-nav__mode");
const darkIcon = darkTheme.querySelector("i");
const toolTip = darkTheme.querySelector("p");
const modeSwitch = localStorage.getItem("modeSwitch"); // "modeSwitch" 아이템 값 불러오기

function darkThemeClick() {
  darkTheme.addEventListener("click", function () {
    console.log(darkIcon);
    if (!body.classList.contains("dark-mode")) {
      body.classList.add("dark-mode");
      darkIcon.innerText = "light_mode";
      toolTip.innerText = "light mode";
      localStorage.setItem("modeSwitch", "light_mode");
    } else if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      darkIcon.innerText = "dark_mode";
      toolTip.innerText = "dark mode";
      localStorage.setItem("modeSwitch", "dark_mode");
    }
  });
}
darkThemeClick();
//만약 modeSwitch가 dark_mode(테마는 light)라면 아이콘을 dark_mode(달)로 바꿈.
if (modeSwitch === "dark_mode") {
  body.classList.remove("dark-mode");
  darkIcon.innerText = "dark_mode";
  toolTip.innerText = "dark mode";
} else if (modeSwitch === "light_mode") {
  // modeSwitch가 light_mode(테마는 dark)라면 아이콘을 light_mode(해) 바꿈.
  body.classList.add("dark-mode");
  darkIcon.innerText = "light_mode";
  toolTip.innerText = "light mode";
}
