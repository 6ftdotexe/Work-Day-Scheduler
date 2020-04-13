$(document).ready(function () {

    var x = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    console.log(localStorage);
    


    //moment.js to put current date on jumbotron
    var currentDate = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").text(currentDate);
    var currentTime = moment().format("H");

    //forEach loops through x[], pushes "time" elements to new startTime[] in the "00 AM/PM" format
    x.forEach(function (time, index) {
        var startTime = [];
        startTime.push(moment().hour(time).format("h A"));
        // console.log(parseInt(startTime));
        // console.log(moment().hour());

        //Declare new var(s) and initialize to new el's
        var newDiv = $("<div>");
        var newSpan = $("<span>");
        var newTextInput = $("<input>");
        var newBtn = $("<button>");
        


        var textInput = "data-text"+ index;
        var old = localStorage.getItem(textInput);
        console.log(old);
        
        
        //appends new el's to container, parent or sibling respectively. Adds B/S classes to new el's 
        $(".container").append(newDiv);
        $(".container").addClass("mb-5");

        newDiv.addClass("time-block input-group input-group-prepend");
        newDiv.attr("data-val", index);
        newDiv.append(newSpan);
        newSpan.addClass("input-group-text");
        newSpan.addClass("start-time")
        newSpan.text(startTime);

        
        newDiv.append(newTextInput);
        newTextInput.attr("type", "text");
        //newTextInput.attr("id", "data-input" + index);
        newTextInput.addClass("form-control");
        newTextInput.attr("data", "data-text" + index);
        newTextInput.attr("id", "data-input" + index);

        //This takes the part of the form
        var replaceText = document.getElementById("data-input" + index);
        //This takes the text and puts it in the form
        replaceText.value = old;
        console.log(replaceText);


        newDiv.append(newBtn);
        newBtn.addClass("btn btn-outline-secondary");


    });

    //click event 
    $("button").on("click", function (event) {
        event.preventDefault();

        
        var textInput = $(this).siblings("input").attr("data");
        console.log(textInput);
        var textVal = $(this).siblings("input").val();
        console.log(textVal);
        localStorage.setItem(textInput, textVal);
        var lsVal = localStorage.getItem(textInput);
        $(this).siblings("input").text(lsVal);
    });

    $(".input-group-text").css("width", "100px");
    $("button").text("SAVE");


})
