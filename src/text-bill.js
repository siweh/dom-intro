// get a reference to the textbox where the bill type is to be entered
var billTextField = document.querySelector(".billTypeText");

//get a reference to the add button
var addButton = document.querySelector(".addToBillBtn");

//Get reference to the call and sms totals and the overall total
var callTotalTextField = document.querySelector(".callTotalOne");
var smsTotalTextField = document.querySelector(".smsTotalOne");
var overallTotalField = document.querySelector(".totalOne");

//get all variebles for the costs and the levels
const callCost = 2.75;
const smsCost = 0.75;
const warningLevel = 30.00;
const criticalLevel = 50.00;

//create a variable that will keep track of the total bill
var totalBiilCost = 0.00;
var callTotal = 0.00;
var smsTotal = 0.00;

function changeColor(){
    //get to overall total and use it to change the color when a cetain amount is reached.
    var totalBiilCost = parseFloat(callTotalTextField.innerHTML) + parseFloat(smsTotalTextField.innerHTML);
    overallTotalField.innerHTML = totalBiilCost.toFixed(2);

    if (totalBiilCost >= criticalLevel){
        overallTotalField.classList.replace(overallTotalField.className, "danger");
    }
    else if (totalBiilCost >= warningLevel){
        overallTotalField.classList.replace(overallTotalField.className, "warning");
    }
}
function clickedAddBtn(){
    // get the value entered in the billType textfield
    var billEntered = billTextField.value.trim();
    console.log(billEntered);
    //check if the value in the bill type textbox is 'sms' or 'call'
    if (billEntered === 'call'){
        callTotal += callCost;
        
    }else if (billEntered === 'sms'){
        smsTotal += smsCost;
        console.log(totalSms);
    }
    
    callTotalTextField.innerHTML = callTotal.toFixed(2);
    smsTotalTextField.innerHTML = smsTotal.toFixed(2);

    var totalBiilCost = parseFloat(callTotalTextField.innerHTML) + parseFloat(smsTotalTextField.innerHTML);
    overallTotalField.innerHTML = totalBiilCost.toFixed(2);

    changeColor();
}

//add an event listener for when the add button is pressed
addButton.addEventListener('click', clickedAddBtn);

//in the event listener 
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
