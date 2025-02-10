// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/

// Artists: 

await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
s0.initImage("https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/476802700_10170599052775632_3175871720296895054_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QBZWggnxNREQ7kNvgFm7m3Z&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=A_-tTZFdRT6rACRDL-EeKmZ&oh=00_AYA8ihwQqPebGRJuLmoJ8eWDdpixmDvff6oHy5wSuMf1oQ&oe=67B03D05")


hydraText.font = "serif"
hydraText.lineWidth = "2%"
str = "Artist Talks: \n Fá Maria \n Shreya Gupta \n Junson Park "

src(s0)
 .modulate(src(s0),0.1)
	.blend(src(o0).scale(1.02))
	.layer(text(str, {fillStyle:"red"})).scale(0.8)
	.out()



// Performances:


await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")
s0.initImage("https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/476672293_10170599102505632_1584806381209679646_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=RFopb_uePAkQ7kNvgE9lmeE&_nc_zt=23&_nc_ht=scontent-man2-1.xx&_nc_gid=AIn6scdGNmlmbLT-mQICiD6&oh=00_AYCMtkijp4j64ZM1YZ52rCamwPozIK7qiJCpgz1R12hkyA&oe=67B05FC0")



hydraText.font = "serif"
hydraText.lineWidth = "2%"

str = "Live Performances: \n Oluremi Falowo \n digital selves \n ECOLAGBOHRSAC2021 "

src(s0)
 .modulate(src(s0),0.05)
	.blend(src(o0).scale(0.52))
.layer(text(str, {fillStyle:"red"})).scale(0.88)
	.out()
