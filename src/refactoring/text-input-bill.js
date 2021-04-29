function CalculateBillCost(){
    const costCall = 2.75;
    const costSms = 0.75;
    const warningLevel = 30.00;
    const criticalLevel = 50.00;
    var totalCall = 0.00;
    var totalSms = 0.00;


    function calculateEnteredBillTotal(billEntered){
        //console.log(billEntered);
        if (billEntered === 'call'){
            totalCall += costCall;
        }else if (billEntered === 'sms'){
            totalSms += costSms;
        }
        //console.log(totalCall);
    }

    function getCallTotal(){
        return totalCall;
    }

    function getSmsTotal(){
        return totalSms;
    }

    function getOverallTotal(){
        return getCallTotal() + getSmsTotal();
    }

    function getClassnameLevel(overallTotal){
        if (overallTotal >= criticalLevel){
            return 'danger';
        }else if (overallTotal >= warningLevel){
            return 'warning';
        }else {
            return 'totalOne';
        }
    }

    return {
        calculateEnteredBillTotal,
        getCallTotal,
        getSmsTotal,
        getOverallTotal,
        getClassnameLevel
    }
}