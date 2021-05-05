function CalculateRadioBill(){
    const callCost = 2.75;
    const smsCost = 0.75;
    const warningLevel = 30.00;
    const criticalLevel = 50.00;
    var totalCall = 0.00;
    var totalSms = 0.00;
    
    function calculateBillTotal(checkedBill){

        if (checkedBill === 'call'){
            totalCall += callCost;
        }else {
            totalSms += smsCost;
        }
    }

    function getClassnameLevel(overallTotal) {
        if (overallTotal >= criticalLevel){
            return 'danger';
        }else if (overallTotal >= warningLevel){
            return 'warning';
        }else{
            return 'totalTwo';
        }
    }

    function getTotalCall() {
        return totalCall;
    }

    function getTotalSms() {
        return totalSms;
    }

    function getOverallTotal() {
        return getTotalCall() + getTotalSms();
    }


    return {
        calculateBillTotal,
        getTotalCall,
        getTotalSms,
        getOverallTotal,
        getClassnameLevel
    }
}