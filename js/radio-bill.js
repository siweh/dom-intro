// get a reference to the sms or call radio buttons
var radioCallButton = document.querySelector(".label-body");
var radioSmsButton = document.querySelector(".label-body");
var totalCallBill = document.querySelector(".callTotalTwo");
var totalSmsBill = document.querySelector(".smsTotalTwo");
var totalAmount = document.querySelector(".totalTwo");

//get a reference to the add button
var billAddBtn = document.querySelector(".radioBillAddBtn");

//add an event listener for when the add button is pressed
billAddBtn.addEventListener('click', function(){

    var isSMSChecked = document.querySelector("#smsId").checked;
    var isCallChecked = document.querySelector("#callId").checked;
    
    
    var totalCall = 0.00;
    var totalSms = 0.00;

    if (isCallChecked){
        var currentCallTotal = parseFloat(totalCallBill.innerHTML);
        totalCall = 2.75 + currentCallTotal;
        totalCallBill.innerHTML = totalCall;
    }

    if (isSMSChecked){
        var currentSmsTotal = parseFloat(totalSmsBill.innerHTML);
        console.log(currentSmsTotal);
        totalSms = 0.75 + currentSmsTotal;
        totalSmsBill.innerHTML = totalSms;

    }

    var totalPhoneBill = parseFloat(totalCallBill.innerHTML)  + parseFloat(totalSmsBill.innerHTML);
    totalAmount.innerHTML = totalPhoneBill.toFixed(2);

    if (totalPhoneBill > 50.00){
        totalAmount.classList.toggle("danger");
    }else if (totalPhoneBill > 30.00){
        totalAmount.classList.toggle("warning");
    }

})