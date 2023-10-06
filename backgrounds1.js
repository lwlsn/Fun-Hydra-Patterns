Enter file contents here
 function r(min=0,max=1) { return Math.random()*(max-min)+min; }

osc(20, 0.1)
  .diff(shape([5,3,5,24].smooth().fast(.5),r(0.6,0.93),.09))
	.modulateScale(osc(8).rotate(r(-.5,.5)),.52)
  .out(o1)


shape(1,1)
  .mult(voronoi(1000,2).blend(o0).luma())
  .scrollY([0.1,-0.0625,0.005,0.00001],0)
	.modulate(o0)
	.diff(o1)
  .out(o0)



render(o0)
