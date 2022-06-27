let lastscroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastscroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastscroll = window.scrollY;
});


