
const baseUrl = "https://openprocessing-usercontent.s3.amazonaws.com/files/user407274/visual2090329/h6921f8ab226c3ba044a1dc2bee03e00e/error_";

let source = 9

s0.initImage(`${baseUrl}${source}.png`)

a.setSmooth(.9)
a.setCutoff(2)
a.setScale(35)
//a.hide()



src(s0)
.modulateScale(gradient(),()=>Math.sin(time*2))
.invert(()=>Math.sin(time/3))
.layer(
  src(s0).invert().luma().invert().scale(.5))
  .modulateScale(o0)
.luma()
.diff(o1).out(o0)

osc(20, 0.2, 0).color(2, 0.7, 0.1).mult(osc(40)).modulateRotate(o0, 0.2)
.rotate(0.2).out(o1)

render(o0)
