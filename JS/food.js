document.addEventListener("DOMContentLoaded", () => {
    // Menu Toggle
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
        menuBtn.setAttribute("aria-expanded", isOpen);
    });

    navLinks.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    });

    // ScrollReveal Animations
    const scrollRevealOptions = {
        distance: "50px",
        origin: "bottom",
        duration: 1000,
    };

    ScrollReveal().reveal(".header_image img", { ...scrollRevealOptions, origin: "right" });
    ScrollReveal().reveal(".header_content h1", { ...scrollRevealOptions, delay: 500 });
    ScrollReveal().reveal(".header_content .section_description", { ...scrollRevealOptions, delay: 1000 });
    ScrollReveal().reveal(".explore_image img", { ...scrollRevealOptions, origin: "left" });
    ScrollReveal().reveal(".explore_content .section_header", { ...scrollRevealOptions, delay: 500 });
    ScrollReveal().reveal(".explore_content .section_description", { ...scrollRevealOptions, delay: 1000 });
    ScrollReveal().reveal(".explore_content .explore_btn", { ...scrollRevealOptions, delay: 1500 });
    ScrollReveal().reveal(".banner_card", { ...scrollRevealOptions, interval: 500 });
    ScrollReveal().reveal(".chef_image img", { ...scrollRevealOptions, origin: "right" });
    ScrollReveal().reveal(".chef_content .section_header", { ...scrollRevealOptions, delay: 500 });
    ScrollReveal().reveal(".chef_content .section_description", { ...scrollRevealOptions, delay: 1000 });
    ScrollReveal().reveal(".chef_list li", { ...scrollRevealOptions, delay: 1500, interval: 500 });

    // Swiper Initialization
    const swiper = new Swiper(".swiper-container", {
        loop: true,
        pagination: { el: ".swiper-pagination" },
    });

    // Contact Form Validation
    const contactForm = document.querySelector(".contact_form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (name && email && message) {
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            console.log("Form submitted with values:", { name, email, message });
            alert("Thank you for your message!");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Categories Button Navigation
    document.getElementById("categories-btn").addEventListener("click", () => {
        window.location.href = "../HTML/categories.html";
    });

    // Scroll to Top
    window.gototop = function () {
        console.log("Button clicked");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});
