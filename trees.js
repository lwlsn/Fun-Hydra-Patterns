// treeeeeeeee(s)


shape(3).rotate(Math.PI)
.scrollY(-0.1,0)
  .add(shape(3).rotate(3.14).scale(0.8))
.scrollY(-0.1,0)
  .add(shape(3).rotate(3.14).scale(0.6))
.scrollY(-0.1,0)
.add(shape(3).rotate(3.14).scale(0.4))
  .color( 0, 0.7, 0).repeat(3,3).modulate(o1).out(o0)


noise(2, 0.05).out(o1)


p1 = new P5() 

p1.draw = () => {
  p1.textSize(48)
  p1.fill(p1.mouseX/5, p1.mouseY/5, 255, 100)
  p1.text("Happy Holidays", width/2 - 100, height/2)
}


