const navIconMobile = document.querySelector(".header__nav-icon--mobile");
const navListMobile = document.querySelector(".header__nav-list--mobile");

navIconMobile.addEventListener("click",menuOpen);
function menuOpen(){
    navIconMobile.classList.toggle("fa-minus");
    if (navIconMobile.classList.contains("fa-minus")) {
        navListMobile.classList.add("visible");
      } else {
        navListMobile.classList.remove("visible");
      }
}
document.addEventListener("click", function (e) {
    if (!navListMobile.contains(e.target) && !navIconMobile.contains(e.target)) {
    navIconMobile.classList.remove("fa-minus")
      navListMobile.classList.remove("visible");
    }
  });