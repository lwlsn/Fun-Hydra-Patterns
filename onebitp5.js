p5 = new P5() 


p5.clear()

p5.background(0);

let mostCommonResult = calculateMostCommonResult();

for (let x = 0; x < p5.width; x += 2) {
    for (let y=0; y<p5.height; y+=2) {
        
        let result = calculateFunction(x, y);
      
       if (result == mostCommonResult) {
         p5.fill(0);
       } else {
         p5.fill(255);
       }
      
        p5.ellipse(x, y,2);
    }

  }


function calculateFunction(x, y) {
  // return ((((x ^ y) | (~y)) % (~(x + 6))) & (~((x-1 / y) % (x / 10)))) % 3;
  
  return ((((y + 4) & (x + y)) + ((~y) ^ (-y))) / ((-(y & 1)) + (~(y - x)))) % 4;
}


function calculateMostCommonResult() {
  let counts = {};
  
   for (let x = 0; x < width; x += 5) {
    for (let y = 0; y < height; y += 5) {
      let result = calculateFunction(x, y);
      counts[result] = (counts[result] || 0) + 1;
    }
  }
  
  
  let maxCount = 0;
  let mostCommonResult;
  
  for (let result in counts) {
    if (counts[result] > maxCount) {
      maxCount = counts[result];
      mostCommonResult = result;
    }
  }
  
  return parseInt(mostCommonResult);

}

p5.hide()

// To use P5 as an input to hydra, simply use the canvas as a source:
s0.init({src: p5.canvas})

// Then render the canvas
src(s0)
  //.diff(src(s0).scale(0.98))
//.blend(o0)
  .out()
