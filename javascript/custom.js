/**
 * Created by peter joseph on 7/18/2017.
 */


//function to display anonymous function

function displayAnym(){

    //setTimeout function

    setTimeout(function(){

        displayresult();

    },500)

}

//anonymous function

var displayresult = function(){

    document.getElementById('demo').style.display="block";

}


//function invokation

displayAnym();