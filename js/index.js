const animateCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const valueElement = counter.querySelector(".counter-value");
  let count = 0;
  const increment = target / 200;

  const updateCounter = () => {
    count += increment;
    if (count < target) {
      valueElement.innerText = Math.ceil(count);
      requestAnimationFrame(updateCounter);
    } else {
      valueElement.innerText = target;
    }
  };

  updateCounter();
};

document.querySelectorAll(".counter").forEach((counter) => {
  animateCounter(counter);
});
