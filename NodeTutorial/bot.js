console.log('the bot is starting');

var Twit = require('twit');

var T = new Twit({
    consumer_key:         'HzE7Y4uluqJBd7ndUHsm4eVQc',
    consumer_secret:      'UJp0ysid2pzb8d6vhvjG5c3jIW1zX1UNwX8ZLRDF6BXaAKFwI1',
    access_token:         '893931772941094913-tjHubHE4BnlrS2DONxJl3sWAk3jEzt4',
    access_token_secret:  'a0gorrfaF35lB7csEOUlbBv0ExRKsOqUz4TvvrOtROAfD',
})

var params = {
    q: 'rainbow',
    count: 2
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text)
    }
}
