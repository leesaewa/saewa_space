document.addEventListener("DOMContentLoaded", () => {
  // cursor
  let cursor = document.querySelectorAll(".cursor");
  let cursorFirst = document.querySelector(".cursor__first");
  let cursorSecond = document.querySelector(".cursor__second");
  let linkCursor = document.querySelectorAll("a");

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

  // global nav
  const navBtn = document.querySelector(".hamburger-btn");
  const globalnav = document.querySelector(".global-nav");

  navBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!globalnav.classList.contains("global-nav--open")) {
      globalnav.classList.add("global-nav--open");
      navBtn.classList.add("hamburger-btn-open");
    } else {
      globalnav.classList.remove("global-nav--open");
      navBtn.classList.remove("hamburger-btn-open");
    }
  });

  //
});
