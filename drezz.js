// Type some code on a new line (such as "osc().out()"), and press CTRL+shift+enter
s0.initCam();
src(s0)
.scale(0.19)
	.diff(shape(4).scale(1, 1.5, 2).mult(solid()))
.add(shape(4).scale(1, 1.5, 2.1).color(1,0,0))
	.out();
