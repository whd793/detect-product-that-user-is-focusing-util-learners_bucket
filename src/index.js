const wrapper = document.querySelector(".wrapper");
const blocks = document.querySelectorAll(".block");
let focus = {};

const detect = () => {
  // focus = {};
  blocks.forEach((b) => {
    const blockDimension = b.getBoundingClientRect();

    if (
      blockDimension.left >= 0 &&
      blockDimension.right <= window.innerWidth &&
      blockDimension.top >= 0 &&
      blockDimension.bottom <= window.innerHeight
    ) {
      if (b.innerHTML in focus) {
        focus[b.innerHTML] += 1;
      } else {
        focus[b.innerHTML] = 1;
      }
    }

    // console.log(focus);
  });

  console.log(focus);
};

const debounce = (fn) => {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, 1000);
  };
};
window.addEventListener("scroll", debounce(detect));
