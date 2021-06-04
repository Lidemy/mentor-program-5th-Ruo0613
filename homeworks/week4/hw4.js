const request = require('request');

request({
    url: 'https://api.twitch.tv/kraken/games/top',
    headers: {
        'Client-ID': 'nlx1zrfudea4oqde2zytuz1ql3o53s',
        Accept: 'application/vnd.twitchtv.v5+json'
    }
}, (err, res, body) =>{
    if(err){
        return console.log('error', err);
    }
    let data;
    try{
        data = JSON.parse(body);
    }catch (err){
        console.log('error', err)
    }
    const list = data.top
    for(let game of list){ 
        console.log(game.viewers + ' ' + game.game.name)
    }
}
)