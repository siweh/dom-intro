//const { assert } = require("chai")

describe("Text Input Bill Widget", function(){

    context("Given a bill string", function(){
        const calculateTextBill = CalculateBillCost();
        it("should get call total when given a call in the text area", function(){
            calculateTextBill.calculateEnteredBillTotal('call');
            assert.equal(2.75, calculateTextBill.getCallTotal());
        });

        it("should get sms total when given an sms in the text area", function(){
            calculateTextBill.calculateEnteredBillTotal('sms');
            assert.equal(0.75, calculateTextBill.getSmsTotal());
        });

        it("should get the overall total of call and sms total", function(){
            assert.equal(3.50, calculateTextBill.getOverallTotal());
        });
    });

    context("Given empty bill string", function(){
        const calculateTextBill = CalculateBillCost();
        it("the total cost should be 0.00", function(){
            calculateTextBill.calculateEnteredBillTotal("");
            assert.equal(0.00, calculateTextBill.getOverallTotal());
        });
    });

    context("Given an invalid bill string", function(){
        const calculateTextBill = CalculateBillCost();
        it("the total cost should be 0.00", function(){
            calculateTextBill.calculateEnteredBillTotal("not valid");
            assert.equal(0.00, calculateTextBill.getOverallTotal());
        });
    });

    context("Warning And Critical level", function(){
        const calculateTextBill = CalculateBillCost();
        it("should return warning when warning level is reached", function(){
            //warning level amount is R30.00
            assert.equal('warning', calculateTextBill.getClassnameLevel(30.00));
        })

        it("should return danger when critical level is reached", function(){
            //warning level amount is R50.00
            assert.equal('danger', calculateTextBill.getClassnameLevel(50.00));
        })

        it("should not return warning or critical level, when the overall is less than warning or critical amount", function(){
            assert.equal('totalOne', calculateTextBill.getClassnameLevel(10.00));
        })
    });
});
