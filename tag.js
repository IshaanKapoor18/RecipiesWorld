// document.getElementById("data1").style.visibility = "hidden";
// document.getElementById("data1").style.visibility = "hidden";
function fun1(){
    alert("yes");
    document.getElementById("data1").style.visibility = "visible";
}

function first(){
    document.getElementById("data1").style.display = "none";
    document.getElementById("data2").style.display = "none";
    document.getElementById("data3").style.display = "none";
    document.getElementById("data4").style.display = "none";
    document.getElementById("data5").style.display = "none";
    document.getElementById("data6").style.display = "none";
    document.getElementById("data7").style.display = "none";
    document.getElementById("data8").style.display = "none";
    document.getElementById("data9").style.display = "none";
    document.getElementById("data10").style.display = "none";
    document.getElementById("data11").style.display = "none";
    document.getElementById("data12").style.display = "none";

    
}

function reset(){
    document.getElementById("check").innerHTML = "All: "
    document.getElementById("data1").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data7").style.display = "block";
    document.getElementById("data8").style.display = "block";
    document.getElementById("data9").style.display = "block";
    document.getElementById("data10").style.display = "block";
    document.getElementById("data11").style.display = "block";
    document.getElementById("data12").style.display = "block";
    // first();
}

function c(){
    first();
    document.getElementById("check").innerHTML = "Chinese: ";
    document.getElementById("data9").style.display = "block";
    document.getElementById("data12").style.display = "block";
    
   
}

function s(){
    first();
    document.getElementById("check").innerHTML = "South indian: ";
    document.getElementById("data1").style.display = "block";
}

function b(){
    first();
    document.getElementById("check").innerHTML = "Breakfast: ";
    document.getElementById("data1").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data11").style.display = "block";
}

function h(){
    first();
    document.getElementById("check").innerHTML = "Healthy: ";
    document.getElementById("data1").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data7").style.display = "block";
    document.getElementById("data12").style.display = "block";
}

function m(){
    first();
    document.getElementById("check").innerHTML = "5 minutes ready: ";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data7").style.display = "block";
    document.getElementById("data8").style.display = "block";
    document.getElementById("data9").style.display = "block";
    document.getElementById("data11").style.display = "block";
}

function sf(){
    first();
    document.getElementById("check").innerHTML = "Street food: ";
    document.getElementById("data1").style.display = "block";
    document.getElementById("data2").style.display = "block";
    document.getElementById("data3").style.display = "block";
    document.getElementById("data4").style.display = "block";
    document.getElementById("data5").style.display = "block";
    document.getElementById("data6").style.display = "block";
    document.getElementById("data11").style.display = "block";
}