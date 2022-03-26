const ytdl = require('ytdl-core')
const { createAudioResource, StreamType, createAudioPlayer, joinVoiceChannel ,getVoiceConnection} = require('@discordjs/voice'); 

const voiceDiscord = require('@discordjs/voice')
const {  NoSubscriberBehaviorn , AudioPlayerStatus } = require('@discordjs/voice');

  const items = [
"أعوذ بكلمات الله التامات من شر ما خلق",
"رضيت بالله ربا وبالاسلام دينا وبمحمد صلى الله عليه وسلم نبيا",
"الحمد لله الذي أحيانا بعد ما أماتنا وإليه النشور",
"ربنا لا تدع لنا ذنبا إلا غفرته ولا هما إلا فرجته ولا مريضا إلا شفيته ولا ميتا إلا رحمته ولا طالبا أمرا من أمور الخير إلا سهلته له ويسرته",
"اللهم صل وسلم على نبينا محمد",
"اللهم اني اعوذ بك من عذاب القبر وفتنة المسيح الدجال",
"اللهم إني أسالك قبل الموت توبة ، وعند الموت شهادة ، وبعد الموت جنة ونعيمًا",
"أستغفر الله وأتـوب إليه",
"اللهم بك أصبحنا، وبك أمسينا، وبك نحيا، وبك نموت، وإليك النشور",
"اللهم قني عذابك يوم تبعث عبادك",
"اللهم يامثبت القلوب ثبت قلبي على دينك",
"حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم",
"اللهم اني اسالك الجنة واعوذ بك من النار",
"اللهم إني أسألك علما نافعا ورزقا واسعا وعملا متقبلا",
"بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم",
"اللهم ارزقنا لذة طاعتك واحرمنا لذة معصيتك",
"اللهم اجعلنا مقيمين للصلاة لنستريح بها لا لنستريح منها",
"ان الصلاة كانت على المؤمنين كتابا موقوتا",
"ربي اني ظلمت نفسي ظلما كثيرا فاغفر لي وارحمني",
"اللهم اجرني من النار",
"اللهم عافني في بدني اللهم عافني في بصري",
"اللهـم أعنى على ذكرك وشكرك وحسن عبادتك",
"يا رب لك الحمد كما ينبغي لجلال وجهك وعظيم سلطانك",
"سبحان الله عدد ماخلق",
"سبحان الله والحمد لله لا إله إلا الله والله أكبر",
"اللهم أنت ربي لا إله الا انت اغفر لي وارحمني واصفح عني يا رحيم يا كريم",
"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
"اللهم إني أعوذ بك من جهد البلاء، ودرك الشقاء، وسوء القضاء، وشماتة الأعداء",
"اللهم إني أسألك الهدى، والتقى، والعفاف، والغنى",
"اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل",
"اللهم رحمتك أرجو فلا تكلني إلى نفسي طرفة عين، وأصلح لي شأني كله، لا إله إلا أنت",
"اللهم إنك عفو كريم تحب العفو فاعف عني",
"اللهم إني أعوذ بك أن أشرك بك وأنا أعلم، وأستغفرك لما لا أعلم",
"اللهم انفعني بما علمتني، وعلمني ما ينفعني، وزدني علماً",
"اللهم إني أسألك علماً نافعاً، ورزقاً طيباً، وعملاً متقبلاً",
"رب اغفر لي، وتب علي، إنك أنت التواب الغفور",
"اللهم أعنا على ذكرك، وشكرك، وحسن عبادتك",
"اللهم إني أسألك إيماناً لا يرتد، ونعيماً لا ينفذ، ومرافقة محمد صلى الله عليه وسلم في أعلى جنة الخلد",
"اللهم إني أسألك عيشة نقية، وميتة سوية،",
"اللهم ثبتني واجعلني هادياً مهدياً",
"اللهم اكفنى بحلالك عن حرامك وأعنى بفضلك عمن سواك",
"اللهم إنّي أعوذ بك من الكفر والفقر",
"لا إله إلا الله العظيم الحليم لا إله الله رب العرش العظيم لا إله إلا الله رب السماوات ورب الأرض ورب العرش العظيم",
"لا إله إلا أنت سبحانك إني كنت من الظالمين ",
"اللهم أجعل في قلبي نورا وفي لساني نورا ",
"اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام",
"سبحانك اللهم وبحمدك أشهد أن لا إله إلا أنت وأستغفرك وأتوب إليك",
"رب أغفر لي وأرحمني وتب علي إنك أنت التواب الغفور الرحيم",
"اللهم افتح لي أبواب رحمتك"
]
function quran(client,chid,gid) {
  if(!client) throw new Error('Please Provide Client - يرجى تحديد الكلاينت')

  if(!chid) throw new Error('Please Provide Channel id - يرجى تحديد ايدي الروم')

  if(!gid) throw new Error('Please Provide guild id - يرجى تحديد ايدي السيرفر')

  const guild = client.guilds.cache.get(gid)
  if(!guild) throw new Error('invalid guild id 🔧')
  const channel = 
guild.channels.cache.get(chid)

  if(!channel) throw new Error('icant find this channel or you the channel is not in prvided guild id')
  

  const resource = createAudioResource(ytdl('https://youtu.be/Yh8hWrlz5qc'));

 const connect = joinVoiceChannel({
                channelId: chid,
                guildId: gid,
                adapterCreator:
                  guild.voiceAdapterCreator,
            })
  const player = createAudioPlayer()
    player.play(resource)
    connect.subscribe(player)
  player.on('idle', () => {
    
  if(!connect){
    
  joinVoiceChannel({
                channelId: chid,
                guildId: gid,
                adapterCreator:
                  guild.voiceAdapterCreator,
            })
    const res = createAudioResource(ytdl('https://youtu.be/Yh8hWrlz5qc'));
    player.play(res)
    connect.subscribe(player)
    

}
  })
}

function azkar(client,chid,gid) {
  if(!client) throw new Error('Please Provide Client - يرجى تحديد الكلاينت')

  if(!chid) throw new Error('Please Provide Channel id - يرجى تحديد ايدي الروم')

  if(!gid) throw new Error('Please Provide guild id - يرجى تحديد ايدي السيرفر')

  const guild = client.guilds.cache.get(gid)
  if(!guild) throw new Error('invalid guild id 🔧')
  const channel = 
guild.channels.cache.get(chid)

  if(!channel) throw new Error('icant find this channel or you the channel is not in prvided guild id')
    function random(items) {
      return items[Math.floor(Math.random()*items.length)];
    
    
    }
  setInterval(function(){
  channel.send(`> ${random(items)}`)
    }, 3000)
  
}
module.exports = {quran,azkar}
