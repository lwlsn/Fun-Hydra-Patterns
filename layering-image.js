
// Example image layering

s0.initImage("https://upload.wikimedia.org/wikipedia/commons/2/25/Hydra-Foto.jpg")
src(s0).out(o2)


osc(10,0.1,1)
.out(o1)

src(o1).layer(src(s0).luma().scale(0.5)).out()

render(o0)
