// src/script.js
function acceptProposal() {
    // 1. Change the text and hide buttons
    document.getElementById("question").innerHTML = "Yay! I knew you'd say yes! ❤️";
    document.querySelector(".button-container").style.display = "none";
    
    // 2. Change background to a happy pink
    document.body.style.backgroundColor = "#ffc1cc";
    
    // 3. LAUNCH CONFETTI! 
    // We launch it for 3 seconds
    var duration = 2 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        // Launch a few confetti from the left edge
        confetti({
            particleCount: 7,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
        });
        
        // Launch a few confetti from the right edge
        confetti({
            particleCount: 7,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
        });

        // Keep firing until time is up
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

function moveButton() {
    const noBtn = document.getElementById("noBtn");
    
    // Get the window width and height (minus a little margin for safety)
    const maxWidth = window.innerWidth - noBtn.offsetWidth - 20; // 20px buffer
    const maxHeight = window.innerHeight - noBtn.offsetHeight - 20;

    // Generate random positions
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    // Apply new position
    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noBtn.style.width = "auto";
}