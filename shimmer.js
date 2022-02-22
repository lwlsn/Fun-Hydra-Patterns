//Shimmery 

osc(100, 0.1)
	.rotate(0, 0.1)
.modulateScale(o0, 0.08)
  .out(o0)


noise(10, 1).luma(0.1, 0.8).color(0.8, 0.8, 1).modulate(o0)
  .posterize( 10, [0.1, 0.5, 1.0, 2.0] )
.kaleid(10)
.modulate(o1, 0.8)
.brightness( ({time}) => Math.sin(time) )
  .out(o1)




render(o1)
