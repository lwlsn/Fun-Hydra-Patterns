

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




// Art2:


await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
s0.initImage("https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/481657277_10170700876655632_6671461364491854584_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XbUtgGxMHRUQ7kNvgHNWRv5&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=AO5EPUC6-Bm5YJinw2VuwSs&oh=00_AYCB27s68nKw148l16jp8ipT19UQ2Dm013sSrDg3JNCRnw&oe=67C4363B")


hydraText.font = "monaco"
hydraText.lineWidth = "2%"

str = "C’est pour le mieux, \n Nous ne finirons pas par nous faire du mal. \n Peut-être que c'est suffisant de rester comme ça, \n lumière dispersée. \n Je t’ai construit à partir du silence. \n quand allons-nous nous revoir, \n ou as-tu sacrifié quelque chose \n que quand nous aurons quatre-vingts ans, \n nous regretterons "

src(s0)
.layer(text(str, {fillStyle:"red"})).scale(0.78)
 .modulate(src(s0),0.08)
	.blend(src(o0).scale(0.99))
	.out()


// Art v3


await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
s0.initImage("https://scontent.ffab1-2.fna.fbcdn.net/v/t39.30808-6/489927611_1223595822655247_9067206627921477396_n.jpg?stp=dst-jpg_s1080x2048_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5tsAGnjOuQAQ7kNvwHOMP9n&_nc_oc=AdmEKfILlrxjVTMRPlZlq90cp8NReZpn5jtbFkAV5KqjTx3YoJTxJebZ9LL24-kAM2WZpXkZx9TGaAecGE1sQEdA&_nc_zt=23&_nc_ht=scontent.ffab1-2.fna&_nc_gid=5s8pjfDpKD3ZF8ZtT2rucg&oh=00_AfEnu_2lOcQBB-_DLk8duj2gNO8q_Wbp5G5E6pH5L7eRFA&oe=680B3598")


hydraText.font = "monaco"
hydraText.lineWidth = "2%"


src(s0)
//.layer(text(str, {fillStyle:"red"})).scale(0.78)
 .modulate(src(s0),0.01)
	.blend(src(o0).scale(0.99))
	.brightness(0.0298).contrast(1.1)
	//.modulateScale(noise(2),-0.2)
 	.add(shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1)))
	.out()
