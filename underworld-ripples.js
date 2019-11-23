// 
a.setScale (10)
a.setBins (6)
//
a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9


shape(4).scale(()=> a.fft[0]*4 +1)
.blend(o0).mult(noise(20,0.9).thresh(0.2))
.blend(o0).color(0.1,0.9,1)
.blend(o0).rotate(()=> a.fft[0]*0.1 -0.2)
.scrollY(-0.32,-0.2)
.scale(()=> a.fft[3]*2 -1)
.modulate(o0,()=> a.fft[4]*0.1 -0.2)
.rotate(-0.1,()=> a.fft[3]*0.7 -0.1)
.out(o0)


solid().out()
