const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
const slider = document.querySelector(".slider input");

let screen, stars, params = {speed: 2, number: 300, extinction: 4};

setupStars();
updateStars();

// update stars on resize to keep the thing centered
window.onresize = function () {
    setupStars();
};

// star constructor
function Star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * canvas.width;

    this.move = function () {
        this.z -= params.speed;
        if (this.z <= 0) {
            this.z = canvas.width;
        }
    };

    this.show = function () {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (canvas.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (canvas.width / this.z);
        y = y + screen.c[1];
        rad = canvas.width / this.z;
        opacity = (rad > params.extinction) ? 1.5 * (2 - rad / params.extinction) : 1;

        ctx.beginPath();
        ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
        ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fill();
    }
}

// setup <canvas>, create all the starts
function setupStars() {
    screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [window.innerWidth * 0.5, window.innerHeight * 0.5]
    };
    window.cancelAnimationFrame(updateStars);
    canvas.width = screen.w;
    canvas.height = screen.h;
    stars = [];
    for (let i = 0; i < params.number; i++) {
        stars[i] = new Star();
    }
}

function updateStars() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    stars.forEach(function (s) {
        s.show();
        s.move();
    });
    window.requestAnimationFrame(updateStars);
}