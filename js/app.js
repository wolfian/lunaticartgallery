const modal = document.querySelector(".modal");
const images = document.querySelectorAll(".gallery img");
const full = document.querySelector(".full-img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.classList.add("open");
    full.classList.add("open");

    const image_src = image.getAttribute("src");
    console.log(image_src);
    full.src = `${image_src}`;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    full.classList.remove("open");
  }
});

// animation

$(document).ready(function () {
  //Preloader
  preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $(".loader");
    preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
});

var t1 = gsap.timeline({ delay: 0.5 });
var t2 = gsap.timeline({ delay: 0.5 });
var t3 = gsap.timeline({ delay: 2 });

gsap.fromTo(
  ".slider",
  { xPercent: -100, yPercent: 0 },
  { duration: 2, xPercent: 100, yPercent: 0 }
);

t1.fromTo(
  ".container2",
  { xPercent: 100, yPercent: 0 },
  { duration: 1.5, xPercent: 0, yPercent: 0 }
);

t2.fromTo(
  ".nav",
  { xPercent: 100, yPercent: 0 },
  { duration: 1.5, xPercent: 0, yPercent: 0 }
);

t3.fromTo(
  ".footer",
  { xPercent: 0, yPercent: 100 },
  { duration: 1, xPercent: 0, yPercent: 0 }
);
