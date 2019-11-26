/* Takes each item in the "options" array and displays it as an option in the drop down menu */

function updateOptions(){
    //loads elements of array into optionA drop down menu
    console.log('updateOptions hit')
    $('#selectA').empty();
    $.each(options, function(i, p) {
        $('#selectA').append($('<option></option>').val(p).html(p));
    });

    //loads elements of array into optionB drop down menu
    $('#selectB').empty();
    $.each(options, function(i, p) {
        $('#selectB').append($('<option></option>').val(p).html(p));
    });
}
