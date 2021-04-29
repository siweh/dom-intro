// get a reference to the sms or call radio buttons
var callRadioBtnField = document.querySelector(".billItemTypeRadio");
var smsRadioBtnField = document.querySelector(".billItemTypeRadio");

//get the totals on the sms and call and the overall total 
var callTotalField = document.querySelector(".callTotalTwo");
var smsTotalField = document.querySelector(".smsTotalTwo");
var totalBillField = document.querySelector(".totalTwo");

//get a reference to the add button
var addRadioBtn = document.querySelector(".radioBillAddBtn");

//create a variable that will keep track of the total bill
var totalCall = 0.00;
var totalSms = 0.00;
var totalBill = 0.00;

function changingColor(){
    totalBill = parseFloat(callTotalField.innerHTML) + parseFloat(smsTotalField.innerHTML);
    totalBillField.innerHTML = totalBill.toFixed(2);

    if (totalBill >= 50){
        totalBillField.classList.replace(totalBillField.className, 'danger');
    }else if (totalBill >= 30){
        totalBillField.classList.replace(totalBillField.className, 'warning');
    }
}

function clickedAddButton(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    console.log(checkedRadioBtn);
    if (checkedRadioBtn){
        //get the value of the checked radio button
        var billItemType = checkedRadioBtn.value;
        console.log(billItemType);
        if (billItemType === 'call'){
            totalCall += 2.75;
        }else if (billItemType === 'sms'){
            totalSms += 0.75;
        }

        callTotalField.innerHTML = totalCall.toFixed(2);
        smsTotalField.innerHTML = totalSms.toFixed(2);

        totalBill = parseFloat(callTotalField.innerHTML) + parseFloat(smsTotalField.innerHTML);
        console.log(totalBill);
        totalBillField.innerHTML = totalBill.toFixed(2);
    }

    changingColor();
}

//add an event listener for when the add button is pressed
addRadioBtn.addEventListener('click', clickedAddButton);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
