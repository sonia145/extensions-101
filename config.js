var token, userId;
var options = []

// so we don't have to write this out everytime 
const twitch = window.Twitch.ext;

// onContext callback called when context of an extension is fired 
twitch.onContext((context) => {
  //console.log(context);
});


// onAuthorized callback called each time JWT is fired
twitch.onAuthorized((auth) => {
  // save our credentials
  token = auth.token; //JWT passed to backend for authentication 
  userId = auth.userId; //opaque userID 
});


// when the config changes, save the new changes! 
twitch.configuration.onChanged(function(){
  console.log(twitch.configuration.broadcaster)
  console.log("in onChanged")
  if(twitch.configuration.broadcaster){
    console.log("config exists")
    try{
      var config = JSON.parse(twitch.configuration.broadcaster.content)
      //console.log(typeof config)
      if(typeof config === "object"){
        options = config
        updateOptions()
        //console.log(options)
      }else{
        console.log('invalid config')
      }
    }catch(e){
      console.log('invalid config')
    }
  }
})

function updateConfig(){
  //console.log('in set')
  //console.log(options)
  //console.log(typeof options)
  //console.log(JSON.stringify(options))
  twitch.configuration.set("broadcaster", "1", JSON.stringify(options))
  //console.log("has it been set?")
  //console.log(twitch.configuration.broadcaster.content)

}

// Function to save the streamer's WYR options  
$(function(){
  $("#form").submit(function(e){
    options = []
    $('input[type=checkbox]').each(function () {
      if (this.checked) {
        var option = $(this).val();
        //console.log(typeof option)
        //console.log(options.push(value))
        options.push(option)
      }
    })
    //console.log(options)
    //updateOptions()
    e.preventDefault()
    //console.log(options)
  })  
})
