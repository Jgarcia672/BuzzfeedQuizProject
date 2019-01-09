/* global $ */

$(document).ready(function() {
    
    function q1(answer){
        if (answer === "yes"){
            return 2;
        } else {
            return 0;
        }
    }
    
     function q2(answer){
        if (answer === "yes"){
            return 3;
        } else {
            return 0;
        }
    }
    
     function q3(answer){
        if (answer === "yes"){
            return 4;
        } else {
            return 0;
        }
    }
    
    
    
    $("button").click(function() {
        var name = $("#name").val();
        var character = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = q1($("#question1").val());
        var q2Result = q2($("#question2").val());
        var q3Result = q3($("#question3").val());
        var totalScore = q1Result+q2Result+q3Result;
        
        $("#userName").text("Congrats, "+ name + ",you are most like " + character)
    });

});
