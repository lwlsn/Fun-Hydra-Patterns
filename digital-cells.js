//set fft params
a.setScale (10)
a.setBins (6)


a.settings[0].cutoff = 1
a.settings[1].cutoff = 2
a.settings[2].cutoff = 4
a.settings[3].cutoff = 6
a.settings[4].cutoff = 8
a.settings[5].cutoff = 9


//digital cells
osc(100,0.1, 0.2)
.rotate(()=> a.fft[0]*0.2 +1)
.blend(o0).rotate(()=> a.fft[1]*0.1 -0.2)
.modulate(noise(20))
.modulateRotate(osc(2))
.out()
