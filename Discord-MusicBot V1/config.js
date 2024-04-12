module.exports = {
  Admins: ["UserID", "UserID"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "?", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://www.facebook.com/KeyyTii.TA/", //Support Server Link
  Token: process.env.Token || "OTQyNzA1NzA3NjE3MjMwODg4.YgoZGw.Qy0oKdTcPXAWFCDX8JRrSYj8kZs", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "942705707617230888", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "utKTW_lRmNM5r196oD6qgB4V_BFOcvL6", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lava.link",
    port: 80,
    pass: "youshallnotpass", 
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.KeyyTii.tech",
    port: 1234,
    pass: "CodingWithKeyyTii", 
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "7f7b190965b543cd89cc6baa91e8b811", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "1ae928dc6f7a414a9aac8894c69a353c", //Spotify Client Secret
  },
};
