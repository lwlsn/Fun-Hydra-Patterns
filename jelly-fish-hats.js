// by digitalselves ... 
// lil jellyfish hats 

p1 = new P5()

xPos = 0
yPos = 0
p1.draw = () => {
  p1.clear()
  p1.background(0)
  // p1.rect(p1.mouseX, p1.mouseY, 300, 300)
  let textArray = ['👒', '😻']
  p1.textSize(400)
  p1.fill('#f6f6f6')
  p1.text(textArray[0],xPos, yPos)
  xPos ++
  yPos ++
  if(xPos > p1.width) xPos = 0
  if (yPos > p1.height) yPos = 0
}

p1.hide()

s0.init({src: p1.canvas})

solid().out(o1)

src(s0).repeat(3,2)
.modulate(noise(3,0.2))
.mult(osc(4))//.thresh(0.6)
 .out()


p1.remove()

solid().out()
