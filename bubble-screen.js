// this works better in the atom editor background package, with init screen as the atom interface


s1.initScreen(0)

noise(2,0.2).contrast(0.9).thresh(0.2).out(o1)

src(s1).scrollX([0.1])
//.rotate(()=> a.fft[0]*0.9)
.modulate(o1).out(o0)

render(o0)


solid().out(o0)
