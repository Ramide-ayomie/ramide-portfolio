const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navbar.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    navbar.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuToggle.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        });
    });
}