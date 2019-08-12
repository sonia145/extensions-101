var token, userId;
var options = [];

// so we don't have to write this out everytime #efficency
const twitch = window.Twitch.ext;


// callback called when context of an extension is fired 
twitch.onContext((context) => {
  //console.log(context);
});


// onAuthorized callback called each time JWT is fired
twitch.onAuthorized((auth) => {
  // save our credentials
  token = auth.token; //JWT passed to backend for authentication 
  userId = auth.userId; //opaque userID 

});

// when the config changes, update the panel! 
twitch.configuration.onChanged(function(){
  //console.log(twitch.configuration.broadcaster)
  if(twitch.configuration.broadcaster){
    try{
      var config = JSON.parse(twitch.configuration.broadcaster.content)
      //console.log(typeof config)
      if(typeof config === "object"){
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


// TODO: add logic for hitting Submit on Panel View
$(function(){
  $("#form").submit(function(e){
    console.log('in function')
    if(!token) { 
      return console.log('Not authorized'); 
    }
    console.log('Submitting a question');
    var optionA = $("#selectA").val()
    var optionB = $("#selectB").val()

    //ajax call 
    $.ajax({
      type: 'POST',
      url: location.protocol + '//localhost:3000/question',
      data: JSON.stringify({first:optionA, second: optionB}),
      contentType: 'application/json',
      headers: { "Authorization": 'Bearer ' + token },
    });
  })  
});








