// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// ======================
// Hero Animations
// ======================

gsap.from("nav", {
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from(".profile", {
    scale: 0,
    opacity: 0,
    duration: 1,
    delay: 0.3
});

gsap.from(".hero h1", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from(".hero h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 0.8
});

gsap.from(".hero p", {
    y: 100,
    opacity: 0,
    duration: 1,
    delay: 1
});

gsap.from(".hero button", {
    scale: 0,
    opacity: 0,
    duration: 0.8,
    delay: 1.2
});

// ======================
// About
// ======================

gsap.from(".about-card", {
    scrollTrigger: ".about-card",
    y: 80,
    opacity: 0,
    duration: 1
});

gsap.from(".box", {
    scrollTrigger: ".stats",
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// ======================
// Skills
// ======================

gsap.from(".skill-card", {
    scrollTrigger: ".skills",
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15
});

// ======================
// Projects
// ======================

gsap.from(".project-card", {
    scrollTrigger: ".projects",
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// ======================
// Certificates
// ======================

gsap.from(".certificate-card", {
    scrollTrigger: ".certificates",
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2
});

// ======================
// Contact
// ======================

gsap.from(".contact", {
    scrollTrigger: ".contact",
    y: 100,
    opacity: 0,
    duration: 1
});

// ======================
// Button Hover Animation
// ======================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        gsap.to(button, {
            scale: 1.08,
            duration: 0.2
        });

    });

    button.addEventListener("mouseleave", () => {

        gsap.to(button, {
            scale: 1,
            duration: 0.2
        });

    });

});

// ======================
// Navbar Background
// ======================

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,8,22,0.9)";

    } else {

        nav.style.background = "rgba(255,255,255,0.08)";

    }

});

// ======================
// Smooth Scroll
// ======================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({

            behavior: 'smooth'

        });

    });

});

console.log("Portfolio Loaded Successfully 🚀");
// Project Button Click Animation

document.querySelectorAll(".buttons button").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "scale(1)";

        }, 150);

    });

});
