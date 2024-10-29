//  s0m3 c0d3

//s0.initScreen()


a.setSmooth(.9)
a.setCutoff(2)
a.setScale(35)

// (1)
src(o0).layer(
  src(s0).invert().luma().invert().color(0,()=>a.fft[0],0.2).modulateScale(o0)
.modulateScale(gradient(),()=>Math.sin(time*2))
.invert(()=>Math.sin(time/3))
.layer(
  src(s0).invert().luma().invert().scale(.75))
).out()






