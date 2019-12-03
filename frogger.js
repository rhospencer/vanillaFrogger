let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

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