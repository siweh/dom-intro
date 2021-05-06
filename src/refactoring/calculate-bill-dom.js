var billTypeElement = document.querySelector(".billString");
var billTotalElement = document.querySelector(".billTotal");
var calculateBillBtn = document.querySelector(".calculateBtn");

const calculateBill = CalculateBill();

//console.log(calculateBill);

function calculateBtnEvent(){
    calculateBill.calculateTotalCost(billTypeElement.value);
    var overallTotalBill = calculateBill.getOverallTotal();
    var levelClassname = calculateBill.getClassnamelevel(overallTotalBill);
    //calculateBills.calculateTotalCost('call');
    
    billTotalElement.innerHTML = overallTotalBill.toFixed(2);
    billTotalElement.classList.replace(billTotalElement.className, levelClassname);
}

calculateBillBtn.addEventListener('click', calculateBtnEvent);