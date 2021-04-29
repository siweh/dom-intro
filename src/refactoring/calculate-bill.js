function CalculateBill(){
    //state
    const callCost = 2.75;
    const smsCost = 0.75;
    var overallTotal = 0;
    const warningLevel = 20.00;
    const criticalLevel = 30.00;
    function calculateTotalCost(billString){
        overallTotal = 0;
        //console.log(billString);
        var newBillstring = billString.split(",");
        for(var i = 0; i < newBillstring.length; i++){
           var results = newBillstring[i];
            if (results === 'call'){
                overallTotal += callCost;
            }
            if (results === 'sms'){
                overallTotal += smsCost;
            }
        }
    }

    function getClassnamelevel(overallTotal){
        if (overallTotal >= criticalLevel){
            return 'danger';
        }else if (overallTotal >= warningLevel){
            return 'warning'
        }else{
            return 'billTotal';
        }
    }

    function getOverallTotal(){
        return overallTotal;
    }
    
    return {
        calculateTotalCost,
        getOverallTotal,
        getClassnamelevel
    }
}