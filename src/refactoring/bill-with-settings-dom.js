var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var addBtnSettings = document.querySelector(".add-button-settings");
var callCostTotal = document.querySelector(".callTotalSettings");
var smsCostTotal = document.querySelector(".smsTotalSettings");
var overallTotalField = document.querySelector(".totalSettings");
var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSettings = document.querySelector(".warningLevelSetting");
var criticalLevelSettings = document.querySelector(".criticalLevelSetting");
var updateBtnSettings = document.querySelector(".updateSettings");

var calculateBillSettings = CalculateBillsSettings();
function clickedBtnAdd(){
    var checkedRadioBill = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    //console.log(checkedRadioBill.value);
    calculateBillSettings.calculateTotalBills(checkedRadioBill.value);

    criticalLevelAmount = parseFloat(criticalLevelSettings.value);
    var overallTotal = calculateBillSettings.getOverallTotalSettings();
    var totalCallCost = calculateBillSettings.getCallCostTotal();
    var totalSMSCost = calculateBillSettings.getSmsCostTotal();
   
    var changingLevel = calculateBillSettings.getClassNameLevel(overallTotal);

    callCostTotal.innerHTML =  totalCallCost.toFixed(2);
    smsCostTotal.innerHTML = totalSMSCost.toFixed(2);
    overallTotalField.innerHTML = overallTotal.toFixed(2);

    overallTotalField.classList.replace(overallTotalField.className, changingLevel);

}

function clickedUpdateBtn() {
    calculateBillSettings.setCallCost(callCostSettings.value);
    calculateBillSettings.setSmsCost(smsCostSettings.value);
    calculateBillSettings.setWarningLevel(warningLevelSettings.value);
    calculateBillSettings.setCriticalLevel(criticalLevelSettings.value);

    var overallTotal = calculateBillSettings.getOverallTotalSettings();
    var changingLevel = calculateBillSettings.getClassNameLevel(overallTotal);
    
    overallTotalField.classList.replace(overallTotalField.className, changingLevel);
}

updateBtnSettings.addEventListener('click', clickedUpdateBtn);
addBtnSettings.addEventListener('click', clickedBtnAdd);