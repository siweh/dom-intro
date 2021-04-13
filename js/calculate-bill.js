var calculateBtn = document.querySelector(".calculateBtn");
var billField = document.querySelector(".billString");
var totalBillElement = document.querySelector(".billTotal");

function totalPhoneBill(phoneBill){
    //split the string
    var billItems = phoneBill.split(", ");
    console.log(billItems);
    
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
    // get the string entered in the textArea
    var phoneBill = billField.value; 
    console.log(phoneBill);
    var billTotal = totalPhoneBill(phoneBill);
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);

    if (roundedBillTotal > 30.00) {
        totalBillElement.classList.toggle("danger");
    }else if(roundedBillTotal > 20.00){
        totalBillElement.classList.toggle("warning");
    }
    totalBillElement.innerHTML = roundedBillTotal;
    console.log();
}

calculateBtn.addEventListener('click', calculateBtnClicked)
//test cases :
//over 20:
//call, call, call, call, call, call, call, call, call,
//over 30
//call, call, call, call, call, call, call, call, call, call, call, call, call, call, call, call