var options = [] 


// Function to save the streamer's WYR options  
$(function(){
  $("#form").submit(function(e){
    $('input[type=checkbox]').each(function () {
      if (this.checked == true) {
        var option = $(this).val();
        options.push(option)
      }
    })
    /* Feel free to check that the array is in fact saving the options checked */
    //console.log(options)
                                   } )  
  })
