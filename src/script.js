// ======================================================
// MAIN ACTION: ACCEPT PROPOSAL
// Triggered when the YES button is clicked
// ======================================================
function acceptProposal() {

    /* --------------------------------------------------
       STEP 1: Update the message and hide the buttons
       -------------------------------------------------- */
    document.getElementById("question").innerHTML =
        "Yay! I knew you'd say yes! ❤️";
    document.querySelector(".button-container").style.display = "none";

    /* --------------------------------------------------
       STEP 2: Change the background to a happier color
       -------------------------------------------------- */
    document.body.style.backgroundColor = "#ffc1cc";

    /* --------------------------------------------------
       STEP 3: CONFETTI CELEBRATION 🎉
       Runs for a limited duration
       -------------------------------------------------- */
    var duration = 2 * 1000;           // Confetti duration (2 seconds)
    var end = Date.now() + duration;   // Time when confetti should stop

    // Recursive animation loop
    (function frame() {

        /* Launch confetti from the LEFT side */
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: [
                '#ff0000', '#ffa500', '#ffff00',
                '#008000', '#0000ff', '#4b0082', '#ee82ee'
            ]
        });

        /* Launch confetti from the RIGHT side */
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: [
                '#ff0000', '#ffa500', '#ffff00',
                '#008000', '#0000ff', '#4b0082', '#ee82ee'
            ]
        });

        /* Continue animation until time expires */
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// ======================================================
// NO BUTTON MOVEMENT
// Makes the NO button dodge the cursor
// ======================================================
function moveButton() {
    const noBtn = document.getElementById("noBtn");

    /* --------------------------------------------------
       Calculate safe movement boundaries
       -------------------------------------------------- */
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 20;
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 20;

    /* --------------------------------------------------
       Generate random screen positions
       -------------------------------------------------- */
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    /* --------------------------------------------------
       Apply new position to the NO button
       -------------------------------------------------- */
    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    /* Ensure button keeps its natural size */
    noBtn.style.width = "auto";
}
