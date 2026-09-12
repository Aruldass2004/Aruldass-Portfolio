const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.style.color = "");
      const active = document.querySelector(`nav a[href="#${entry.target.id}"]`);
      if (active) active.style.color = "var(--accent)";
    }
  });
}, {rootMargin: "-35% 0px -55% 0px"});
sections.forEach(section => observer.observe(section));
