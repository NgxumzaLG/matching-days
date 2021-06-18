function matchingDaysFactory(){
    const daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function getDayOne (passDate1) {
        var theDate1 = new Date(passDate1);
        return theDate1.getDay();

    }

    function getDayTwo(passDate2) {
        var theDate2 = new Date(passDate2)
        return theDate2.getDay();

    }

    function dayOneClass(passDate1) {
        if (getDayOne(passDate1)) {
            return "Blue";

        } else{
            return "Blue"
        }
    }

    function dayTwoClass(passDate1, passDate2) {
        if (getDayOne(passDate1) === getDayTwo(passDate2)) {
            return "Green";

        } else {
            return "Red";

        }
    }

    return {
        getDayOne,
        getDayTwo,
        dayOneClass,
        dayTwoClass

    }
}