var calculateBtn = document.querySelector(".calculateBtn");
var billField = document.querySelector(".billString");
var totalBillElement = document.querySelector(".billTotal");

function totalPhoneBill(phoneBill){
    //split the string
    var billItems = phoneBill.split(", ");
    
    var totalBill = 0.0;
    
    billItems.forEach(billItem => {
        billItem.trim();
        if (billItem === "call"){
            totalBill += 2.75;
        }
        else if (billItem === "sms"){
            totalBill += 0.75;
       }
    });
    
    return totalBill;
}

function calculateBtnClicked(){
    // get the value string entered in the textArea
    var phoneBill = billField.value; 
    //get the total of the string call or sms.
    var billTotal = totalPhoneBill(phoneBill);
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);

    //console.log(totalBillElement.className);

    if (roundedBillTotal > 30.00) {
        totalBillElement.classList.replace(totalBillElement.className, "danger");
    }else if(roundedBillTotal > 20.00){
        totalBillElement.classList.replace(totalBillElement.className, "warning");
    }else{
        totalBillElement.classList.replace(totalBillElement.className, "billTotal");
    }

    //We set the billTotal to be the total of the string.
    totalBillElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBtnClicked)
//test cases :
//over 20:
//call, call, call, call, call, call, call, call, call
//over 30
//call, call, call, call, call, call, call, call, call, call, call, call, call, call, call, call