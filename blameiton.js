// lol
s0.initCam()
src(s0).out(o2)
osc(1,2,300).diff(gradient(1)).scale(.1).invert().out(o1)
src(o1).diff(o2).diff(o0).out()
render(o0)



// V2

s0.initCam()
src(s0).out(o2)
osc(1,2,300).out(o1)
src(o1).add(o2).diff(o0).out()


render(o0)
