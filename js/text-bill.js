// get a reference to the textbox where the bill type is to be entered
var billText = document.querySelector(".billTypeText");
var totalBillCall = document.querySelector(".callTotalOne");
var totalBillSms = document.querySelector(".smsTotalOne");
var ovarallTotal = document.querySelector(".totalOne");

//get a reference to the add button
var addButton = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed
addButton.addEventListener('click', function(){

    var textValue = document.querySelector(".billTypeText").value;
    //console.log(textValue);

    if (textValue === 'call'){
        var currentCallTotal = parseFloat(totalBillCall.innerHTML);
        //console.log(currentCallTotal);
        totalBillCall.innerHTML = 2.75 + currentCallTotal;
        //console.log(totalBillCall);
    }

    if (textValue === 'sms'){
        var currentSmsTotal = parseFloat(totalBillSms.innerHTML);
        //console.log(currentSmsTotal);
        totalBillSms.innerHTML = 0.75 + currentSmsTotal;
    }

    var totalBills = parseFloat(totalBillCall.innerHTML)  + parseFloat(totalBillSms.innerHTML);
    ovarallTotal.innerHTML = totalBills.toFixed(2);

    if (totalBills > 50){
        ovarallTotal.classList.replace(ovarallTotal.className, "danger");
    }else if (totalBills > 30){
        ovarallTotal.classList.replace(ovarallTotal.className, "warning");
    }
})
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
