var token, userId;
var options = [];

// so we don't have to write this out everytime 
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

twitch.configuration.onChanged(function(){
  //checks if config is defined
  if(twitch.configuration.broadcaster){
    try{
      //Parse the array of options saved in broadcaster content
      var config = JSON.parse(twitch.configuration.broadcaster.content)
      //Check if the content is an object
      if(typeof config === "object"){
        //updates value of the options array to be the config content
        options = config
        updateOptions()
      }else{
        console.log('invalid config')
      }
    }catch(e){
      console.log('invalid config')
    }
  }
})
