
// p1 = new P5()

xPos = 0
yPos = 0
p1.draw = () => {
  p1.clear()
  p1.background(0)
  // p1.rect(p1.mouseX, p1.mouseY, 300, 300)
  let textArray = ['🫠😛🥳😅']
  p1.textSize(400)
  p1.fill('#f6f6f6')
  p1.text(textArray[0],xPos, yPos)
  xPos += 10
  yPos += 10
  if(xPos > p1.width) xPos = 0
  if (yPos > p1.height) yPos = 0
}

p1.hide()

s0.init({src: p1.canvas})

solid().out(o1)

src(s0).modulate(o0)
.repeat(1)
.diff(src(s0).scale(0.18))
 .rotate(()=> a.fft[0]*0.5 +1)
.blend(o0).rotate(()=> a.fft[2]*0.1 -0.2)
//.modulateScale(osc(40).rotate(Math.sin(time)),.125)
 .out()
