
noise(2,0.2).scrollX([-1,1]).out(o1)


noise(10,0.9)
.mult(shape(2)).repeat(2,10).
kaleid(8).repeat(2,2).modulate(o1)
.mult(osc(10,0.25,1))
.modulateRotate(src(o1).scale(0.5),0.125)
.kaleid(10)
.scrollY(0.1,0.15).out(o0)
