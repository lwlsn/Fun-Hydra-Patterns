// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// by Olivia Jack
// https://ojack.github.io

osc(100, 0.05,0.4)
  .mult(shape(4))
.scale(3)
.repeat(3,3)
  .out(o0)


noise(100, 0.1)
  .mult(shape(4))
.scale(2)
.repeat(3,3)
.modulate(o1)
.scale([1.15])
 .out(o1)


voronoi(10)
.mult(shape(4))
.scale(2)
  .repeat(4,4)
.modulateScale(o0)
.modulate(o1)
  .out(o2)


noise(20)
  .mult(shape(4)).scale(3).repeat(3,3)
.add(o2)
  .out(o3)

render()
