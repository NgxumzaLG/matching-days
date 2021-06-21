describe('Matching days exercise' , function(){
    describe('Set and Get the day' , function(){
        it('Should return 3 if the first date passed is on Wednesday' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-16");

            assert.equal(3, matchDays.getDayOne());
        
        });
        it('Should return 0 if the first date passed is on Sunday' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-06");

            assert.equal(0, matchDays.getDayOne());
        
        });
        it('Should return 5 if the second date passed is on Friday' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-11");

            assert.equal(5, matchDays.getDayOne());
        
        });
        it('Should return 6 if the second date passed is on Saturday' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-12");

            assert.equal(6, matchDays.getDayOne());
        
        });
    });

    describe('Get day name' , function(){
        it('Should be "Tuesday" if get day function returns 2 for the first date' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-15");

            assert.equal(2, matchDays.getDayOne());
            assert.equal("Tuesday", matchDays.nameDayOne());
        
        });
        it('Should be "Monday" if get day function returns 1 for the first date' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-14");

            assert.equal(1, matchDays.getDayOne());
            assert.equal("Monday", matchDays.nameDayOne());
        
        });
        it('Should be "Thursday" if get day function returns 4 for the second date' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-17");

            assert.equal(4, matchDays.getDayOne());
            assert.equal("Thursday", matchDays.nameDayOne());
        
        });
        it('Should be "Friday" if get day function returns 5 for the second date' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-18");

            assert.equal(5, matchDays.getDayOne());
            assert.equal("Friday", matchDays.nameDayOne());
        
        });
    });

    describe('Add class' , function(){
        it('Should return the class of "Blue" once the first date has been entered' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-06-16");

            assert.equal("Blue", matchDays.dayOneClass());
        
        });
        it('Should return the class of "Red" once the second date has been entered' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-05-16");
            matchDays.setDayTwo("2021-05-20");

            assert.equal("Red", matchDays.dayTwoClass());
        
        });
        it('Should return the class of "Green" once both dates have the same day' , function(){
            let matchDays = matchingDaysFactory();

            matchDays.setDayOne("2021-05-16");
            matchDays.setDayTwo("2021-05-23");

            assert.equal("Green", matchDays.dayTwoClass());
        
        });
    });
});