var userMonth = document.getElementById('month');
var userDay = document.getElementById('day');
var userYear = document.getElementById('year');
var submitButton = document.getElementById('submitD');


submitButton.addEventListener("click", function () {

        var Message = document.getElementById('message');
        var parsedMonth = (parseInt(userMonth.value) - 1);
        var parsedDay = parseInt(userDay.value);
        var parsedYear = parseInt(userYear.value);
        var Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var Weekday = ['Monday', 'Tuesday', 'Wednessday', 'Thursday', 'Friday', 'Saturday'];
        var DateIs = new Date(parsedYear, parsedMonth, parsedDay);
        var WeekdayIs = Weekday[DateIs.getDay()];
        var MonthIs = Months[parsedMonth];
        var ageNow= 2019 - parsedYear;

        if (WeekdayIs === undefined || MonthIs === undefined) {

                Message.innerText = "";

               setTimeout(
                        function () { Message.innerText = "please enter a valid date"; }, 500)
        }
        else {
                Message.innerText = 'Your birth week is ' + WeekdayIs + ', ' + MonthIs + ' ' + parsedDay + ', ' + parsedYear + ', Age = '+ ageNow+'.';
        }
        //console.log(Message);


})
