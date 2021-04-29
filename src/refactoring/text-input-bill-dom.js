var typeBillElement = document.querySelector(".billTypeText");
var addBillBtn = document.querySelector(".addToBillBtn");
var callTotalTextElement = document.querySelector(".callTotalOne");
var smsTotalTextElement = document.querySelector(".smsTotalOne");
var overallTotalElement = document.querySelector(".totalOne");

const calculateTextBill = CalculateBillCost();
//console.log(calculateTextBill);

function addBbtnEvent(){
   calculateTextBill.calculateEnteredBillTotal(typeBillElement.value);
   var overallTotalBill = calculateTextBill.getOverallTotal();
   var classnameLevel = calculateTextBill.getClassnameLevel(overallTotalBill);
   callTotalTextElement.innerHTML = calculateTextBill.getCallTotal().toFixed(2);
   smsTotalTextElement.innerHTML = calculateTextBill.getSmsTotal().toFixed(2);
   overallTotalElement.innerHTML = overallTotalBill.toFixed(2);
   overallTotalElement.classList.replace(overallTotalElement.className, classnameLevel);

}

addBillBtn.addEventListener('click', addBbtnEvent);