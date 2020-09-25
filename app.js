var blue = document.getElementById("blue");
var red = document.getElementById("red");
var green = document.getElementById("green");

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");


$(function(){
    $("#blue").click(function(){
       $("#box1").toggle("fast")
       box2.style.display = "none";
       box3.style.display = "none";
    })
})
$(function(){
    $("#red").click(function(){
        box1.style.display = "none";
        box3.style.display = "none";
       
       $("#box2").toggle("fast")
        box2.style.display = "flex";
    })
})

$(function(){
    $("#green").click(function(){
       $("#box3").toggle("fast")
       box2.style.display = "none";
       box1.style.display = "none";
       box3.style.display = "flex";
      
    })
})