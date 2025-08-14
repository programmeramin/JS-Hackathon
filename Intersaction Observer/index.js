const circle = document.getElementById("circle");

const observer = new IntersectionObserver(
  (data) => {
    data.forEach((itme) => {
      if (itme.isIntersecting) {
        console.log(`${itme.target} is visible`);
      } else {
        console.log(`${itme.target} is not visible`);
      }
    });
  },
  {
    threshold: 1,
  }
);

observer.observe(circle);
