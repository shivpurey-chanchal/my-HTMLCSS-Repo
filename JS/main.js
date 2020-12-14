// -----------------------navbar----------------
const navMenu = document.getElementById("nav-menu");
let toggleMenu = document.getElementById("nav-toggle");
let closeMenu = document.getElementById("nav-close");

//SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
//REMOVE MENU
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//SCROLL SECTION ACTIVE LINK
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const secionHeight = current.offsetHeight;
    const secionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    if (scrollY > secionTop && scrollY <= secionTop + secionHeight) {
      document
        .querySelector("nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector("nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
