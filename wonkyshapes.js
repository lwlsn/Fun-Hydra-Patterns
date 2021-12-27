// Made 27/12/21
// Lizzie Wilson

osc(20, 0.05, 0.8)
  .modulate(noise(2))
 	.kaleid(4)
.diff(o0)
.saturate(0.5)
  .repeat(3,3)
  .out()
