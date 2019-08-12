
// Function that updates the options that viewers see  

function updateOptions() {
	// loads elements of the array into optionA drop down menu 
	$('#selectA').empty();
	$.each(options, function(i, p) {
	    $('#selectA').append($('<option></option>').val(p).html(p));
	});

	// loads elements of the array into optionB drop down menu
	$('#selectB').empty();
	$.each(options, function(i, p) {
	    $('#selectB').append($('<option></option>').val(p).html(p));
	});
}

// // Adding routes + JWT 

// // create the request options for our Twitch API calls
// const requests = {
//   set: createPOSTRequest('question'), //submit new question 
//   get: createGETRequest('questions') //display questions
// };

// function createPOSTRequest (method) {
//   return {
//     type: 'POST'
//     url: location.protocol + '//localhost:8081/' + method,
//     success: updateBlock,
//     error: logError
//   };
// }

// function createGETRequest (method) {
//   return {
//     type: 'POST'
//     url: location.protocol + '//localhost:8081/' + method,
//     success: updateBlock,
//     error: logError
//   };
// }


// function logError(_, error, status) {
//   console.log('EBS request returned '+status+' ('+error+')');
// }


