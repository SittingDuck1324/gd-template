c = document.createElement('canvas');
c.width = 800;
c.height = 600;
document.appendChild(c);
document.bodyappendChild(c);
ctx = c.getContext('2d');
ctx.beginPath();
ctx.fillRect(0,0,800,600);
ctx.closePath();
