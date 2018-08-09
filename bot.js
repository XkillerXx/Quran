const Discord = require("discord.js");

const client = new Discord.Client();

const yt = require('ytdl-core');

client.on('ready', () => {

console.log('Logging into discord..');

console.log(`

By Majd

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

        let stream = yt('https://youtu.be/0m02xNtR8gA', {audioonly: true});

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

        let stream = yt('https://www.youtube.com/watch?v=Ktync4j_nmA', {audioonly: true});

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

:mosque: .quran 1  :   القران الكريم كامل بصوت الشيخ عبدالباسط عبدالصمد 

:mosque: .quran 2  :   سورة البقرة كاملة - القارئ الحاج ميثم التمار (QURAN)

:mosque: .quran 3  :   القرآن الكريم كامل بصوت الشيخ عبد الرحمن السديس وسعود الشريم 

:mosque: .quran 4  :   القرآن الكريم كامل بصوت الشيخ المعيقلي

:mosque: .stop     : لـ أيقاف تشغيل البوت `)

}

 

	    

});











var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "كل-م-يحصل-في-السيرفر"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });
  








client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
