//const { assert } = require("chai");

describe("Bill with settings widget", function(){
    context("With the set call and sms costs", function(){
        var calculateBillSettings = CalculateBillsSettings();
        it("should return a cost of the setted call", function(){
            calculateBillSettings.setCallCost(2.66);
            calculateBillSettings.setWarningLevel(10);
            calculateBillSettings.setCriticalLevel(20);
            calculateBillSettings.calculateTotalBills('call');
            assert.equal(2.66, calculateBillSettings.getCallCostTotal());
        });

        it("should return a cost of the setted sms", function(){
            calculateBillSettings.setSmsCost(1.50);
            calculateBillSettings.calculateTotalBills('sms');
            assert.equal(1.50, calculateBillSettings.getSmsCostTotal());
        });
    });

    context("With the set warning and critical level", function(){
        var calculateBillSettings = CalculateBillsSettings();
        it("the overall total should change to warning when it reaches warning level", function(){
            calculateBillSettings.setWarningLevel(10);
            calculateBillSettings.setCriticalLevel(20);
            var expectedClassName = calculateBillSettings.getClassNameLevel(12);
            assert.equal('warning', expectedClassName);
        });

        it("the overall total should change to danger when it reaches critical level", function(){
            calculateBillSettings.setCriticalLevel(40);
            var expectedClassname = calculateBillSettings.getClassNameLevel(45);
            assert.equal('danger', expectedClassname);
        });
    });

    context("With no set costs", function(){
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
    });
})