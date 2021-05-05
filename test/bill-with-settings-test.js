//const { assert } = require("chai");

describe("Bill with settings widget", function(){
   //const calculateBillSettings = CalculateBillsSettings();
    context("Given costs and the levels", function(){
        it("should return call cost when call cost is set", function(){
            var calculateSettingBills = CalculateBillsSettings();
            assert.equal(2.77);
        })
    })
});