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


// img
bot.onText(/\/img/, (msg) => {
	const chatId = msg.chat.id;
	const url = 'http://cdn-s-static.arzamas.academy/storage/microrubric/36/preview_icon_picture-08ba567d-03fd-418a-8f4b-e505d2862896.png';

	bot.sendPhoto(chatId, url);
});

// command
bot.onText(/\/command/, (msg) => {
	const chatId = msg.chat.id;
	var Url = 'Folder/' + (Math.floor(Math.random() * (max - min)) + min) + '.jpg';

	bot.sendPhoto(chatId, Url);
});

// ----------------------------

bot.on('message', (msg) => {

});
