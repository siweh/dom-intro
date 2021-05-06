describe("Radio button bill widget", function(){
    context("With a checked radio button", function(){
        var calculateBills = CalculateRadioBill();
        it("should return a cost for the checked call radio button", function(){
            calculateBills.calculateBillTotal('call');
            assert.equal(2.75, calculateBills.getTotalCall());
        });

        it("should return a cost for the checked sms radio button", function(){
            calculateBills.calculateBillTotal('sms');
            assert.equal(0.75, calculateBills.getTotalSms());
        })
    })

    context("Without checked radio buttons", function(){
        var calculateBills = CalculateRadioBill();
        it("the total cost should be 0.00", function(){
            //var calculateBills = CalculateRadioBill();
            //calculateBills.calculateBillTotal();
            assert.equal(0.00, calculateBills.getOverallTotal());
        })
    });

    context("Warning and Critical level", function(){
        var calculateBills = CalculateRadioBill();
        it("should return warning level when warning level is reached", function(){
            //warning level amount is R30.00
            calculateBills.calculateBillTotal();
            assert.equal('warning', calculateBills.getClassnameLevel(30.00));
        });

        it("should return danger level when critical level is reached", function(){
            //critical level amount is R50.00
            calculateBills.calculateBillTotal();
            assert.equal('danger', calculateBills.getClassnameLevel(50.00));
        });

        it("should not return warning or danger, when the overall total is less than warning or critical level amount", function(){
            calculateBills.calculateBillTotal();
            assert.equal('totalTwo', calculateBills.getClassnameLevel(10.00));
        })
    })
})