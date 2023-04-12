
osc(80, 0, 0.7).color(1, 0, 0.5)
.blend(src(o0).rotate([-.012,.01,-.002,0]).scrollY(0,[-1/199800,0].fast(0.7)))
  .rotate(0, 0.5)
  .modulateRotate(o1, 0.45)
.add(noise(4, 0.1, 0.1))
.modulateScale(osc(8).rotate(Math.sin(time)),.5)
.modulateRotate(osc(2),.4)
  .out(o0)

noise(28).modulateRotate(o0,0.2).out(o1)
