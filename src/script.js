let miSvg;
let numSounds = 10;
let sonidos = [];
let audio;
let trigger = false;
let miOff = 0;

function preload() {
    miSvg = loadImage("../assets/sound.svg");
    audio = loadSound("../assets/voz.mp3")
    audio.playMode('restart')
}

function setup() {
    let cnv = createCanvas(windowWidth * 0.92, windowHeight*0.6)
    cnv.parent('jumbo-canvas')

    for (let i = 0; i < numSounds; i++) {
        let x = random(width - 140)
        let y = random(height)
        miOff += 10;
        let ancho = 140
        let largo = 20
        let s = new Sonido(x, y, ancho, largo,miOff)
        sonidos.push(s)
    }
}

function mousePressed() {
    for (let i = 0; i < sonidos.length; i++) {
        sonidos[i].clicked(mouseX, mouseY)
    }
}

function draw() {
    clear()
    for (let i = 0; i < sonidos.length; i++) {
        sonidos[i].display()
    }
}

class Sonido {
    constructor(x, y, largo, ancho,off) {
        this.x = x;
        this.y = y;
        this.largo = largo;
        this.ancho = ancho;
    }

    clicked(px, py) {
        if ((px > this.x && px < this.x + this.largo) && (py > this.y && py < this.y + this.ancho)) {
            this.ancho = 40;
            window.location.href = "src/tts/tts.html";

            if (!trigger) {
                audio.play()
                trigger = true
            } else {
                audio.stop()
            }
        } else {
            this.ancho = 20
            trigger = false
        }
    }

    display() {
        image(miSvg, this.x, this.y, this.largo, this.ancho)
    }
}
