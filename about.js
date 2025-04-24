gsap.to(".navbar", { opacity: 1, duration: 1.25 });
gsap.to(".navbar", { x: -500 });

gsap.to(".navbar", { x: 0, duration: 1.25 });

const big_box = document.querySelector(".navbar img");

const hoverTween = gsap.to(big_box, {
    scale: 2,
    duration: 0.25,
    ease: "power2.out",
    paused: true
});

big_box.addEventListener("mouseenter", () => hoverTween.play());
big_box.addEventListener("mouseleave", () => hoverTween.reverse());

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const player = document.querySelector(".record-player");

const animatePlayer = gsap.to(player, {
    y: -100,
    duration: 1,
    yoyo: true,
    ease: "power1.out",
    repeat: -1,
    rotation: "+=45"
});
