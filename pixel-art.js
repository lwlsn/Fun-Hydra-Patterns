//Pixel art Image 1 

// load an image into a source object
s0.initImage("https://scontent-lhr6-2.xx.fbcdn.net/v/t39.30808-6/411190807_10168219477265632_4605555766048469149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=dDXy3L8IxU0AX9GSA53&_nc_ht=scontent-lhr6-2.xx&oh=00_AfCmaqsE2KH7RwGe7Gkww6auHDVyChcY1E4sBUHovpb0nA&oe=657F1CDB")

// show the image on the screen
src(s0)
     .rotate(0.001,()=>Math.sin(time)* -0.00001 )
    .scale(0.5)     .color(0.6, 0.8)
    .modulate(o0, 0.006)
  .out()
