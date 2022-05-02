const env = require('./.env');
const { Telegraf } = require('telegraf');

const bot = new Telegraf(env.token);

let connections = [];
let firstNames = [];
let lastNames = [];
let telegramNumbers = [];
let emails = [];
let walletNumbers = [];
let instagramHandles = [];
let twitterHandles = [];
let register = [];

bot.launch();

bot.start((ctx) => {
	//console.log(connections);
	if(connections.indexOf(ctx.update.message.from.id) == -1)
	{
		connections.push(ctx.update.message.from.id);
		register[connections.indexOf(ctx.update.message.from.id)] = false;
		ctx.reply("Welcome to Legathum Airdrop Bot" + "\nUse /register to sign in");
		console.log(ctx.update.message.from.id + " register: " + register[connections.indexOf(ctx.update.message.from.id)] + "== START ==");
	}else{
		register[connections.indexOf(ctx.update.message.from.id)] = false;
		console.log(register[connections.indexOf(ctx.update.message.from.id)]);
		ctx.reply("Welcome to Legathum Airdrop Bot" + "\nUse /register to sign in");
		console.log(ctx.update.message.from.id + " register: " + register[connections.indexOf(ctx.update.message.from.id)] + "== START ==");
	}
})

bot.command('register', ctx =>{
	register[connections.indexOf(ctx.update.message.from.id)] = true;
	ctx.reply("Let's get started.\n" + 'Tell me your first name:');
	console.log(ctx.update.message.from.id + " register: " + register[connections.indexOf(ctx.update.message.from.id)] + "== REGISTER ==");
})

bot.command('confirm', ctx =>{
	if(twitterHandles[connections.indexOf(ctx.update.message.from.id)] != null){
	console.log(connections);
	(async() => {
		firstNames[connections.indexOf(ctx.update.message.from.id)]
                const db = require("./db");
                await db.insertUsers({ 
                	name: `${firstNames[connections.indexOf(ctx.update.message.from.id)] + " " + lastNames[connections.indexOf(ctx.update.message.from.id)]}`, 
                	telegram: `${telegramNumbers[connections.indexOf(ctx.update.message.from.id)].split("@")[telegramNumbers[connections.indexOf(ctx.update.message.from.id)].split("@").length - 1]}`, 
                	email: `${emails[connections.indexOf(ctx.update.message.from.id)]}`, 
                	wallet: `${walletNumbers[connections.indexOf(ctx.update.message.from.id)]}`, 
                	instagram: `${instagramHandles[connections.indexOf(ctx.update.message.from.id)].split("@")[instagramHandles[connections.indexOf(ctx.update.message.from.id)].split("@").length - 1]}`, 
                	twitter: `${twitterHandles[connections.indexOf(ctx.update.message.from.id)].split("@")[twitterHandles[connections.indexOf(ctx.update.message.from.id)].split("@").length - 1]}`
                })
                const usuarios = await db.selectUsers();
                console.log(usuarios);
                })();
    

    firstNames[connections.indexOf(ctx.update.message.from.id)] = null;
	lastNames[connections.indexOf(ctx.update.message.from.id)] = null;
	telegramNumbers[connections.indexOf(ctx.update.message.from.id)] = null;
	emails[connections.indexOf(ctx.update.message.from.id)] = null;
	walletNumbers[connections.indexOf(ctx.update.message.from.id)] = null;
	instagramHandles[connections.indexOf(ctx.update.message.from.id)] = null;
	twitterHandles[connections.indexOf(ctx.update.message.from.id)] = null;
	register[connections.indexOf(ctx.update.message.from.id)] = false;
    ctx.reply("We're almost done!" + "\n\nTo complete the process, follow us on our social media pages:\n\nTelegram - https://t.me/TokenLegathum\nInstagram - https://www.instagram.com/legathumtoken/\nTwitter - https://twitter.com/TokenLegathum");
    ctx.reply("Retweet the campaign: https://twitter.com/intent/retweet?tweet_id=1521129133358698497");
    console.log(ctx.update.message.from.id + " register: " + register[connections.indexOf(ctx.update.message.from.id)] + "== CONFIRM ==");
}else{
	ctx.reply("Please finish the process before using this command!");
}
});

bot.command('revise', ctx =>{
	firstNames[connections.indexOf(ctx.update.message.from.id)] = null;
	lastNames[connections.indexOf(ctx.update.message.from.id)] = null;
	telegramNumbers[connections.indexOf(ctx.update.message.from.id)] = null;
	emails[connections.indexOf(ctx.update.message.from.id)] = null;
	walletNumbers[connections.indexOf(ctx.update.message.from.id)] = null;
	instagramHandles[connections.indexOf(ctx.update.message.from.id)] = null;
	twitterHandles[connections.indexOf(ctx.update.message.from.id)] = null;

    ctx.reply("Ok, let's start over. Tell me your first name:");
    console.log(ctx.update.message.from.id + " register: " + register[connections.indexOf(ctx.update.message.from.id)] + "== REVISE ==");
});

bot.on('text', ctx =>{
	if(register[connections.indexOf(ctx.update.message.from.id)])
	{
		if(firstNames[connections.indexOf(ctx.update.message.from.id)] == null)
		{
			firstNames[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply('Nice to meet you, ' + ctx.update.message.text + ", now tell me your last name:");
		}else if(lastNames[connections.indexOf(ctx.update.message.from.id)] == null){
			lastNames[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply("Alright, now  I need some other info. First, send me your your Telegram handle:");
		}else if(telegramNumbers[connections.indexOf(ctx.update.message.from.id)] == null){
			telegramNumbers[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply('Now type in your email address:');
		}else if(emails[connections.indexOf(ctx.update.message.from.id)] == null){
			emails[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply('Your BEP20 wallet number:');
		}else if(walletNumbers[connections.indexOf(ctx.update.message.from.id)] == null){
			walletNumbers[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply("Your instagram handle:");
		}else if(instagramHandles[connections.indexOf(ctx.update.message.from.id)] == null){
			instagramHandles[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply("Your twitter handle:");
		}else if(twitterHandles[connections.indexOf(ctx.update.message.from.id)] == null){
			twitterHandles[connections.indexOf(ctx.update.message.from.id)] = ctx.update.message.text;
			ctx.reply('Now I just need you to confirm the all the info: ' +
			'\nName: ' + firstNames[connections.indexOf(ctx.update.message.from.id)] + " " + lastNames[connections.indexOf(ctx.update.message.from.id)] +
			'\nTelegram: @' + telegramNumbers[connections.indexOf(ctx.update.message.from.id)].split("@")[telegramNumbers[connections.indexOf(ctx.update.message.from.id)].split("@").length - 1] +
			'\nEmail: ' + emails[connections.indexOf(ctx.update.message.from.id)] +
			'\nBEP20 Wallet: ' + walletNumbers[connections.indexOf(ctx.update.message.from.id)] +
			'\nInstagram: @' + instagramHandles[connections.indexOf(ctx.update.message.from.id)].split("@")[instagramHandles[connections.indexOf(ctx.update.message.from.id)].split("@").length - 1] +
			'\nTwitter: @' + twitterHandles[connections.indexOf(ctx.update.message.from.id)].split("@")[twitterHandles[connections.indexOf(ctx.update.message.from.id)].split("@").length - 1] +
			'\n\nType /confirm to continue or /revise to redo the process.');
		}
	}else{
		ctx.reply("Sorry, I didn't understand that. Use /start try again");
	}
	console.log(ctx.update.message.from.id + " register: " + register[connections.indexOf(ctx.update.message.from.id)] + "== MESSAGE ==" +
				'\n\nName: ' + firstNames[connections.indexOf(ctx.update.message.from.id)] + " " + lastNames[connections.indexOf(ctx.update.message.from.id)] +
			'\nTelegram: @' + telegramNumbers[connections.indexOf(ctx.update.message.from.id)] +
			'\nEmail: ' + emails[connections.indexOf(ctx.update.message.from.id)] +
			'\nBEP20 Wallet: ' + walletNumbers[connections.indexOf(ctx.update.message.from.id)] +
			'\nInstagram: @' + instagramHandles[connections.indexOf(ctx.update.message.from.id)] +
			'\nTwitter: @' + twitterHandles[connections.indexOf(ctx.update.message.from.id)]);
})