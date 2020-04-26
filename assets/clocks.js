{ /* <span id="clock">&nbsp;</span> */ }




function updateClock() {
    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTime = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    // Update the time display
    document.getElementById("clock").firstChild.nodeValue = currentTime;
}



function updateClock() {
    var currentTime = new Date();

    var currentDay = currentTime.getDay();

    //Convert the day component to day abbreviation
    currentDay = (currentDay == 0) ? "Sun" : currentDay;
    currentDay = (currentDay == 1) ? "Mon" : currentDay;
    currentDay = (currentDay == 2) ? "Tue" : currentDay;
    currentDay = (currentDay == 3) ? "Wed" : currentDay;
    currentDay = (currentDay == 4) ? "Thu" : currentDay;
    currentDay = (currentDay == 5) ? "Fri" : currentDay;
    currentDay = (currentDay == 6) ? "Sat" : currentDay;

    var currentMonth = currentTime.getMonth();

    //Convert the month component to text month
    currentMonth = (currentMonth == 0) ? "January" : currentMonth;
    currentMonth = (currentMonth == 1) ? "February" : currentMonth;
    currentMonth = (currentMonth == 2) ? "March" : currentMonth;
    currentMonth = (currentMonth == 3) ? "April" : currentMonth;
    currentMonth = (currentMonth == 4) ? "May" : currentMonth;
    currentMonth = (currentMonth == 5) ? "June" : currentMonth;
    currentMonth = (currentMonth == 6) ? "July" : currentMonth;
    currentMonth = (currentMonth == 7) ? "August" : currentMonth;
    currentMonth = (currentMonth == 8) ? "September" : currentMonth;
    currentMonth = (currentMonth == 9) ? "October" : currentMonth;
    currentMonth = (currentMonth == 10) ? "November" : currentMonth;
    currentMonth = (currentMonth == 11) ? "December" : currentMonth;

    var currentDate = currentTime.getDate();

    // Add suffix to the date
    currentDate = (currentDate == 1 || currentDate == 21 || currentDate == 31) ? currentDate + "" : currentDate;
    currentDate = (currentDate == 2 || currentDate == 22) ? currentDate + "" : currentDate;
    currentDate = (currentDate == 3) || currentDate == 23 ? currentDate + "" : currentDate;
    currentDate = (currentDate > 3 || currentDate < 21 || currentDate > 23 || currentDate < 31) ? currentDate + "" : currentDate;


    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours == 0) ? 12 : currentHours;

    // Compose the string for display
    // var currentTime = currentDay + " " + currentMonth + " " + currentDate + " ," + " 2020 " + currentHours + ":" + currentMinutes + " " + timeOfDay;
    var currentTime = currentHours + ":" + currentMinutes + " " + timeOfDay;


    // Update the time display
    document.getElementById("clock").firstChild.nodeValue = currentTime;
    document.getElementById("aClock").firstChild.nodeValue = currentTime;
    document.getElementById("bClock").firstChild.nodeValue = currentTime;
    document.getElementById("cClock").firstChild.nodeValue = currentTime;
    document.getElementById("dClock").firstChild.nodeValue = currentTime;
    document.getElementById("eClock").firstChild.nodeValue = currentTime;
}

// used solution found on  https://www.elated.com/creating-a-javascript-clock/ to code clocks