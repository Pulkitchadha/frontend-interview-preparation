function timeConversion(s) {
    let am = s.includes("AM") ? true : false;
    let timeArray = s.replace(am ? "AM" : "PM", "").split(":");
    if (am) {
        if (timeArray[0] == "12")
            timeArray[0] = "00";
    } else {
        if (timeArray[0] != 12)
            timeArray[0] = 12 + parseInt(timeArray[0]);
    }
    return timeArray.join(":");
}

timeConversion("03:00 PM");