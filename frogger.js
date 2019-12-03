let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

function drawBackground() {
    // grass
    ctx.fillStyle = "lime"
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
    ctx.strokeStyle = "white"
    ctx.moveTo(0, 350)
    ctx.lineTo(570, 350)
    ctx.setLineDash([5])
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
    ctx.beginPath()
    ctx.rect(50, 444, 30, 30)
    ctx.strokeStyle = "purple"
    ctx.stroke()
}

function draw() {
    drawBackground()
    drawFrog()

    requestAnimationFrame(draw)
}

draw()