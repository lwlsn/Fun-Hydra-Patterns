
p1 = new P5()

p1.frameRate(15)

// var charset = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
// var charset = ":%&£@^!@£%^&*()"
// charset = charset.split("");

let charset = ':(,:),:S, :O, :/, >:(';
let splitString = charset.split(',');


//Raindrop-like objects
function Drop() {
  this.spawn = function (y, y2) {
    this.x = p1.random(width);

    //Spread out the drops
    this.y = p1.random(y, y2);

    /* Z value used to
    adjust size and fall speed
    for a 3D effect */
    this.z = p1.random(0, 20);
    this.size = p1.map(this.z, 0, 20, 9, 20);
    this.yspeed = p1.map(this.z, 0, 20, 10, 30);
  }

  //Spread the drops out far at first
  this.spawn(-900, -10);

  this.fall = function () {
    this.y = this.y + this.yspeed;

    if (this.y > height) {
      /* Reset the drop
      spreading is not
      as important */
      this.spawn(-200, -100);
    }
  };


  this.show = function () {
    p1.textSize(this.size); //smaller is "farther away"
    p1.fill("#F00"); //green text
    p1.text(p1.random(splitString), this.x, this.y); //change character for each update
  }
}


var drops = [];


for (var i = 0; i < 150; i++) {
   drops[i] = new Drop();
}


p1.draw = () => {

  // p1.clear()
      p1.background('rgba(0, 0, 0, 0.2)');

      // p1.textSize(50); //smaller is "farther away"
      // p1.fill("#F00"); //reddest red text
      // p1.text(p1.random(charset), 400, 400); //change character for


    for (var i = 0; i < drops.length; i++) {
        drops[i].fall();


      drops[i].show();
  }
}

p1.hide()

s0.init({src: p1.canvas})

// solid().out(o1)

src(s0)
// .modulate(noise(3,0.2))
// .mult(osc(4))//.thresh(0.6)
 .out()
