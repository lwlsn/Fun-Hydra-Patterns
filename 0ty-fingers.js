//  s0m3 c0d3

//s0.initScreen()

speed=1.5
a.setSmooth(0.9) 
a.setBins(4)
a.setScale(8)  
a.show()


// (2)

p1 = new P5()


calculateText = () => {
  if (p1.frameCount%100==0) {
    return 'fingers'
  }
  else {
    return '0ty'
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




src(s0).layer(
  src(s0).invert().luma().invert().color(0,()=>a.fft[0],0.2).modulateScale(o0)
.modulateScale(gradient(),()=>Math.sin(time*2))
.invert(()=>Math.sin(time/3))
.layer(
  src(s0).invert().luma().invert().scale(.75))
).out(o0)


shape(4)
.scale(8,0.3)
//.mult(o0)
.mask(o0)

.add(src(s1).luma(.01).saturate(3).color(1,1,0.7)
       .modulate(noise(()=>mouse.y*0.004,0.3)).scrollX(0.2,0.1)
          )
.out(o1)



//render(o1)


// Add 

src(s0)
.out(o1)
render(o1)


src(o2)
.modulate(solid(0,0,0,0)
.add(solid(1,0),-2)
.add(noise(3,.1).color(0,1),1)
.add(noise(3,.125).color(1,0),1)
.modulateScale(osc(Math.PI*5,.1).pixelate(2,1),10)
.color(1/width,1/height)
,1)
.layer(src(o1).scrollX(0,-100/width).mask(shape(2).scale(2,2/width,1,0,.5).repeat(2,1)))
.out(o2)

render(o2)
