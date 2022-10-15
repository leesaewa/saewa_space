let yOffset = 0; // window.pageYOffset 대신 쓸 변수
let prevScrollHeight = 0; // 현재 스크롤 위치보다 이전에 위치한 스크롤 섹션의 스크롤 높이값
let currentView = 0; // 현재 활성화된 화면
let newView = false; // 새로운 화면이 시작되면 true

//
const viewInfo = [
  {
    // 0
    type: "sticky",
    heightNum: 5,
    scrollHeight: 0,
    objs: { container: document.querySelector("#scrollSection") },
  },
];

// scroll height
const setLayout = () => {
  for (let i = 0; i < viewInfo.length; i++) {
    if (viewInfo[i].type === "sticky") {
      viewInfo[i].scrollHeight = viewInfo[i].heightNum * window.innerHeight;
      viewInfo[
        i
      ].objs.container.style.height = `${viewInfo[i].objs.container.offsetHeight}`;
    } else if ((viewInfo[i].type = "normal")) {
      viewInfo[i].scrollHeight = viewInfo[i].objs.container.offsetHeight;
    }
    viewInfo[i].objs.container.style.height = `${viewInfo[i].scrollHeight}px`;
  }

  yOffset = window.pageYOffset;
  let totalScrollHeight = 0;

  for (let i = 0; viewInfo.length; i++) {
    totalScrollHeight += viewInfo[i].scrollHeight;
    if (totalScrollHeight >= yOffset) {
      currentView = i;
      break;
    }
  }
};

//
//
window.addEventListener("load", () => {
  setLayout();
});
