// ======================================================
// GLOBAL VARIABLES
// ======================================================
let scaleFactor = 1; // Tracks how much the YES button has grown

// ======================================================
// MAIN ACTION: ACCEPT PROPOSAL
// Triggered when the YES button is clicked
// ======================================================
function acceptProposal() {
    const sound = document.getElementById("yesSound");
    sound.currentTime = 0; // Restart sound if clicked again
    sound.play();

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
    const yesBtn = document.getElementById("yesBtn"); 
    const container = document.querySelector(".container"); // CRITICAL: Get the card container

    // MAKE THE YES BUTTON BIGGER
    scaleFactor += 0.2; // Increase size by 20% each time
    yesBtn.style.transform = `scale(${scaleFactor})`;

    /* --------------------------------------------------
       Calculate safe movement boundaries INSIDE THE CARD
       -------------------------------------------------- */
    // Get the dimensions of the card
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // logic: Card Width - Button Width = Safe Area
    const maxWidth = containerRect.width - btnRect.width; 
    const maxHeight = containerRect.height - btnRect.height;

    /* --------------------------------------------------
       Generate random positions within the card
       -------------------------------------------------- */
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    /* --------------------------------------------------
       Apply new position to the NO button
       -------------------------------------------------- */
    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}