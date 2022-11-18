/*
    Author: Emily Andresen
    Class: CPSC 332
    Assignment: Homework 6 - JQuery
    Last Modified: 11/18/2022
    Modified from: https://codepen.io/cathydutton/pen/GBcvo
*/

$(document).ready(function() {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $('#button-start');
    var $buttonStop = $('#button-stop');
    var $buttonReset = $('#button-reset');
    var interval;
    var timerOpacity;

    $buttonStart.on("click", function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
        $(".timer-background").css("background-color", "forestgreen");
        timerOpacity = setInterval(toggleOpacity, 1200);
    });

    $buttonStop.on("click", function () {
        clearInterval(interval);
        if ($(timer).text() != "00:00") {
            $(".timer-background").css("background-color", "darkred");
            $(".timer-background").css("opacity", "1");
        }
    });

    $buttonReset.on("click", function () {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        $appendTens.text(tens);
        $appendSeconds.text(seconds);
        $(".timer-background").css("background-color", "gold");
        $(".timer-background").css("opacity", "1");
    });

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.text("0" + tens);
        }

        if (tens > 9) {
            $appendTens.text(tens);

        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.text("0" + seconds);
            tens = 0;
            $appendTens.text("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.text(seconds);
        }
    }

    $("#timer").addClass("timer-background");
    $("p").css({
        "text-align": "center",
        // "width": "150px",
        "padding": "5px",
        "font-size": "16pt",
        "border-radius": "15px",
        "color": "black"
    });
    $(".timer-background").css("background-color", "gold");

    $("button").addClass("button");
    $("button").css({
        "unset": "all",
        "border-radius": "10px",
        "background-color": "darkred",
        "color": "white",
        "margin": "3px"
    });

    function toggleOpacity() {
        $(".timer-background").animate({opacity: 0.8}, "slow");
        $(".timer-background").animate({opacity: 1}, "slow");
    };

    $("h1").text("Turkey Time")
    $("h2").text("JQuery Stopwatch")
    $(".wrapper").css({
        "border": "5px darkorange solid",
        "padding": "5px",
        "text-align": "center",
        "background-color": "tan",
        "font-family": "arial",
        "color": "darkred"
    });

});