<div align="center"> <br /> <p> <a href="https://replit.com/@Arzj/ramdan-event#index.js"><img src="https://media.discordapp.net/attachments/929433058610929725/957395466314715176/-1_orig.jpg" width="546" alt="ramadam" /></a> </p> <br />


## Install ?
**Require Discord.js V13 Or High.** 
```sh-session
npm i ramdan-event
```

## Quran Play Example :

**To Play Quran In Voice Channel You Need Voice , Guild id**
```js
const { Client, Intents } = require("discord.js"); 
const client = new Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES, ], });
const {quran,azkar} = require('ramdan-event')

const voicechannelid = 'id here'
const guildid = 'id here'


client.on('ready',() => {
quran(client,voicechannelid,guildid)
console.log('playing quran ❤')

} 

client.login('my super man token 🥲')
```


## Azkar Send :
**Send a Random Azkar Every 5 Minute To Specif Channel**
```js
const { Client, Intents } = require("discord.js"); 
const client = new Client({ intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_INVITES, ], });
const {quran,azkar} = require('ramdan-event')

const textchannelid = 'id here'
const guildid = 'id here'


client.on('ready',() => {
azkar(client,textchannelid,guildid)
console.log('sending azkar ❤')

} 

client.login('my super man token 🥲')
```

