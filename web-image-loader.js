// blaa a


function loadImage() {
  var myImage = document.createElement('img');
  myImage.onload = ()=> s0.init({src:myImage, dynamic:false})
  var num = Math.floor(Math.random()*Date.now())
  myImage.crossOrigin = "Anonymous"
  myImage.src = 'https://dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg'
}

loadImage()

// mousedown plays audio and switches images
window.document.body.addEventListener("mousedown", ()=>loadImage() )

// timers
setInterval( ()=> { loadImage() }, 7000)


posY = ()=> (Math.sin(time/21)*.3)+.6

src(s0).color(1.5,1,1)
.modulateScrollY(osc(8,0).thresh( .5 ,0).rotate(Math.PI/2),.3,.016)
.modulateScale(osc(8,0).thresh( .5 ,0).rotate(Math.PI/2), 2 )

.diff( src(s0).saturate(1.5).color(1,1,1.5)
.modulateScrollY(osc(8,0).thresh( ()=>posY ,0).rotate(Math.PI/2), .3, .016 )
.modulateScale(osc(8,0).thresh( ()=>posY ,0).rotate(Math.PI/2), 2 )
.modulatePixelate( osc(10,-.1,3).thresh( ()=>(Math.sin(time/2)*.15)+.4 ,0).rotate(Math.PI/2)
  , ()=> (Math.random()*50)+80 )
.add( osc(3,.08).thresh( .5 ,0).rotate(Math.PI/2) , .9 )
,.8)

//.mult( src(s0), .9 )
// .modulateHue( src(s0), 30)

.out()



// I.u comp version

function loadImage() {
  var myImage = document.createElement('img');
  myImage.onload = ()=> s0.init({src:myImage, dynamic:false})
  var num = Math.floor(Math.random()*Date.now())
  myImage.crossOrigin = "Anonymous"
  myImage.src = "https://scontent.flhr4-2.fna.fbcdn.net/v/t1.0-9/p960x960/101889556_10163572957625632_8942663058971426816_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=69hQ3YSu_coAX_Wym4r&_nc_ht=scontent.flhr4-2.fna&_nc_tp=6&oh=0f6fb97fa21c96ba779c8f90eae5aef8&oe=5EFD6973"
}

loadImage()

// mousedown plays audio and switches images
window.document.body.addEventListener("mousedown", ()=>loadImage() )

// timers
setInterval( ()=> { loadImage() }, 7000)


posY = ()=> (Math.sin(time/21)*.3)+.6

src(s0).color(1.5,1,1)
.modulateScrollY(osc(8,0).thresh( .5 ,0).rotate(Math.PI/2),.3,.016)
.modulateScale(osc(8,0).thresh( .5 ,0).rotate(Math.PI/2), 2 )

// .diff( src(s0).saturate(0.5).color(0,1,1.5)
.modulateScrollY(osc(8,0).thresh( ()=>posY ,0).rotate(Math.PI/2), .3, .016 )
.modulateScale(osc(8,0).thresh( ()=>posY ,0).rotate(Math.PI/2), 2 )
//.modulatePixelate( osc(10,-.1,3).thresh( ()=>(Math.sin(time/2)*.15)+.4 ,0).rotate(Math.PI/2)
  //, ()=> (Math.random()*50)+80 )
.add( osc(3,.08).thresh( .5 ,0).rotate(Math.PI/2) , .9 )
,.8)

//.mult( src(s0), .9 )
// .modulateHue( src(s0), 30)

.out()






