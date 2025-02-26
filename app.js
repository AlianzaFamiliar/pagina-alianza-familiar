
function redirigir(select) {
    console.log("funciona")
    let url = select.value;
    
    if (url) {
        window.top.location.href = url;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-items");

    menuToggle.addEventListener("click", function () {
        
        navLinks.classList.toggle("nav-active");
    });
});

