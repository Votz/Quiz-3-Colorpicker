var c=document.getElementById("CanvasForCircle");var asa=c.getContext("2d");asa.beginPath();asa.arc(195,150,140,0,2*Math.PI);asa.stroke();var x=document.getElementById("CanvasForSquare");var ctx=x.getContext("2d");ctx.beginPath();ctx.rect(20,20,150,100);ctx.stroke();var colorInput=document.querySelector('#color')
var hexpicker=document.querySelector('#hex')
colorInput.addEventListener('input',()=>{var color=colorInput.value
hexpicker.value=color;ctx.fillStyle=color;ctx.fill();asa.fillStyle=color;asa.fill()})