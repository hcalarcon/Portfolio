export function animateOnScroll(
  selector = ".animate-on-scroll",
  threshold = 0.1
) {
  const elements = document.querySelectorAll(selector);
  console.log(elements);

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  elements.forEach((el) => observer.observe(el));
}
