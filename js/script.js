//js
// variable
var number1 = 5;
var number2 = 2;
var number3 = number1 + number2;

function calculation(){
    document.getElementById('value').innerHTML = number3;
}
//color change
function colorChange(){
    document.getElementById('c_c').style.color = "red";
}
//bulb on/off
function bulbOn(){
    document.getElementById('bulb').src = "on.gif";
}
function bulbOff(){
    document.getElementById('bulb').src = "off.gif";
}

//show date
function showDate(){
    document.getElementById('s_d').innerHTML = Date();
}
//text change
function textChange(){
    document.getElementById('t_c').innerHTML = "hello";
}


//jq
$(document).ready(function(){
      // hide
      $('#hide').on('click', function(){
        $('#tsh').hide();
    });
    $('#show').on('click', function(){
        $('#tsh').show();
    });
})