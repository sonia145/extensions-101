// todo: this array will be replaced with content from broadcaster via config service
var options = ["a", "b", "c"]

// function that loads elements of the array into optionA drop down menu 
$('#selectA').empty();
$.each(options, function(i, p) {
    $('#selectA').append($('<option></option>').val(p).html(p));
});

// function that loads elements of the array into optionB drop down menu
$('#selectB').empty();
$.each(options, function(i, p) {
    $('#selectB').append($('<option></option>').val(p).html(p));
});



