const music = document.getElementById("myMusic");
const playButton = document.getElementById("playButton");
const record = document.getElementById("record");
const heartContainer = document.getElementById("heartContainer");

let isPlaying = false;
let heartInterval;

playButton.addEventListener("click", async function() {

    if (!isPlaying) {

        try {
            await music.play();

            isPlaying = true;

            playButton.innerHTML = "Ⅱ";
            record.classList.add("playing");

            // Hati bermunculan
            createHeartExplosion();

            // Hati terus mengambang selama musik diputar
            heartInterval = setInterval(function() {
                for (let i = 0; i < 3; i++) {
                    createHeart();
                }
            }, 350);

        } catch (error) {
            alert("Periksa kembali file musik kamu!");
        }

    } else {

        music.pause();
        isPlaying = false;

        playButton.innerHTML = "▶";
        record.classList.remove("playing");

        clearInterval(heartInterval);
    }

});

// Ledakan awal 180 hati
function createHeartExplosion() {

    for (let i = 0; i < 180; i++) {

        setTimeout(function() {
            createHeart();
        }, i * 15);

    }

}

// Membuat satu hati
function createHeart() {

    const heart = document.createElement("span");

    heart.className = "music-heart";

    const symbols = ["♡", "♥", "💕", "💗"];

    heart.innerHTML = symbols[
        Math.floor(Math.random() * symbols.length)
    ];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.setProperty(
        "--duration",
        (3 + Math.random() * 4) + "s"
    );

    heartContainer.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 7500);

}
