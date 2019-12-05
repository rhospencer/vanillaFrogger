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
let car1_1 = new Image(); car1_1.src = 'car1.png'
let car1X1 = 100; let car1Y1 = 400; let car1Width = 47; let car1Height = 30;
let car1_2 = new Image(); car1_2.src = 'car1.png'
let car1X2 = 500
let car2_1 = new Image(); car2_1.src = 'car2.png'
let car2X1 = 150; let car2Y1 = 355; let car2Width = 30; let car2Height = 30;
let car2_2 = new Image(); car2_2.src = 'car2.png'
let car2X2 = 400
let car2_3 = new Image(); car2_3.src = 'car2.png'
let car2X3 = 650
let car3_1 = new Image(); car3_1.src = 'car3.png'
let car3X1 = 500; let car3Y1 = 310; let car3Width = 30; let car3Height = 30;
let truck1_1 = new Image(); truck1_1.src = 'truck1.png'
let truck1X1 = 450; let truck1Y1 = 265; let truck1Width = 108; let truck1Height = 30;
let truck1_2 = new Image(); truck1_2.src = 'truck1.png'
let truck1X2 = 310
let truck1_3 = new Image(); truck1_3.src = 'truck1.png'
let truck1X3 = 10


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
    if (upPressed === true && up === true && y > 20) {
        y = y - 44
        up = false
        sx = 0
    }
    if (upPressed === false) {
        up = true
    }

    // move down
    if (downPressed === true && down === true && y + height < canvas.height - 80) {
        y = y + 44
        down = false
        sx = 0
    }
    if (downPressed === false) {
        down = true
    }

    // right move
    if (rightPressed === true && right === true && x + width < canvas.width - 20) {
        x = x + 44
        right = false

    }
    if (rightPressed === false) {
        right = true
    }

    // left move
    if (leftPressed === true && left === true && x > 20) {
        x = x - 44
        left = false
    }
    if (leftPressed === false) {
        left = true
    }
}

function drawLane1() {
    ctx.drawImage(car1_1, 0, 0, 47, 35, car1X1, car1Y1, car1Width, car1Height)
    if (car1X1 < canvas.width + 100) {
        car1X1 = car1X1 + 4
    } else {
        car1X1 = -100
    }
    ctx.drawImage(car1_2, 0, 0, 47, 35, car1X2, car1Y1, car1Width, car1Height)
    if (car1X2 < canvas.width + 100) {
        car1X2 = car1X2 + 4
    } else {
        car1X2 = -100
    }
}

function drawLane2() {
    ctx.drawImage(car2_1, 0, 0, 35, 35, car2X1, car2Y1, car2Width, car2Height)
    if (car2X1 < canvas.width + 100) {
        car2X1 = car2X1 + 2
    } else {
        car2X1 = -100
    }
    ctx.drawImage(car2_2, 0, 0, 35, 35, car2X2, car2Y1, car2Width, car2Height)
    if (car2X2 < canvas.width + 100) {
        car2X2 = car2X2 + 2
    } else {
        car2X2 = -100
    }
    ctx.drawImage(car2_3, 0, 0, 35, 35, car2X3, car2Y1, car2Width, car2Height)
    if (car2X3 < canvas.width + 100) {
        car2X3 = car2X3 + 2
    } else {
        car2X3 = -100
    }
}

function drawLane3() {
    ctx.drawImage(car3_1, 0, 0, 35, 35, car3X1, car3Y1, car3Width, car3Height)
    if (car3X1 > canvas.width - 670) {
        car3X1 = car3X1 - 8
    } else {
        car3X1 = 670
    }
}

function drawLane4() {
    ctx.drawImage(truck1_1, 0, 0, 108, 35, truck1X1, truck1Y1, truck1Width, truck1Height)
    if (truck1X1 > canvas.width - 670) {
        truck1X1 = truck1X1 - 1
    } else {
        truck1X1 = 670
    }
    ctx.drawImage(truck1_2, 0, 0, 108, 35, truck1X2, truck1Y1, truck1Width, truck1Height)
    if (truck1X2 > canvas.width - 670) {
        truck1X2 = truck1X2 - 1
    } else {
        truck1X2 = 670
    }
    ctx.drawImage(truck1_3, 0, 0, 108, 35, truck1X3, truck1Y1, truck1Width, truck1Height)
    if (truck1X3 > canvas.width - 670) {
        truck1X3 = truck1X3 - 1
    } else {
        truck1X3 = 670
    }
}

function runOver() {
    if (car1X1 <= x + width && car1X1 + car1Width >= x && car1Y1 + car1Height >= y && car1Y1<= y + height) {
        y = 488
    }
    if (car1X2 <= x + width && car1X2 + car1Width >= x && car1Y1 + car1Height >= y && car1Y1<= y + height) {
        y = 488
    }
    if (car2X1 <= x + width && car2X1 + car2Width >= x && car2Y1 + car2Height >= y && car2Y1<= y + height) {
        y = 488
    }
    if (car2X2 <= x + width && car2X2 + car2Width >= x && car2Y1 + car2Height >= y && car2Y1<= y + height) {
        y = 488
    }
    if (car2X3 <= x + width && car2X3 + car2Width >= x && car2Y1 + car2Height >= y && car2Y1<= y + height) {
        y = 488
    }
    if (car3X1 <= x + width && car3X1 + car3Width >= x && car3Y1 + car3Height >= y && car3Y1<= y + height) {
        y = 488
    }
    if (truck1X1 <= x + width && truck1X1 + truck1Width >= x && truck1Y1 + truck1Height >= y && truck1Y1<= y + height) {
        y = 488
    }
    if (truck1X2 <= x + width && truck1X2 + truck1Width >= x && truck1Y1 + truck1Height >= y && truck1Y1<= y + height) {
        y = 488
    }
    if (truck1X3 <= x + width && truck1X3 + truck1Width >= x && truck1Y1 + truck1Height >= y && truck1Y1<= y + height) {
        y = 488
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawBackground()
    drawFrog()
    moveFrog()
    drawLane1()
    drawLane2()
    drawLane3()
    drawLane4()
    runOver()

    requestAnimationFrame(draw)
}

draw()