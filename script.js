let fft

let Particle = function (position) {
    this.position = position //setting position given to particle when its created
    this.speed = createVector(0, 1) //setting spped to 0 in x direction and 1 in y direction
    this.color = [random(0, 255), random(0, 255), random(0, 255)] //setting color to a random RGB color
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    noStroke()

    let mic = new p5.AudioIn()
    mic.start()

    fft = new p5.FFT()
    fft.setInput(mic)
}

function draw() {}

