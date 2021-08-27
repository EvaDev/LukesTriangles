// But is it beautiful??
// credit: https://www.kirupa.com/html5/drawing_triangles_on_the_canvas.htm
let canvas = document.querySelector("#myCanvas");
let context = canvas.getContext("2d");

function setUpCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawTriangles() {
    const lineWidth = 10
    const triangleWidth = 30
    const triangleHeight = triangleWidth * Math.cos(Math.PI / 6);

    setUpCanvas()
    for (let xPos=0; xPos < (canvas.width-triangleWidth); (xPos = xPos + triangleWidth + lineWidth)) {
        for (let yPos=100; yPos < (canvas.height - triangleHeight); (yPos = yPos + triangleHeight + lineWidth)) {
            console.log(xPos); //  Why does this not log to console?
            drawTriangle(lineWidth, xPos, yPos, triangleWidth, triangleHeight)
        }
    }
}

function drawTriangle(lineWidth, xPos, yPos, width, height) {
  //document.getElementById("Height").innerHTML = "height";​

  context.beginPath();
  context.moveTo(xPos + lineWidth, yPos);
  context.lineTo(xPos + lineWidth + width , yPos);
  context.lineTo((xPos + (width)/2) + lineWidth , yPos - height);
  context.closePath();

  // the outline
  context.lineWidth = lineWidth;
  context.strokeStyle = '#666666';
  context.stroke();

  // the fill color
  context.fillStyle = generateRandomColor() // "#FFCC00";
  context.fill();
} 

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

drawTriangles();