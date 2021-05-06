//const { assert } = require("chai");

describe("Bill with settings widget", function(){
    var calculateBillSettings = CalculateBillsSettings();
    context("With the setted costs", function(){
        it("should return a cost of the setted call", function(){
            calculateBillSettings.setCallCost(2.66);
            calculateBillSettings.calculateTotalBills('call');
            assert.equal(2.66, calculateBillSettings.getCallCostTotal());
        });

        it("should return a cost of the setted sms", function(){
            calculateBillSettings.setSmsCost(1.50);
            calculateBillSettings.calculateTotalBills('sms');
            assert.equal(1.50, calculateBillSettings.getSmsCostTotal());
        });
    });

    context("With no setted costs", function(){
        it("should return a total of 0.00 for a call", function(){
            var calculateBillSettings = CalculateBillsSettings();
            calculateBillSettings.setCallCost();
            calculateBillSettings.calculateTotalBills();
            assert.equal(0.00, calculateBillSettings.getCallCostTotal());
        });

        it("should return a total of 0.00 for an sms", function(){
            var calculateBillSettings = CalculateBillsSettings();
            calculateBillSettings.setSmsCost('');
            calculateBillSettings.calculateTotalBills();
            assert.equal(0.00, calculateBillSettings.getSmsCostTotal());
        });
    })

    context("Warning and Critical level", function(){
        
        it("should return warning level when warning level is reached", function(){
            calculateBillSettings.setWarningLevel(20);
            assert.equal('warning', calculateBillSettings.getClassNameLevel(25));
        });

        it("should return danger level when critical level is reached", function(){
            //critical level amount is R50.00
            calculateBillSettings.setCriticalLevel(30);
            assert.equal('danger', calculateBillSettings.getClassNameLevel(32));
        });

        it("should not return warning or danger, when the overall total is less than warning or critical level amount", function(){
            //calculateBillSettings.calculateBillTotal();
            assert.equal('totalSettings', calculateBillSettings.getClassNameLevel(10.00));
        })
    })
})