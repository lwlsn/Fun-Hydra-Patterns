// Dreamy clouds

osc(100, 0.1, 0.2)
  .blend( osc(9,0, ()=>Math.sin(time/1.5)+2 ) )
.diff(
    noise(10,.2).brightness(1.2).contrast(0.5)
    .diff( osc(9,0, ()=>Math.sin(time/3)+5 ) )
)
  .diff(noise(5,2))
  .color(0.25, 0.5, 3)
.add(osc(20, 0.01, 0.8)).repeat(2).rotate(1.2)
.diff(osc(40))
.modulate(o0, 0.05)
  .out()




