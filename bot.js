const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');

client.on('ready', () => {
console.log('Logging into discord..');
console.log(`
**By Ayyyymaaaaaaaaan.**
`);

});

//جميع الحقوق محفوظه لي ماجد يعني لاتسوي مبرمج. 





function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('.' + str);
}

function pluck(array) {
    return array.map(function(item) { return item['name']; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }





var servers = {};






var q1 = ".quran 1"

var q2 = ".quran 2"

var q3 = ".quran 3"

var q4 = ".quran 4"

var q5 = ".quran 5"

var q6 = ".quran 6"

var q7 = ".quran 7"

var q8 = ".quran 8"

var q9 = ".quran 9"

var q10 = ".quran 10"









function play(connection, message) {
	var server = servers[message.guild.id];

	server.dispatcher = connection.playStream(yt(server.queue[0], { fliter: "audionly" }));

	server.queue.shift();

	server.dispatcher.on("end", function() {
		if (server.queue[0]) play(connection, message);
		else connection.disconnect();
	});
}

client.on("ready", () => {
	console.log(`Quran bot is in ${client.guilds.size} servers `)
});

var PREFIX = ".";



//sowar


client.on("message", message => {

	                    if (message.content === q1 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=V4b9f9BQTKI', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
  	                    if (message.content === q2 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
    	                    if (message.content === q3 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=4JvY-MccxNk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
  
      	                    if (message.content === q4 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=ABJVAogCPUQ', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
        });
  }
 
    
    

	                    if (message.content === q5 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=Zz2ueEugAIA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    
    

	                    if (message.content === q6 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=h07oHCT4Hpk', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    

	                    if (message.content === q7 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=rP18g3VSnaM', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    

	                    if (message.content === q8 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=dReN4RT_Q-0', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    
    

	                    if (message.content === q9 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://www.youtube.com/watch?v=A1szsIXLfmg', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    

	                    if (message.content === q10 ) {
                  message.react('🔊')
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.reply(`يرجى أن تكون في قناة صوتيه أولا!`);
    }
    voiceChannel.join()
      .then(connnection => {
        let stream = yt('https://youtu.be/KN8XhDGqakA', {audioonly: true});
        const dispatcher = connnection.playStream(stream);
      });
  }
    
    
    
    
    
    
    
    
    
    //outher_cummon  
    
  
  if(message.content === ".stop" ) {
      			var servers = {};

			if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
	
  }

  if(message.content === ".help") {
    message.channel.send(` QuranBot
:mosque: .quran 1   :  القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد

:mosque: .quran 2  :   القرآن الكريم كامل بصوت الشيخ المعيقلي

:mosque: .quran 3  :   القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم

:mosque: .quran 4  :   القرآن الكريم كامل بصوت - القارئ الحاج ميثم التمار

:mosque: .quran 5  :    القرآن الكريم كامل بصوت الشيخ سعود الشريم

:mosque: .quran 6  :    القرآن الكريم كامل بصوت الشيخ محمد صديق المنشاوي

:mosque: .quran 7  :    القرآن الكريم كامل بصوت الشيخ أحمد العجمي

:mosque: .quran 8  :    القرآن الكريم كامل بصوت الشيخ سعد الغامدي

:mosque: .quran 9  :    القرآن الكريم كامل بصوت الشيخ مشاري بن راشد العفاسي

:mosque: .quran 10  :  القرآن الكريم كامل بصوت القارئ وحاتم فريد



:mosque: .stop      :   لـ أيقاف تشغيل البوت


** For additional help, contact <@337457211875917834>**

`)  

}
 
	    
});
client.login(process.env.BOT_TOKEN);
