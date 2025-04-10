document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute("data-src");
          img.removeAttribute("data-src");
          observer.unobserve(img); // дивимось чи ми дивимось на картинки
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  images.forEach((img) => observer.observe(img));

  document.getElementById("loadImages").addEventListener("click", () => {
    images.forEach((img) => {
      img.src = img.getAttribute("data-src");
      img.removeAttribute("data-src"); // при натисканні кнопки завантажуємо картинки
    });
  });
});
