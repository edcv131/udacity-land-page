const ul = document.querySelector("#navbar__list");
const navbar__links = document.querySelectorAll("a");

// When I put a new section, it automatically adds a link to it in the nav bar
const sections = document.querySelectorAll("section");
for (const i of sections) {
  ul.insertAdjacentHTML(
    "beforeend",
    `<li><a class="menu__link" href="">${i.dataset.nav}</a></li>`
  );
}

// When browsing in sections, it does automatic shading for the section in the navbar
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    let link;
    document.querySelectorAll("a").forEach((l) => {
      if (l.innerHTML === section.getAttribute("data-nav")) {
        link = l;
      }
    });
    //Find a value that works best, but 150 seems to be a good start.
    if (box.top <= 150 && box.bottom >= 150) {
      //apply active state on current section and corresponding Nav link
      link.classList.add("active__navBar");
      section.classList.add("your-active-class");
    } else {
      //Remove active state from other section and corresponding Nav link
      link.classList.remove("active__navBar");
      section.classList.remove("your-active-class");
    }
  }
}

window.addEventListener("scroll", makeActive);

// When I click on any section, it will automatically go to it
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    let box;
    for (const section of sections) {
      if (section.dataset.nav === a.textContent) {
        box = section;
      }
    }
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// When you point the mouse at an item in the navbar, it automatically highlights
document.querySelectorAll("a").forEach((a) => {
  a.addEventListener("mouseover", () => {
    a.classList.add("active__navBar");
  });
  a.addEventListener("mouseout", () => {
    a.classList.remove("active__navBar");
  });
});
