<script src="https://unpkg.com/split-type"></script>

<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js"></script>
<script>
const split = new SplitType(".accent-word", {
    types: "chars"
});

gsap.from(split.chars, {
    y: 70,
    opacity: 0,
    rotate: 8,
    stagger: 0.05,
    duration: 1,
    ease: "power4.out",
    delay: 1
});
