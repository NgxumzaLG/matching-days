function matchingDaysFactory(){
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var theDate1;
    var theDate2;

    function setDayOne(passDate1) {
        theDate1 = new Date(passDate1);

    }

    function getDayOne () {
        return theDate1.getDay()

    }

    function nameDayOne() {
        return daysArray[theDate1.getDay()];
        
    }

    function setDayTwo (passDate2) {
        theDate2 = new Date(passDate2)
    }

    function getDayTwo() {
        return theDate2.getDay();

    }

    function nameDayTwo() {
        return daysArray[theDate2.getDay()];

    }

    function dayOneClass() {
        if (getDayOne()) {
            return "Blue";

        }
    }

    function dayTwoClass() {
        if (getDayOne() === getDayTwo()) {
            return "Green";

        } else {
            return "Red";

        }
    }

    return {
        setDayOne,
        getDayOne,
        nameDayOne,
        setDayTwo,
        getDayTwo,
        nameDayTwo,
        dayOneClass,
        dayTwoClass

    }
}