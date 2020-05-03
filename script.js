var m = moment();
// console.log(m);

var words;
var hourInfo;
// test
console.log(m.format("dddd,MMMM Do"));

$("#currentDay").text(m.format("dddd, MMMM Do"));

$(document).ready(function () {
    colorChange();
    renderText();
});
// colorChange
function colorChange() {
    var realTime = moment().hours();
    // test
    console.log("Current Time: " + realTime);


    $(".input").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        // console.log(time);

        if (realTime > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (realtime < timeTest) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).removeClass("future");
            $(this).addClass("present");
            $(this).removeClass("past");
        }
    });
}

// save to localStorage (not working)

$(".saveBtn").click(function () {
    words = $(this).siblings(".input").val();
    console.log(words);
    hourInfo = $(this).siblings(".hour").text();
    console.log(hourInfo);
    localStorage.setItem(hourInfo, JSON.stringify(words));

    colorChange();
    renderText();
})

// renderText;
function renderText() {
    var saveWords9 = JSON.parse(localStorage.getItem("9:00 am"))
    $("#9").val("");
    $("#9").val(saveWords9);

    var saveWords10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveWords10);

    var saveWords11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveWords11);

    var saveWords12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveWords12);

    var saveWords13 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveWords13);

    var saveWords14 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveWords14);

    var saveWords15 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveWords15);

    var saveWords16 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveWords16);

    var saveWords17 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveWords17);

}




