/**
 * Created by colinmiller on 10/30/15.
 */
valuesToUpload = {};

$(document).ready(function(){
    init();
    onClick();
    clearClick();
});

//click listener
function onClick (){
    $('.container').on('click', '.math', function(){
        var mathTypeBuilder = $(this).data('role');
        buildDataObject(mathTypeBuilder);
        sendData();
    });
}

//clearance click listener
function clearClick (){
    $('.container').on('click', '.clearance', function(){
        init();
    })
}

//initialization and clearing function
function init(){
    $('#resultDisplay').empty();
    valuesToUpload = {};
    $('#inputData').find('input[type=text]').val("");
}

//object constructor
function buildDataObject (mathTypeBuilder){

    valuesToUpload = {};
    //taking the math type from the html button and putting in object so server will know what maths to perform
    valuesToUpload.mathType = mathTypeBuilder;

    //stripping the form of data and putting it in the object
    $.each($('#inputData').serializeArray(), function(i, field){
        valuesToUpload[field.name] = field.value;
    });

    //clearing the form
    $('#inputData').find('input[type=text]').val("");

    return valuesToUpload;
}

//sending constructed object to server
function sendData (){

    $.ajax({
        type: "POST",
        url: "/data",
        data: valuesToUpload,
        beforeSend: function() {
            console.log('The data to send: ', valuesToUpload);
        },
        success: function(data){
            appendDom(data);
        }
    });
}

function appendDom (data){
    $('#resultDisplay').append('<p>Calculation Result: ' + data + '</p>');
}
