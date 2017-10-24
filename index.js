const TelegramBot = require('node-telegram-bot-api');

const token = '	YOUR-BOT-TOKEN ';
const bot = new TelegramBot(token, {polling: true});

// ------ Commands ------------

// echo
bot.onText(/\/echo (.+)/, (msg, match) => {
	const chatId = msg.chat.id;
	const resp = match[1];

	bot.sendMessage(chatId, resp);
});

// напомни
var notes = [];

bot.onText(/\/напомни (.+) в (.+)/, (msg, match) => {
    var chatId = msg.chat.id;
    var text = match[1];
    var time = match[2];

    notes.push( { 'uid':chatId, 'time':time, 'text':text } );

	bot.sendMessage(chatId, 'Хорошо я обязательно вам напомню! Если не сдохну :)');
});

setInterval(function(){
    for (var i = 0; i < notes.length; i++){
        var curDate = new Date().getHours() + ':' + new Date().getMinutes();
        if ( notes[i]['time'] == curDate ) {
            bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы сейчас должны: '+ notes[i]['text']);
            notes.splice(i,1);
        }
    }
},1000); 

// img
bot.onText(/\/img/, (msg) => {
	const chatId = msg.chat.id;
	const url = 'http://cdn-s-static.arzamas.academy/storage/microrubric/36/preview_icon_picture-08ba567d-03fd-418a-8f4b-e505d2862896.png';

	bot.sendPhoto(chatId, url);
});

// mem
bot.onText(/\/mem/, (msg) => {
	const chatId = msg.chat.id;
	var memUrl = 'Mems/' + (Math.floor(Math.random() * (20 - 1)) + 1) + '.jpg';

	bot.sendPhoto(chatId, memUrl);
});

// loli
bot.onText(/\/loli/, (msg) => {
	const chatId = msg.chat.id;
	var loliUrl = 'Loli/' + (Math.floor(Math.random() * (11 - 1)) + 1) + '.jpg';

	bot.sendPhoto(chatId, loliUrl);
});

// шлюха
bot.onText(/\/шлюха/, (msg) => {
	const chatId = msg.chat.id;
	var whoreUrl = 'Whore/' + (Math.floor(Math.random() * (36 - 1)) + 1) + '.jpg';

	bot.sendPhoto(chatId, whoreUrl);
});

// ----------------------------

bot.on('message', (msg) => {

});