const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.14,
  }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const currentPage = document.body.dataset.page;

if (currentPage) {
  document.querySelectorAll("[data-nav]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === currentPage);
  });

  document.querySelectorAll(".mobile-quickbar a[data-nav]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.nav === currentPage);
  });
}