const Discord = require(`discord.js`);
const forEachTimeout = require('foreach-timeout');
const client = new Discord.Client();
const os = require('os');
const strftime = require('strftime')
const yt = require('ytdl-core')
const fs = require('fs');
const botconfig = require('./JSON/botconfig.json');
const data = require("./JSON/data.json");

let prefix_a = botconfig.prefix_a
let prefix_b = botconfig.prefix_b
let prefix_c = botconfig.prefix_c

var servers = {};
var prefix = botconfig.prefix
var blockid = "396331064710135809"
client.login(botconfig.token)


client.on('ready', () => {
	process.stdout.write('\x1Bc');
    console.log(`Starting ${client.user.tag}...`);
    console.log("Loading JSON-modules...")
    console.log("Loading Voice Streamer...")
	console.log("Loading FS Component...")
	console.log("Loading Date/Time Format Component...")	
	console.log("Loading other components...")
	var timerId = setInterval(function() {
	process.stdout.write('\x1Bc'); 
	  let randoman = client.guilds.random()
    console.log("\n ██████    ████   ████   ██   ████████\n      ██   ██ ██ ██ ██           ██\n       ██  ██ ██ ██ ██   ██      ██\n       ██  ██  ███  ██   ██      ██\n      ██   ██       ██   ██      ██\n ██████    ██       ██   ██      ██\n\nDMITBot " + botconfig.version + " \(" + botconfig.date + "\)\n\(C\)opyright 2019 DMIT Development. All rights reserved.\n\nThis script started successfully.")
	console.log("\nPing: " + client.ping + " ms | Memory usage: " + Math.round(process.memoryUsage().heapUsed / 1024) + " kB\nServers: " + client.guilds.size + " \(" + randoman.name + "\) | Users: " + client.users.size)
    }, 2000);
	if(client.ping > 4000) {
		  client.user.setPresence({status: 'dnd'})
  .then(console.log)
  .catch(console.error);
	}
});

  var timerId = setInterval(function users() {
   client.user.setPresence({
        game: {
      name: client.users.size + " users | " + botconfig.prefix + "help",
      url: "https://youtube.com/DMITPlus"}})
   timerId = setTimeout(function servers() {
   client.user.setPresence({
        game: {
   name: client.guilds.size + " servers | " + botconfig.prefix + "help",
	url: "https://youtube.com/DMITPlus"}})
    timerId = setTimeout(function clock() {
	var moscow = new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow"})
   client.user.setPresence({
        game: {
   name: strftime("%H:%M", new Date(moscow)) + " (UTC+3)",
	url: "https://youtube.com/DMITPlus"}})
    }, 6000)
    }, 4000)
}, 16000)

function emoji (id) {
	return client.emojis.get(id).toString();
	}

	var blockmsg_embed = {
   embed: {
color: 0xff0000,
author: {
     name: "Команда недоступна"
	 },
    description: "Автор бота отключил Вам все команды по причине: *оскорбление в отзыве*"
	}};

    client.on('guildCreate', (guild) => {
			  	  	var t_log = {
   embed: {
color: 0x55ff55,
author: {
     name: "Servers Log"
},
	 thumbnail: {
		url: guild.iconURL,
	 },
    description: "DMITBot has joined the **" + guild.name + "** server! Now it has **" + client.guilds.size + "** servers. \:clap\: \:clap\:\nThanks!",
	   fields: [
      {
           name: "Server ID",
           value: guild.id
    },
       {
           name: "Channels | Members | Roles | Online",
           value: guild.channels.size + " ch. | " + guild.memberCount + " memb. | " + guild.roles.size + " roles | " + guild.presences.size + " online"
       },
    {
        name: "Onwer",
        value: guild.owner.user.tag + " \(" + guild.owner.user.id + "\)"
    },
	{
           name: "Created at",
           value: strftime('%d/%m/%Y %H:%M', new Date(guild.createdTimestamp))
    },
      ]
	}}
		var welcome_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Приветствие",
                icon_url: client.user.avatarURL
            },
  description: ":wave: " + guild.owner + ", здравствуйте. Извините, что я Вас беспокоил, хорошо?\nЯ рад, что Вы или кто-то пригласил бота на Ваш сервер! Для справки пишите `dm~help`.\n\n**Это еще не все!** Чтобы воспользоваться полной версией <@507540368443834374>, поддержите автора бота с помощью команды `dm~donate`." 
					}
	}
		  client.channels.get("564022728143929370").send(t_log);})
		  
		      client.on('guildDelete', (guild) => {
			  	  	var t_log = {
   embed: {
color: 0xff0000,
author: {
     name: "Servers Log"
},
	 thumbnail: {
		url: guild.iconURL,
	 },
    description: "DMITBot left, kicked out, banned from **" + guild.name + "** server! Now it has **" + client.guilds.size + "** servers. \nCan you explain to the bot author what you didn't like? :worried:",
	}}
		  client.channels.get("564022728143929370").send(t_log);})

client.on("ready", () => {
	process.stdout.write('\x1Bc'); 
	client.user.setGame("Starting DMITBot...");

});


client.on("message", message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + "test") || message.content.startsWith(prefix_a + "test") || message.content.startsWith(prefix_b + "test") || message.content.startsWith(prefix_c + "test")) {
	  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}

	var test_embed = {
   embed: {
color: 0xff9900,
author: {
     name: "Проверка состояния бота",
     icon_url: client.user.avatarURL
},
    description: "Проверка прошла успешно. Никаких ошибок пока не обнаружено.",
   fields: [
      {
           name: "Размер процесса",
           value: Math.round(process.memoryUsage().heapUsed / 1024) + " кБ"
    },
       {
           name: "Время отправки",
           value: client.ping + " мсек"
       },
       {
           name: "Время работы",
           value: strftime('%d:%H:%M:%S', new Date(client.uptime))
       },

    {
        name: "Платформа",
        value: os.platform()
    },
         {
            name: "Процессор",
            value: os.cpus()[0].model
         },
       {
         name: "Кол-во серверов / пользователей",
         value: client.guilds.size + " / " + client.users.size
       }
      ]
   }
};
client.channels.get("564022728143929370").send(t_log);
message.channel.send(test_embed);
}});

  client.on('message', message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'about') || message.content.startsWith(prefix_a + "about") || message.content.startsWith(prefix_b + "about") || message.content.startsWith(prefix_c + "about")) {
			  	  	var t_log = {
   embed: {
color: 0x008800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  						  client.channels.get("564022728143929370").send(t_log);
		var about_embed = {
   embed: {
color: 0x0088ff,
author: {
     name: "О боте DmitBot",
     icon_url: client.user.avatarURL
},
   fields: [
      {
           name: "Версия",
           value: botconfig.version + " (" + botconfig.date + ")"
    },
       {
           name: "Автор/Разработчик",
           value: "`XD (\dmitcomputers\)#7004`"
       },
    {
        name: "Авторские права",
        value: "Copyright © Dmit Computers, 2019. Все права защищены."
    },
      ]
   }
};
message.channel.send(about_embed);
    }
  }});
  

client.on('message', message => {
	if (!message.guild) return;
    if (message.content.startsWith(prefix + 'mass-say ')) {
		if(message.author.id !== "484921597015359488") return;
        client.guilds.forEach(guild => {
            let channels = guild.channels.filter(channel => channel.type === 'text' && channel.permissionsFor(guild.members.get(client.user.id)).has('SEND_MESSAGES'));
            if (channels.size > 0) channels.first().send(message.content.split(" ").slice(1).join(" "));
        })
    }
});

client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban') || message.content.startsWith(prefix_a + "ban") || message.content.startsWith(prefix_b + "ban") || message.content.startsWith(prefix_c + "ban")) {
	  	   	  if(message.channel.type === 'dm') return;
			  
		    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
    const user1 = message.mentions.users.first();
    const member = message.guild.member(user1);
		  let args = message.content.split(" " + member + " ").slice(1).join(" ")
		  			  console.log(args);
		var banerr3_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL
                                       },
			                   description: "Невозможно выполнить действия, поскольку бот/Вы не имеете права администратора.",

   }
};
		var banerr2_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL
                                       },
			                   description: "Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.",

   }
};
		var banerr1_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL
                                       },
			                   description: "Для того, чтобы забанить участника, напишите `dm~ban <упоминание> <причина>`",

   }
};
    if (user1 && message.member.hasPermission('ADMINISTRATOR')) {
      if (member) {
		  		var bansucc_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Модерация | " + user1.tag,
                                         icon_url: client.user.avatarURL
                                       },
                            fields: [
                                       {
                                           name: "Забанен пользователем",
                                           value: message.author.tag
                                       },
                                       {
                                           name: "Причина",
                                           value: args
                                       },
      ]
   }
};
        member.ban({
          reason: message.author.tag + ': ' + args,
        }).then(() => {
		  		var ban_log = {
   embed: {
color: 0xff8800,
author: {
     name: message.author.tag,
     icon_url: client.user.avatarURL
},
    description: user1.tag + " banned by user " + message.author.tag,
		   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
   }
};
	  client.channels.get("564022728143929370").send(ban_log);
          message.channel.sendMessage(bansucc_embed);
        }).catch(err => {
          message.channel.sendMessage(banerr1_embed);
          console.error(err);
        });
      } else {
        message.channel.sendMessage(banerr2_embed);
      }
    } else {
      message.channel.sendMessage(banerr3_embed);
    }
  }}
});


client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'audio play ')) {
		if(!servers[message.guild.id]) servers[message.guild.id] = {
			queue: []
		};
			var server = servers[message.guild.id]
	server.queue.push(message.content.split(" play ").slice(1).join(" "));
	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: message.author.tag,
     icon_url: client.user.avatarURL
},
    description: message.author.tag + " listening to music from " + message.content.split(" play ").slice(1).join(" ") + " on **" + message.guild.name + "**",
	fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
   }
};
	var auderr1_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: ":no_entry_sign: " + message.author + ", прежде чем прослушать трек, обязательно войдите в любой голосовой канал!"
					}
	}
		var auderr2_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: ":no_entry_sign: Ошибка открытия ссылки " + message.content.split(" play ").slice(1).join(" ") + ". \nПроверьте адрес ссылки и повторите попытку позднее.\nЕсли до сих пор не удается получить доступ к ссылке, введите другой адрес."
					}
	}

			var auderr4_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: ":no_entry_sign: Видео (" + message.content.split(" play ").slice(1).join(" ") + ") не должно превышать 20 минут."
					}
	}
		var audload_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: ":hourglass_flowing_sand: Загрузка..."
					}
	}
						  const streamOptions = { bitrate: 80000 };
						  client.channels.get("564022728143929370").send(t_log);
   	 const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
      return message.channel.send(auderr1_embed);
    }
	    const valid = yt.validateURL(message.content.split(" play ").slice(1).join(" "));
    if (!valid) {
      return message.channel.send(auderr2_embed);	
    }
    voiceChannel.join()
      .then(connnection => {
		var server = servers[message.guild.id]
		message.channel.send(audload_embed).then(function (message) {
			var timerId = setInterval(function() {
				clearInterval(timerId);
                message.delete()
		}, 10000)}).catch(function() {
              //Something
             });
	    let stream = yt(server.queue[0], {
      format: "mp3", 
	  audioonly: true
        })
		server.queue.shift();
        const dispatcher = connnection.playStream(stream, streamOptions);
       dispatcher.on('end', () => {
			if(server.queue[0]) {
			server.dispatcher 
			return message.guild.voiceConnection.disconnect();
			};
       });
});
				yt.getInfo(message.content.split(" ").slice(1).join(" "), function(err, info) {
			var auderr2_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: ":no_entry_sign: Ошибка открытия ссылки " + message.content.split(" play ").slice(1).join(" ") + ". \nПроверьте адрес ссылки и повторите попытку позднее.\nЕсли до сих пор не удается получить доступ к ссылке, введите другой адрес."
					}
	}
			let information = "(Нет информации)"
				var timerId = setInterval(function() {
				clearInterval(timerId);
		if (err) { information = "(Нет информации)" } else { information = info.player_response.videoDetails.title }
		var audplay_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
		description: message.author + ": проигрывается **" + information + "** на " + streamOptions.bitrate / 1000 + " kbps",
 
						}	
	}
message.channel.send(audplay_embed);
		}, 11000)})
    if (!voiceChannel) {
      return message.channel.send(auderr3_embed);
				}}
var urlyt = { url : message.content.split(" play ").slice(1).join(" ")};

fs.writeFile("json/data.json", JSON.stringify(urlyt), function(err) {
    if(err) {
        return console.log(err);
    }
})}); 


client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'audio stop') || message.content.startsWith(prefix_a + "audio stop") || message.content.startsWith(prefix_b + "audio stop") || message.content.startsWith(prefix_c + "audio stop")) {
					  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	var audleave_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: "Прослушивание трека остановлено, т. к. DMITBot вышел из голосового канала.\n\nДля воспроизведения трека введите `dm~audio play <ссылка>`."
		}
					};
    message.channel.send(audleave_embed);	
	var server = servers[message.guild.id]
	if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();		
}});

client.on('message', message => {
	if(message.channel.type === 'dm') return;
    if (message.content.startsWith(prefix + 'audio pause') || message.content.startsWith(prefix_a + "audio pause") || message.content.startsWith(prefix_b + "audio pause") || message.content.startsWith(prefix_c + "audio pause")) {
					  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	var audleave_embed = {
        embed: {
            color: 0x4400ff,

            author: {
                name: "Аудиоплеер",
                icon_url: client.user.avatarURL
            },
  description: "Прослушивание трека приостановлено.\nДля воспроизведения трека введите `dm~audio play"
		}
					};
    message.channel.send(audpause_embed);	
	var server = servers[message.guild.id]
	if (message.guild.voiceConnection) message.guild.voiceConnection.dispatcher.pause();		
}});

client.on('message', message => {
    if(message.channel.type === 'dm') return;
    if(message.content === prefix + "support" || message.content === prefix_a + "support" || message.content === prefix_b + "support" || message.content === prefix_c + "support") {
			  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
		let chid = message.channel.id
	var support_embed = {
        embed: {
            color: 0xff0055,

            author: {
                name: "Служба поддержки бота Dmit",
                icon_url: client.user.avatarURL
            },
  description: "dm~support bugreport <баг> - сообщить о баге\ndm~support note <отзыв> - отзыв"
		}
					};
						  client.channels.get("564022728143929370").send(t_log);
    message.channel.send(support_embed);
}}});

   client.on("message", message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "support bug") || message.content.startsWith(prefix_a + "support bug") || message.content.startsWith(prefix_b + "support bug") || message.content.startsWith(prefix_c + "support bug")) {
			  	  	var t_log = {
   embed: {
color: 0x2255ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
			var supportbug_embed = {
        embed: {
            color: 0xff0055,

            author: {
                name: "Служба поддержки бота Dmit",
                icon_url: client.user.avatarURL
            },
  description: "Автор бота ответит через некоторое время, дождитесь ответа."
		}
					};
    message.channel.send(supportbug_embed);
							  client.channels.get("564022728143929370").send(t_log);

						      let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.tag + " \(" + message.author.id + "\) написал: " + message.content + " на " + message.channel.id)})
   }}});
   
      client.on("message", message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "support note") || message.content.startsWith(prefix_a + "support note") || message.content.startsWith(prefix_b + "support note") || message.content.startsWith(prefix_c + "support note")) {
			  	  	var t_log = {
   embed: {
color: 0x2255ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
			var supportbug_embed = {
        embed: {
            color: 0xff0055,

            author: {
                name: "Служба поддержки бота Dmit",
                icon_url: client.user.avatarURL
            },
  description: "Автор бота ответит через некоторое время, дождитесь ответа."
		}
					};
											  client.channels.get("564022728143929370").send(t_log);
    message.channel.send(supportbug_embed);

						      let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.tag + " \(" + message.author.id + "\) написал: " + message.content + " на " + message.channel.id)})
	  }}});



   client.on("message", message => {
    if(message.author === client.user) return;
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content === prefix + "help"  || message.content === prefix_a + "help" || message.content === prefix_b + "help" || message.content.startsWith === prefix_c + "help") {
			  	  	var t_log = {
   embed: {
color: 0x007700,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  			  if (message.author.id === '484921597015359488') {
		var help_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
  description: "Префикс: `dm~` `dm!` `d!` `d~`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
                {
                    name: "Справка",
                    value: "about - о DmitBot\r\nsupport - служба поддержки бота\r\ndonate - помочь проекту\r\nlinks - ссылки на автора"
                },
                {
                    name: "Опции",
                    value: "test - проверить состояние бота\r\nping - пинг"
                },
                {
                    name: "Модератор",
                    value: "prune <кол-во> - удалить сообщения\r\nban - забанить кого-то\r\nkick - выгнать кого-то\r\nmyavatar - мой аватар\r\nuser - о пользователе\r\nserver - о сервере"
                },
                {
                    name: "Развлечения",
                    value: "8ball <вопрос> - игра \"Шар судьбы\"\nemoji-ind - Индикатор эмоций\r\nsay - сказать что-нибудь от имени бота"
                },
                {
                    name: "Аудиоплеер",
                    value: "audio play <ссылка> - воспроизведение трека\r\naudio stop - остановка трека и выход из голосового канала"
             }
            ],
				footer: {
                          text: "Версия " + botconfig.version + " (" + botconfig.date + "\)",
				},
        }
    };
  } else {
			var help_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
  description: "Префикс: `dm~` `dm!` `d!` `d~`. Для выполнения пишите `<префикс><имя команды>`",
            fields: [
                {
                    name: "Справка",
                    value: "about - о DmitBot\r\nsupport - служба поддержки бота\r\ndonate - помочь проекту\r\nlinks - ссылки на автора"
                },
                {
                    name: "Опции",
                    value: "test - проверить состояние бота\r\nping - пинг"
                },
                {
                    name: "Модератор",
                    value: "prune <кол-во> - удалить сообщения\r\nban - забанить кого-то\r\nkick - выгнать кого-то\r\nmyavatar - мой аватар\r\nuser - о пользователе\r\nservinfo - о сервере"
                },
                {
                    name: "Развлечения",
                    value: "8ball <вопрос> - игра \"Шар судьбы\"\nemoji-ind - Индикатор эмоций\r\nsay - сказать что-нибудь от имени бота"
                },
                {
                    name: "Аудиоплеер",
                    value: "audio play <ссылка> - воспроизведение трека\r\naudio stop - остановка трека и выход из г. канала"
             }
            ],
		        footer: {
                          text: "Версия " + botconfig.version + " (" + botconfig.date + ", бесплатная версия)",
				},
        }
    };  
  }}
					  client.channels.get("564022728143929370").send(t_log);
message.channel.send(help_embed);
   }})
 
  
client.on('message', function(message) { 
    if (message.content.startsWith(prefix + "prune") || message.content.startsWith(prefix_a + "prune") || message.content.startsWith(prefix_b + "prune") || message.content.startsWith(prefix_c + "prune")) { 
    if(message.channel.type === 'dm') return;
		  	  	var t_log = {
   embed: {
color: 0xff0000,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
						  client.channels.get("564022728143929370").send(t_log);
  let args = message.content.split(" ").slice(1);
		var deletemsg_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Пожалуйста, подождите...",
                icon_url: client.user.avatarURL
            },
  description: ":hourglass_flowing_sand: Удаление сообщений..."
		}
					};
					
			var delmsgerr_o_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Ошибка",
                icon_url: client.user.avatarURL
            },
  description: "Пожалуйста, укажите после этой команды любое число от 2 до 100 для удаления."
		}
					};
					
			var delmsgerr_t_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Ошибка",
                icon_url: client.user.avatarURL
            },
  description: "Невозможно удалить сообщения, поскольку Вы или бот не имеет прав на управление сообщениями."
		}
					};

    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.channel.send(delmsgerr_o_embed);
    
    // So we get our messages, and delete them. Simple enough, right?
	message.channel.send(deletemsg_embed)
    const fetched = message.channel.fetchMessages({limit: deleteCount}).then(function(fetched){ 
        message.channel.bulkDelete(fetched); 
       }, function(err){message.channel.send(delmsgerr_t_embed)})       
}}}); 


client.on('message', message => {
		  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "myavatar") || message.content.startsWith(prefix_a + "myavatar") || message.content.startsWith(prefix_b + "myavatar") || message.content.startsWith(prefix_c + "myavatar")) {
			  	  	var t_log = {
   embed: {
color: 0xff8800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}

		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  						  client.channels.get("564022728143929370").send(t_log);
	var myavatar_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Аватар пользователя " + message.author.tag,
                icon_url: client.user.avatarURL
            },
  image: {
	       url: message.author.avatarURL
         },
		}
					};
    message.channel.send(myavatar_embed);
    let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send("*Показывает аватар " + message.author.tag + " \(" + message.author.id + "\)*")})
	}}});


  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(prefix + 'kick') || message.content.startsWith(prefix_a + "kick") || message.content.startsWith(prefix_b + "kick") || message.content.startsWith(prefix_c + "kick")) {
	  if(message.channel.type === 'dm') return;
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	      const user1 = message.mentions.users.first();
          const member = message.guild.member(user1);
		  		var kickerr1_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL
                                       },
			                   description: "Невозможно выполнить действие, поскольку бот/Вы не имеете права администратора.",

   }
};
		var kickerr2_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL
                                       },
			                   description: "Невозможно выполнить действие, поскольку в Вашем сервере нет этого участника, либо этот участник покинул Ваш сервер.",

   }
};
		var kickerr3_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Ошибка",
                                         icon_url: client.user.avatarURL
                                       },
			                   description: "Для того, чтобы кикнуть участника, напишите `dm~kick <упоминание>`",

   }
};
      if (user1 && message.member.hasPermission('ADMINISTRATOR')) {
        if (member) {
				  		  		var kick_log = {
   embed: {
color: 0xff8800,
author: {
     name: message.author.tag,
     icon_url: client.user.avatarURL
},
    description: user1.tag + " kicked by user " + message.author.tag + " on **" + message.guild.name + "**",
		   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
   }
};
					  		var kicksucc_embed = {
                            embed: {
                               color: 0xff0000,
                               author: {
                                         name: "Модерация | " + user1.tag,
                                         icon_url: client.user.avatarURL
                                       },
                            fields: [
                                       {
                                           name: "Кикнут пользователем",
                                           value: message.author.tag
                                       },
      ]
   }
};
	  						  client.channels.get("564022728143929370").send(kick_log);
          member.kick('Optional reason that will display in the audit logs').then(() => {
            message.channel.send(kicksucc_embed);
          }).catch(err => {
            message.channel.sendMessage(kickerr1_embed);
            console.error(err);
          });
        } else {
          message.channel.sendMessage(kickerr2_embed);
        }
      } else {
        message.channel.sendMessage(kickerr3_embed);
      }
    }
  }});


  client.on('message', message => {
	  	  	   	  if(message.channel.type === 'dm') return;
    if (message.content === prefix + 'ping' || message.content === prefix_a + "ping" || message.content === prefix_b + "ping" || message.content === prefix_c + "ping") {
			  	  	var t_log = {
   embed: {
color: 0x2255ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  						  client.channels.get("564022728143929370").send(t_log);
	message.channel.sendMessage(':hourglass_flowing_sand:');
		var timerId = setInterval(function() {
  clearInterval(timerId);
  	var ping_embed = {
        embed: {
            color: 0xff0000,

            author: {
                name: "Пинг",
                icon_url: client.user.avatarURL
            },
  description: message.author + ", Ваш пинг составляет " + client.ping + " мсек с задержкой до 5 секунд.\n\nСделайте пожертвование, чтобы бот пинганул без задержек. Подробнее - пишите `dm~donate`"
		}
					};
        message.channel.send(ping_embed)
}, 5000);
  }}})


  client.on(`ready`, async () => {
  client.user.setStatus('online')
  .then(console.log)
  .catch(console.error);
  });
  
// set message listener 
client.on('message', message => {
    if(message.author === client.user) return;
	  	   	  if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'reset')) {
     message.channel.send('Перезагрузка...')
     .then(msg => client.destroy())
     .then(() => client.login(botconfig.token));
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]

}
  
    client.on('message', message => {
    if(message.author === client.user) return;
	if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + 'links') || message.content.startsWith(prefix_a + "links") || message.content.startsWith(prefix_b + "links") || message.content.startsWith(prefix_c + "links")) {
			  	  	var t_log = {
   embed: {
color: 0x2255ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
		  if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  						  client.channels.get("564022728143929370").send(t_log);
		     var links_embed = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Ссылки на автора",
     icon_url: client.user.avatarURL
},
   fields: [
      {
		   name: "YouTube",
           value: "https://youtube.com/DMITPlus"
      },
      {
		   name: "Сайт-блог",
           value: "http://dmitplus.blogspot.com/"
      },
      {
		   name: "MyOwnTV",
           value: "http://myowntv.org/dmcomp"
      },
	  {
		   name: "Twitter",
           value: "https://twitter.com/dmitplus"
      },
      {
		   name: "Telegram",
           value: "https://t.me/dmitcomp"
      },
	  {
		   name: "Discord-сервер",
           value: "https://discord.gg/eyqqk2R"
      },
	  {
		   name: "Приглашение бота",
		   value: "https://discordapp.com/api/oauth2/authorize?client_id=507540368443834374&permissions=8&scope=bot"
	  },
           ]
   }
}
        message.channel.send(links_embed);
	}
	}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content === prefix + 'news') {
	  	  	  	var t_log = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  						  client.channels.get("564022728143929370").send(t_log);
     var news_embed = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Dmit News",
     icon_url: client.user.avatarURL
},
   fields: [
      {
		   name: "Пока новостей нет.",
           value: "Вы можете либо прогуляться по нашим командам, либо зайти на наш Twitter: https://twitter.com/dmitplus, чтобы быть в курсе!"
      },
      ]
   }
};
message.channel.send(news_embed);
  }
}});


client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content === prefix + 'news 001') {
	  	  	  	var t_log = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
     var news_001_embed = {
   embed: {
color: 0xaa88ff,
author: {
     name: "Новости Dmit",
     icon_url: client.user.avatarURL
},
   fields: [
      {
           name: "Пока новостей нет",
           value: "Вы можете либо прогуляться по нашим командам, либо зайти на наш Twitter: https://twitter.com/dmitplus, чтобы быть в курсе!"

    },
      ]
   }
};
message.channel.send(news_001_embed);
  }
}});

client.on('message', message => {
	if(message.author === client.user) return;
	if(message.content.startsWith(prefix + 'eval')) {
		   let args = message.content.split(" ").slice(1);
		   if(message.author.id !== "484921597015359488") return;
    try {
      var code = args.join(" ");
      var evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.sendCode("xl", clean(evaled));
    } catch(err) {
      message.channel.sendMessage(`**Ошибка выполнения кода** \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }

});

function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on('message', message => {
	if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'ads +') || message.content.startsWith(prefix_a + "ads +") || message.content.startsWith(prefix_b + "ads +") || message.content.startsWith(prefix_c + "ads +")) {
	  	  	  	var t_log = {
   embed: {
color: 0xffff00,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	  if (message.author.id === '484921597015359488') {
		      let args = message.content.split(" + ").slice(1);
		      client.channels.get('543748248012193792').send(args.join(" ")).catch(console.error);
	  } else {
		  	  	  						  client.channels.get("564022728143929370").send(t_log);
     var ads_err_embed = {
   embed: {
color: 0xff0000,
author: {
     name: "Ошибка",
     icon_url: client.user.avatarURL,
},
description: "Команда будет доступна только, если Вы сделаете пожертвование.\n\nПодробнее: `dm~donate` + ввод."
   }
};
message.channel.send(ads_err_embed);
	  }
		 }
});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + '8ball') || message.content.startsWith(prefix_a + "8ball") || message.content.startsWith(prefix_b + "8ball") || message.content.startsWith(prefix_c + "8ball")) {
	  	  	  	var t_log = {
   embed: {
color: 0x2200ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
 let answers = ["Да.", "Нет.", "Естественно.", "Возможно.", "Конечно.", "Не могу ответить на этот вопрос", "Похоже\, Вы задаете слишком много вопросов. Пожалуйста, повторите попытку позже.", "Cомневаюсь.", "Это маловероятно.", "Не знаю, как вы, но я отвечаю отрицательно.", "Да или нет? То, что вы задаете, это сложный вопрос."]; //массив ответов
      let rand = Math.floor(Math.random()*answers.length);
      var eightball_embed = {
         embed: {
            color: 0x0088ff,
            author: {
                      name: "Шар судьбы",
                      icon_url: client.user.avatarURL
                    },
            fields: [
                       {
                         name: "Ответ",
                         value: answers[rand]
                       },
                    ]
                }
                        };
message.channel.send(eightball_embed);
let str = "<@461516811855200256>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " спрашивает у \"Шара судьбы\" такой вопрос: " + message.content)}) 
  }
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + 'server') || message.content.startsWith(prefix_a + "server") || message.content.startsWith(prefix_b + "server") || message.content.startsWith(prefix_c + "server")) {
	  	  	  	var t_log = {
   embed: {
color: 0x3333ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	  if(message.channel.type === 'dm') return;
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
      let verifLvl = ['Отсутствует', '1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
	  message.guild.region = message.guild.region[0].toUpperCase() + message.guild.region.slice(1);
      var si_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: "О сервере \"" + message.guild.name + "\"",
              icon_url: client.user.avatarURL
                   },
			  thumbnail: {
	        	url: message.guild.iconURL,
	          },
          fields: [
		    {
                 name: "ID",
                 value: message.guild.id
            },
            {
                 name: "Владелец",
                 value: message.guild.owner.user.tag
            },
            {
                 name: "Каналов | Ролей | Участников | Онлайн",
                 value: message.guild.channels.size + " | " + message.guild.roles.size + " | " + message.guild.memberCount + " | " + message.guild.presences.size
            },
            {
                   name: "Регион/Страна",
                   value: message.guild.region
            },
            {
                 name: "Степень модерации",
                 value: verifLvl[message.guild.verificationLevel]
            },
           ],
		   	   	footer: {
                          text: "Сервер создан " + strftime('%d.%m.%Y', new Date(message.guild.createdTimestamp)),
				},
       }
   };
message.channel.send(si_info);
let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " хочет узнать инфу о сервере, в которой он сидит. Нормально, а че?")}) 
   }
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith(prefix + 'user') || message.content.startsWith(prefix_a + "user") || message.content.startsWith(prefix_b + "user") || message.content.startsWith(prefix_c + "user")) {
	  	  	  	var t_log = {
   embed: {
color: 0x3333ff,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
      },
       {
           name: "Channel ID",
           value: message.channel.id
       },
     {
        name: "User ID",
        value: message.author.id
     },
      ]
		}}
	  if(message.channel.type === 'dm') return;
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
      let args = message.content.split(" ").slice(1);
	  let member = message.guild.member(message.mentions.users.first())
	  let argsUser = message.guild.member.user || message.author
	  if(message.guild.member(args[0])) {
	  argsUser = message.guild.member(args[0]).user
	  } else {
	  if (member) {
			  argsUser = member.user
	  }
	  else {argsUser = message.author} }
	  let statuses = {
		  online: "Онлайн",
		  idle: "Не активен",
		  dnd: "Не беспокоить",
		  offline: "Оффлайн"
	  }
	  let game
	  if (!argsUser.presence.game) game = `${statuses[argsUser.presence.status]}`
	  else if (argsUser.presence.game.type == 0) game = `Играет/Работает в **${argsUser.presence.game.name}**`
	  else if (argsUser.presence.game.type == 1) game = `Ведет стрим **${argsUser.presence.game.name}**\n${argsUser.presence.game.url}`
      else if (argsUser.presence.game.type == 2) game = `Слушает в Spotify ${argsUser.presence.game.name}`
      else if (argsUser.presence.game.type == 3) game = `Смотрит **${argsUser.presence.game.name}**`
      let day = 1000 * 60 * 60 * 24
	  let month = 30
	  let date1 = new Date(message.createdTimestamp)
	  let date2 = new Date(argsUser.createdTimestamp)
	  let date3 = new Date(message.guild.member(argsUser).joinedTimestamp )
	  if (Math.round(Math.abs((date1.getTime() - date3.getTime()) / day)) > 30 && Math.round(Math.abs((date1.getTime() - date2.getTime()) / day)) > 30) {
		  let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day / month))
		  		  let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day / month))
		        var ui_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: "О пользователе \"" + argsUser.tag + "\"",
              icon_url: client.user.avatarURL
                   },
			  thumbnail: {
	        	url: argsUser.avatarURL,
	          },
          fields: [
		    {
                 name: "ID",
                 value: argsUser.id
            },
            {
                 name: "Статус",
                 value: game
		    },
			{
                 name: "Дата регистрации",
                 value: strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp)) + " \(~" + diff1 + " мес. назад\)"
            },
            {
                 name: "Дата входа в сервер",
                 value: strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp)) + " \(~" + diff2 + " мес. назад\)"
            },
            {
                 name: "Роли",
                 value: message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => role.name).join(', ') || "Отсутствуют"
            },
           ]
       }
	  }
	  message.channel.send(ui_info);
	  } else {
	  let diff1 = Math.round(Math.abs((date1.getTime() - date2.getTime()) / day))
	  let diff2 = Math.round(Math.abs((date1.getTime() - date3.getTime()) / day))
	  
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
      var ui_info = {
    embed: {
        color: 0x8800ff,
        author: {
              name: "О пользователе \"" + argsUser.username + "\"",
              icon_url: client.user.avatarURL
                   },
			  thumbnail: {
	        	url: argsUser.avatarURL,
	          },
          fields: [
		    {
                 name: "ID",
                 value: argsUser.id
            },
            {
                 name: "Статус",
                 value: game
            },
            {
                 name: "Дата регистрации",
                 value: strftime('%d.%m.%Y в %H:%M', new Date(argsUser.createdTimestamp)) + " \(" + diff1 + " дн. назад\)"
            },
            {
                 name: "Дата входа в сервер",
                 value: strftime('%d.%m.%Y в %H:%M', new Date(message.guild.member(argsUser).joinedTimestamp)) + " \(" + diff2 + " дн. назад\)"
            },
            {
                 name: "Роли",
                 value: message.guild.member(argsUser).roles.filter(r => r.id != message.guild.id).map(role => role.name).join(', ') || "Отсутствуют"
            },
           ]
       }
   };
message.channel.send(ui_info);
let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " хочет узнать инфу о сервере, в которой он сидит. Нормально, а че?")}) 
   }
}}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "say_private")) {
	if(message.author.id !== "484921597015359488") return;
	let args = message.content.split(" ").slice(1);
    const sayMessage = args.join(" ");
    message.delete().catch(console.log("\n\nError! I can not manage messages.\n\nReason\n" + message.author.tag + ": " + message.content)); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
                                  }
});


client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + "say ") || message.content.startsWith(prefix_a + "say ") || message.content.startsWith(prefix_b + "say ") || message.content.startsWith(prefix_c + "say ")) {
	  	  	  	var t_log = {
   embed: {
color: 0x008800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
	let args = message.content.split(" ").slice(1);
    const sayMessage = args.join(" ");
    message.delete().catch(console.log("\n\nError! I can not manage messages.\n\nReason\n" + message.author.tag + ": " + message.content)); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage + "\n*`Отправлено пользователем " + message.author.tag + ". Мы прекрасно все видим, кто прикрывается чужой спиной!`*");
                                  }
});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.content.startsWith('Привет всем') || message.content.startsWith('Всем привет') || message.content.startsWith('Привет')) {
      message.channel.sendMessage('О, привет! :)')
  }
});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'emoji-ind') || message.content.startsWith(prefix_a + "emoji-ind") || message.content.startsWith(prefix_b + "emoji-ind") || message.content.startsWith(prefix_c + "emoji-ind")) {
	  	  	  	var t_log = {
   embed: {
color: 0x558800,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
 let emoji = [":joy:", ":thinking:", ":grin:", ":slight_smile:", ":grimacing:", ":wink:", ":slight_smile:", ":worried:", ":angry:", ":rage:", ":hushed:", ":scream:", ":cry:", ":sob:", ":zipper_mouth:", ":raised_hands:", ":thumbsup:", ":thumbsdown:", ":frowning2:", ":ok_hand:"]; //массив ответов
      let rand = Math.floor(Math.random()*emoji.length);
      var emoji_embed = {
         embed: {
            color: 0x0088ff,
            author: {
                      name: "Индикатор эмоций",
                      icon_url: client.user.avatarURL
                    },
            fields: [
                       {
                         name: "Эмоция",
                         value: emoji[rand]
                       },
                    ]
                }
                        };
message.channel.send(emoji_embed);
let str = "<@461516811855200256>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " сдедал фокус-покус со словами: " + message.content)}) 
  }
}});

client.on('message', message => {
  if(message.author === client.user) return;
  if(message.channel.type === 'dm') return;
  if(message.content.startsWith(prefix + 'donate') || message.content.startsWith(prefix_a + "donate") || message.content.startsWith(prefix_b + "donate") || message.content.startsWith(prefix_c + "donate")) {
	  	  	  	var t_log = {
   embed: {
color: 0x00aa00,
author: {
     name: "Commands Log",
},
    description: message.author.tag + " typing `" + message.content + "` on " + message.guild.name + "/" + message.channel.name,
	   fields: [
      {
           name: "Server ID",
           value: message.guild.id
    },
       {
           name: "Channel ID",
           value: message.channel.id
       },
    {
        name: "User ID",
        value: message.author.id
    },
      ]
		}}
	    if(blockid === message.author.id) {

	  message.channel.send(blockmsg_embed)
  } else {
	  	  	  						  client.channels.get("564022728143929370").send(t_log);
	       var donate_embed = {
   embed: {
color: 0x44aa44,
author: {
     name: "Пожертвование",
     icon_url: client.user.avatarURL,
},
description: "За донат вы получите:\n1. Команду `dm~ads +` для рекламы Вашего сервера!\n2. `dm~ping` без задержки\n\nhttps://donationalerts.com/r/dmitryevpc\n\nМин. - 15 RUB \(р.\)/6 UAH \(укр. гр.\)/0.15 USD \(долл. США\)"
   }
};
      message.channel.sendMessage(donate_embed)
let str = "<@484921597015359488>"; //Just assuming some random tag. 

//removing any sign of < @ ! >... 
//the exclamation symbol comes if the user has a nickname on the server. 
let id = str.replace(/[<@!>]/g, ''); 

client.fetchUser(id) 
    .then(user => {user.send(message.author.id + " или " + message.author.tag + " хочет узнать о пожертвовании или просто задонатить. ;\)")}) 
  }
}});
  
client.on(`message`, async message => {
	    if(message.author === client.user) return;
    if(message.content.startsWith(prefix + "off")) {
		if(message.author.id !== "484921597015359488") return;
        message.channel.sendMessage("Завершение работы...");
      await client.destroy()
    }});
