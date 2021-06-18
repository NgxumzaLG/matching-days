// Reference all the elements
var weekdaysField = document.querySelector('.weekdays');
var firstDate = document.querySelector('.first-dates');
var secondDate = document.querySelector('.second-dates');
var errorDateField = document.querySelector('.error');

// Add event listener to the event changes on the input date 
firstDate.addEventListener('change', showDate1);
secondDate.addEventListener('change', showDate2);

// Compile Templates
var mDaysTemplateSource = document.querySelector(".matchingDaysTemplate").innerHTML;
var userMDayTemplate = Handlebars.compile(mDaysTemplateSource);

const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// Show weekdays bar
weekdaysField.innerHTML = userMDayTemplate({ weekdayBar: daysArray });

//  Instantiate the instance of the factory function
let instMatchingDays = matchingDaysFactory();

// Function for the first date changes entered

function showDate1() {
    weekdaysField.innerHTML = userMDayTemplate({ weekdayBar: daysArray });
    let weeklybar = document.querySelectorAll('.weekly');

    // Set the date using the factory function
    instMatchingDays.setDayOne(firstDate.value);

    if (instMatchingDays.getDayOne() == 0) {
        weeklybar[0].classList.add("Blue")

    } else {
        if (secondDate.value == "") {
            weeklybar[instMatchingDays.getDayOne()].classList.add(instMatchingDays.dayOneClass());
            

        } else {
            instMatchingDays.setDayTwo(secondDate.value);

            weeklybar[instMatchingDays.getDayOne()].classList.add(instMatchingDays.dayOneClass());
            weeklybar[instMatchingDays.getDayTwo()].classList.add(instMatchingDays.dayTwoClass());   
           
        }
    }
}

// Function for the second date changes entered

function showDate2() {
    weekdaysField.innerHTML = userMDayTemplate({ weekdayBar: daysArray });
    let weeklybar = document.querySelectorAll('.weekly');

    if (firstDate.value != "") {
        instMatchingDays.setDayOne(firstDate.value);
        instMatchingDays.setDayTwo(secondDate.value);

        if (instMatchingDays.getDayTwo()) {
            weeklybar[instMatchingDays.getDayOne()].classList.add(instMatchingDays.dayOneClass());
            weeklybar[instMatchingDays.getDayTwo()].classList.add(instMatchingDays.dayTwoClass());

        }
    } else {
        setTimeout(function () {
            errorDateField.innerHTML = "Please enter the first date, before the second one.";
            secondDate.value = "";
            
        }, 0);

        setTimeout(function () {
            errorDateField.innerHTML = "";

        }, 3500);
    }

}