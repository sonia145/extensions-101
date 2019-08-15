var token, userId;

// so we don't have to write this out everytime #efficency
const twitch = window.Twitch.ext;


// callback called when context of an extension is fired 
twitch.onContext((context) => {
  console.log(context);
});


// onAuthorized callback called each time JWT is fired
twitch.onAuthorized((auth) => {
  // save our credentials
  token = auth.token; 
  userId = auth.userId; 

});

