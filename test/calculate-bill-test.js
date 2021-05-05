//const { assert } = require("node:console")

describe("Calculate bill widget", function(){
    const calculateBill = CalculateBill();
    context("Given a bill string", function(){
        it("should be able to get the cost of the bill string entered in the textArea", function(){
            calculateBill.calculateTotalCost('call');
            assert.equal(2.75, calculateBill.getOverallTotal());

        })

        it("should be able to get the cost of the bill string entered in the textArea", function(){
            calculateBill.calculateTotalCost('sms');
            assert.equal(0.75, calculateBill.getOverallTotal());
        })
    });

    context("Given a splitted bill string", function(){
        it("should be able to get total of call string", function(){
            calculateBill.calculateTotalCost('call,call,call,call,call');
            assert.equal(13.75, calculateBill.getOverallTotal());
        })

        it("should be able to get the total of sms string", function(){
            calculateBill.calculateTotalCost('sms,sms,sms,sms,sms');
            assert.equal(3.75, calculateBill.getOverallTotal());
        })
        it("should be able to get total of both call and sms entered", function(){
            calculateBill.calculateTotalCost('call,sms,call,sms');
            assert.equal(7.00, calculateBill.getOverallTotal());
        })
    });

    context("With empty bill string", function(){
        it("should return 0.00 as a total", function(){
            calculateBill.calculateTotalCost('');
            assert.equal(0.00, calculateBill.getOverallTotal());
        })
    });

    context("Warning And Critical level", function(){
        it("should return warning when warning level is reached", function(){
            //warning level amount is R20.00
            assert.equal('warning', calculateBill.getClassnamelevel(20.00));
        })

        it("should return danger when critical level is reached", function(){
            //warning level amount is R30.00
            assert.equal('danger', calculateBill.getClassnamelevel(30.00));
        })

        it("should not return warning or critical level, when the overall total is less than warning or critical amount", function(){
            assert.equal('billTotal', calculateBill.getClassnamelevel(10.00));
        })
    });
})