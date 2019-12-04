let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


// frog variables
let frog = new Image(); frog.src = 'frogger.png'
let sx = 0
let sy = 0
let swidth = 40
let sheight = 40
let x = 50
let y = 444
let width = 30
let height = 30

// frog movement
let rightPressed = false
let leftPressed = false
let upPressed = false
let downPressed = false
let up = true
let down = true
let right = true
let left = true

// car variables
let car1 = new Image(); car1.src = 'car1.png'

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true
    }
    if (e.keyCode === 37) {
        leftPressed = true
    }
    if (e.keyCode === 38) {
        upPressed = true
    }
    if (e.keyCode === 40) {
        downPressed = true
    }
}

function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false
    }
    if (e.keyCode === 37) {
        leftPressed = false
    }
    if (e.keyCode === 38) {
        upPressed = false
    }
    if (e.keyCode === 40) {
        downPressed = false
    }
}

function drawBackground() {
    // grass
    ctx.fillStyle = "purple"
    ctx.fillRect(0, 440, 570,45)
    ctx.fillRect(0, 220, 570, 45)
    
    // road
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.moveTo(0, 395)
    ctx.lineTo(570, 395)
    ctx.setLineDash([5])
    ctx.strokeWidth = 2
    ctx.stroke()
    
    ctx.beginPath()
    ctx.strokeStyle = "yellow"
    ctx.moveTo(0, 350)
    ctx.lineTo(570, 350)
    ctx.setLineDash([0])
    ctx.strokeWidth = 2
    ctx.stroke()
    
    ctx.beginPath()
    ctx.strokeStyle = "white"
    ctx.moveTo(0, 305)
    ctx.lineTo(570, 305)
    ctx.setLineDash([5])
    ctx.strokeWidth = 2
    ctx.stroke()
    
    // water
    ctx.fillStyle = "blue"
    ctx.fillRect(0, 0, 570, 220)
}

function drawFrog() {
    ctx.drawImage(frog, sx, sy, swidth, sheight, x, y, width, height)
}

function moveFrog() {
    // move up
    if (upPressed === true && up === true) {
        y = y - 44
        up = false
        sx = 0
    }
    if (upPressed === false) {
        up = true
    }

    // move down
    if (downPressed === true && down === true) {
        y = y + 44
        down = false
        sx = 0
    }
    if (downPressed === false) {
        down = true
    }

    // right move
    if (rightPressed === true && right === true) {
        x = x + 44
        right = false

    }
    if (rightPressed === false) {
        right = true
    }

    // left move
    if (leftPressed === true && left === true) {
        x = x - 44
        left = false
    }
    if (leftPressed === false) {
        left = true
    }
}

function drawCar1() {
    ctx.drawImage(car1, 0, 0, 47, 35, 100, 400, 47, 35)
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBackground()
    drawFrog()
    moveFrog()
    drawCar1()

    requestAnimationFrame(draw)
}

draw()