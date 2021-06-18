describe('Matching days exercise' , function(){
    describe('Get the day' , function(){
        it('Should return the Day for the first date' , function(){
            let matchDays = matchingDaysFactory();

            assert.equal("Wednesday", matchDays.getDayOne("2021-06-16"))
        
        });
        it('Should return the Day for the second date' , function(){
            let matchDays = matchingDaysFactory();

            assert.equal("Thursday", matchDays.getDayTwo("2021-06-10"))
        
        });
    });

    describe('Add class' , function(){
        it('Should return the class of "Blue" once the first date has been entered' , function(){
            let matchDays = matchingDaysFactory();
            matchDays.getDayOne("2021-06-16");

            assert.equal("Blue", matchDays.dayOneClass("2021-06-16"));
        
        });
        it('Should return the class of "Orange" once the second date has been entered' , function(){
            let matchDays = matchingDaysFactory();

            assert.equal("Orange", matchDays.dayTwoClass("2021-06-10", "2021-06-11"))
        
        });
        it('Should return the class of "Green" once both dates have the same day' , function(){
            let matchDays = matchingDaysFactory();

            assert.equal("Green", matchDays.dayTwoClass("2021-06-10", "2021-06-17"))
        
        });
    });
});