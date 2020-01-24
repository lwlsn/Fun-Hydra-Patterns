noise(26.366, 0.122, 0.198).out(o1);
osc(50, 0.1).blend(noise(12, -0.212))
  .rotate(3.14 / 2)
  .kaleid(48)
  .add(o1)
  .modulate(o0)
  .diff(o0).out();
