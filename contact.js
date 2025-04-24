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

const phone_info = document.querySelector(".phone-info");
const mail_info = document.querySelector(".mail-info");

const phoneHover = gsap.to(phone_info, {
    scale: 1.5,
    duration: 0.25,
    ease: "power2.out",
    paused: true
});

phone_info.addEventListener("mouseenter", () => phoneHover.play());
phone_info.addEventListener("mouseleave", () => phoneHover.reverse());

const mailHover = gsap.to(mail_info, {
    scale: 1.5,
    duration: 0.25,
    ease: "power2.out",
    paused: true
});

mail_info.addEventListener("mouseenter", () => mailHover.play());
mail_info.addEventListener("mouseleave", () => mailHover.reverse());

const phone = document.querySelector(".phone-image");

const ring = gsap.timeline({ repeat: -1, repeatDelay: 0.875});

ring.to(phone, {
    rotate: 15,
    duration: 0.1,
    yoyo: true,
    repeat: 5, // 5 wiggles (one ring effect)
    ease: "power2.inOut",
    transformOrigin: "center center"
});
