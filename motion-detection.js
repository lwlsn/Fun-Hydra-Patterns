
// Motion Detection p1.. 

s0.initCam()

src(s0).out(o0)

src(s0).invert().out(o1)

src(o0).layer(src(o1).color(1,1,1,()=>Math.sin(time/2))).out(o2)

render()
