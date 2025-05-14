// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
//Glitch River
// Adapted 14/05/2025
voronoi(8,1)
.modulate(o0,0.5)
.diff(o0,0.8)
.scrollY(-0.01)
.scale(0.99)
.modulate(noise(200,1),0.008)
.luma(0.3)
.diff(noise(2,1).scale(0.99).scrollY(0.01).mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(200)))
.out()
