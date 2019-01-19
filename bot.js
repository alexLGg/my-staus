const Discord = require('discord.js');
const bot = new Discord.Client();
var answers = [
    `Єксклюзивные читы`,//Первый статус
    `Писать мне в лс`,//2 статус
    `ЧИТЫ ДЛЯ ВСЕ ИГР`
  ] 

  bot.on('ready', () => {
    let interval = setInterval (function () {
        var randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        bot.user.setPresence({
            game:{
                name:`${randomAnswer}`,
                type:"STREAMING",// что делает LISTENING - слушает PLAYING - играет WATCHING - смотрит STREAMING - стримит
                url:"https://www.twitch.tv/monstercat"
            }
        });
          }, 3 * 1000); // секунд  * 1000 от смены 2 статсу на 1
      console.log('Успешно установлено')
    });
/* чтобы ссделать статус надо после последнего статуса потавит ,
дале `3 статус` последний статус без ,
*/