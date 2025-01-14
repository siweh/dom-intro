var billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
var addRadioBtnBill = document.querySelector(".radioBillAddBtn");
var callTotalElement = document.querySelector(".callTotalTwo");
var smsTotalElement = document.querySelector(".smsTotalTwo");
var totalOverallElement = document.querySelector(".totalTwo");

 var calculateBills = CalculateRadioBill();
function clickedAddRadioBtn(){
    var checkedRadioBtnBill = document.querySelector("input[name='billItemType']:checked");
    //console.log(checkedRadioBtnBill.value);
    calculateBills.calculateBillTotal(checkedRadioBtnBill.value);
    var totalCost = calculateBills.getOverallTotal();
    var levelChanges = calculateBills.getClassnameLevel(totalCost);

    callTotalElement.innerHTML = calculateBills.getTotalCall().toFixed(2);
    smsTotalElement.innerHTML = calculateBills.getTotalSms().toFixed(2);
    totalOverallElement.innerHTML = totalCost.toFixed(2);
    
    totalOverallElement.classList.replace(totalOverallElement.className, levelChanges);
}

addRadioBtnBill.addEventListener('click', clickedAddRadioBtn);