const menuButton = document.querySelector(".menu-button");
const mobileMenuItems = document.querySelector(".mobile-menu-items"); 

menuButton.addEventListener("click", () => {
    mobileMenuItems.classList.toggle("active");
})