let miSvg;
let numSounds = 10;
let sonidos = [];
let audio;
let trigger = false;

function preload() {
    miSvg = loadImage("../assets/sound.svg");
    audio = loadSound("../assets/voz.mp3")
     audio.playMode('restart')
}

function setup() {
    let cnv = createCanvas(windowWidth * 0.92, windowHeight * 0.55)
    cnv.parent('jumbo-canvas')

    for (let i = 0; i < numSounds; i++) {
        let x = random(width - 140)
        let y = random(height)
        let ancho = 140
        let largo = 20
        let s = new Sonido(x, y, ancho, largo)
        sonidos.push(s)
    }
}

function mousePressed() {
    for (let i = 0; i < sonidos.length; i++) {

    }
}

function draw() {
    clear()
    for (let i = 0; i < sonidos.length; i++) {
        sonidos[i].display()
        sonidos[i].clicked(mouseX, mouseY)
    }
}

class Sonido {
    constructor(x, y, largo, ancho) {
        this.x = x;
        this.y = y;
        this.largo = largo;
        this.ancho = ancho;
    }

    clicked(px, py) {
        if ((px > this.x && px < this.x + this.largo) && (py > this.y && py < this.y + this.ancho)) {
            this.ancho = 40;

           if(!trigger){
            audio.play()
            trigger = true
           } else {
            audio.stop()
            trigger = false
           }

        } else {
            this.ancho = 20
        }
    }

    display() {
        image(miSvg, this.x, this.y, this.largo, this.ancho)
    }
}
