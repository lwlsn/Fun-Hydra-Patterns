

// Art1:


await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
s0.initImage("https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/481657277_10170700876655632_6671461364491854584_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XbUtgGxMHRUQ7kNvgHNWRv5&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=AO5EPUC6-Bm5YJinw2VuwSs&oh=00_AYCB27s68nKw148l16jp8ipT19UQ2Dm013sSrDg3JNCRnw&oe=67C4363B")



hydraText.font = "monaco"
hydraText.lineWidth = "2%"

str = "all i want \n is everything"

src(s0)
.layer(text(str, {fillStyle:"red"})).scale(0.68)
 .modulate(src(s0),0.1)
	.blend(src(o0).scale(0.99))
	.out()
