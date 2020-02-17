
    var day = document.getElementById("day").value;
    var D= parseInt(day);
    var month = document.getElementById("month").value;
    var M = parseInt(month);
    var year = document.getElementById("year").value;
    var Y = parseInt(year);
    var CC = parseInt(YY - 1) / 100 + 1; //cc -> century
    var dayOfTheWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * Y / 4)) + ((26 * (M + 1) / 10)) + D) % 7; //day of the week
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    function getName() {
    var gender;
    if (document.getElementById("gender").checked) {
        gender = 'male';
    } else {
        gender = 'female';
    }
    if (M < 0 || M > 12) {
        alert("invalid month ");
    }
    else if (D < 0 || D > 31) {
        alert("invalid  Date");
    }
    else if (M == 2 && D > 29) {
        alert("invalid date");
    }
    else if (Y < 1000 || Y > 2020) {
        alert("Invalid year");
    }
    else if (Math.ceil(dayOfTheWeek) == 1 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[1] + " ,born on a Monday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 2 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[2] + " ,born on a Tuesday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 3 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[3] + " ,born on a Wednesday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 4 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[4] + " ,born on a Thursday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 5 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[5] + " ,born on a Friday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 6 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[6] + " ,born on a Saturday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 0 && gender === 'male') {
        document.getElementById("results").innerHTML =
            "Your day name is " + maleNames[0] + " ,born on a Sunday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 1 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[1] + " ,born on a Monday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 2 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[2] + " ,born on a Tuesday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 3 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[3] + " ,born on a Wednesday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 4 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[4] + " ,born on a Thursday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 5 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[5] + " ,born on a Friday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 6 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[6] + " ,born on a Saturday.";
    }
    else if (Math.ceil(dayOfTheWeek) == 0 && gender === 'female') {
        document.getElementById("results").innerHTML =
            "Your day name is " + femaleNames[0] + " ,born on a Sunday.";
    } else {
        alert('enter your information please');
    }
  }