// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
s0.initImage("https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/476802700_10170599052775632_3175871720296895054_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=9a9E6SlYKB4Q7kNvgELgw0M&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=A4tguD6t56KTRhEoqlSjrfp&oh=00_AYC56YNZiaosIrMzIq0mpsdoybDcoY8wT6SxpJiDeYdnyw&oe=67AC1045")






hydraText.font = "serif"
hydraText.lineWidth = "2%"
str = " Fá Maria \n Shreya Gupta \n Junson Park "

src(s0)
  //.kaleid(500)
 .modulate(src(s0),0.1)
	.blend(src(o0).scale(1.02))
	.layer(text(str, {fillStyle:"red"}))
	.out()

