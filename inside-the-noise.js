p1 = new P5()


calculateText = () => {
  if (p1.frameCount%100==0) {
    return 'distance'
  }
  else {
    return 'abstractions'
  }
}

p1.draw = () => {
  p1.clear();
  p1.textSize(150);
  p1.fill(700,100,100);
  p1.textFont('times');
  let frameCount = p1.frameCount%10;
  p1.text(
	calculateText()
    , p1.displayWidth/9, p1.displayHeight/4+50);
  p1.hide(),0.2;
}

s1.init({src:p1.canvas})


speed=1.5
a.setSmooth(0.9) 
a.setBins(4)
a.setScale(8)  
a.show()

osc(10, 0.1, 0.01)
  .mult(osc(10, -0.1))
	.modulate(noise([0.3, 0.6, 0.9, 1.8]).rotate(4,0.4),1)
	.color(100,200,100)
.invert([1, 0.1])
.saturate(0.1)
.luma(0.2, 0.3, (9, ()=> a.fft[2]))
.scale(0.8)
  .out(o0)


shape(4)
.scale(8,0.3)
//.mult(o0)
.mask(o0)

.add(src(s1).luma(.01).saturate(3).color(1,1,0.7)
       .modulate(noise(()=>mouse.y*0.004,0.3)).scrollX(0.2,0.1)
          )
//.add(solid(0,0.3,0,5))
.modulate(o0,0.02)
.modulateHue(src(o2).scale(1.02,3).blend(o1,0.1))
.out(o1)



render(o1)

