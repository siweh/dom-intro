// get a reference to the sms or call radio buttons
var totalCallBill = document.querySelector(".callTotalTwo");
var totalSmsBill = document.querySelector(".smsTotalTwo");
var totalAmount = document.querySelector(".totalTwo");

//get a reference to the add button
var billAddBtn = document.querySelector(".radioBillAddBtn");

//add an event listener for when the add button is pressed
billAddBtn.addEventListener('click', function(){

    //var isSMSChecked = document.querySelector("#smsId").checked;
    //var isCallChecked = document.querySelector("#callId").checked;
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    
    
    var totalCall = 0.00;
    var totalSms = 0.00;

    if (checkedRadioBtn){
        //console.log(checkedRadioBtn);
        var billItemType = checkedRadioBtn.value;
        //console.log(billItemType);
        if (billItemType === 'call'){
            var currentCallTotal = parseFloat(totalCallBill.innerHTML);
            totalCall = 2.75 + currentCallTotal;
            totalCallBill.innerHTML = totalCall.toFixed(2);
        }else {
            var currentSmsTotal = parseFloat(totalSmsBill.innerHTML);
            //console.log(currentSmsTotal);
            totalSms = 0.75 + currentSmsTotal;
            //console.log(totalSms);
            totalSmsBill.innerHTML = totalSms.toFixed(2);
        }
    }

    //Now we adding the total of both call and sms
    var totalPhoneBill = parseFloat(totalCallBill.innerHTML)  + parseFloat(totalSmsBill.innerHTML);
    totalAmount.innerHTML = totalPhoneBill.toFixed(2);

    //console.log(totalAmount.className);
    if (totalPhoneBill > 50.00){
        totalAmount.classList.replace(totalAmount.className, "danger");
    }else if (totalPhoneBill > 30.00){
        totalAmount.classList.replace(totalAmount.className, "warning");
    }
})