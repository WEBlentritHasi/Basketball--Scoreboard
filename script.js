

let homePoints = document.getElementById("home")

let guestPoints = document.getElementById("guest")



function homeAdd1() {
    let currentHomePoints = parseInt(homePoints.textContent);
    currentHomePoints += 1;
    homePoints.textContent = currentHomePoints;
}

function homeAdd2() {
    let currentHomePoints = parseInt(homePoints.textContent);
    currentHomePoints += 2;
    homePoints.textContent = currentHomePoints;
}

function homeAdd3() {
    let currentHomePoints = parseInt(homePoints.textContent);
    currentHomePoints += 3;
    homePoints.textContent = currentHomePoints;
}
function guestAdd1() {
    let currentGuestPoints = parseInt(guestPoints.textContent);
    currentGuestPoints += 1;
    guestPoints.textContent = currentGuestPoints;
}

function guestAdd2() {
    let currentGuestPoints = parseInt(guestPoints.textContent);
    currentGuestPoints += 2;
    guestPoints.textContent = currentGuestPoints;
}

function guestAdd3() {
    let currentGuestPoints = parseInt(guestPoints.textContent);
    currentGuestPoints += 3;
    guestPoints.textContent = currentGuestPoints;
}



function endGame() {
    homePoints.textContent = 0; // Reset home points
    guestPoints.textContent = 0; // Reset guest points
}

function homeResetGame() {
    homePoints.textContent = 0; // Reset home points
}

function guestResetGame() {
    guestPoints.textContent = 0;
}