
const gift = document.getElementById("gift");
const openButton = document.getElementById("openGift");

const intro = document.getElementById("intro");
const celebration = document.getElementById("celebration");

const particleContainer = document.getElementById("particles");

let celebrationStarted = false;


// OPEN THE GIFT
openButton.addEventListener("click", openGift);

function openGift() {

    if (celebrationStarted) return;

    celebrationStarted = true;

    gift.classList.add("opened");

    openButton.disabled = true;

    openButton.textContent = "YOUR SURPRISE IS OPENING...";

    // Allow the 3D gift animation to play
    setTimeout(() => {

        intro.classList.add("hidden");

        celebration.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startParticles();

        createPetals(35);

    }, 1200);

}


// GOLDEN FLOATING PARTICLES
function startParticles() {

    const symbols = ["✦", "✧", "•", "✨"];

    setInterval(() => {

        const particle = document.createElement("span");

        particle.className = "particle";

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            (50 + Math.random() * 50) + "vh";

        particle.style.fontSize =
            (10 + Math.random() * 15) + "px";

        particle.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);

    }, 350);

}


// FALLING ROSE PETALS
function createPetals(amount) {

    const petals = ["🌸", "🌹", "✿"];

    for (let i = 0; i < amount; i++) {

        const petal = document.createElement("span");

        petal.className = "petal";

        petal.textContent =
            petals[Math.floor(Math.random() * petals.length)];

        petal.style.left =
            Math.random() * 100 + "vw";

        petal.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        petal.style.animationDelay =
            Math.random() * 4 + "s";

        petal.style.fontSize =
            (14 + Math.random() * 15) + "px";

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 12000);

    }

}


// SCROLL TO THE CAKE
document.getElementById("scrollDown")
    .addEventListener("click", () => {

        document.querySelector(".cake-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


// CELEBRATE AGAIN
document.getElementById("celebrateAgain")
    .addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        createPetals(50);

        launchConfetti();

    });


// CONFETTI CELEBRATION
function launchConfetti() {

    const colors = [
        "#d6b16b",
        "#e7a0bd",
        "#ffffff",
        "#f8e6b8"
    ];

    for (let i = 0; i < 90; i++) {

        const piece = document.createElement("span");

        piece.className = "particle";

        piece.textContent = "✦";

        piece.style.position = "fixed";

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top = "-20px";

        piece.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.fontSize =
            (10 + Math.random() * 18) + "px";

        piece.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        piece.style.animationName = "particleRise";

        particleContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

}
const music = document.getElementById("birthdayMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {

    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "♫ Pause Music";
        } catch (error) {
            musicButton.textContent = "♫ Try Again";
        }
    } else {
        music.pause();
        musicButton.textContent = "♫ Play Music";
    }

});