// s0.initScreen()

osc(20, 0.1)
  //.rotate(3.14/2).color(0.98,0.8,2)
.out(o1)

src(o1).layer(src(s0).luma(0.24).scale(0.98))
.modulatePixelate(src(o1), 200, -0.04)
  .out()

render(o0)
