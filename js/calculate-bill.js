//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalField = document.querySelector(".billTotal");

//get a reference to the billString
var billStringField = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
function totalPhoneBill(str){
    //console.log(str);
    //  * this function should read the string value entered - split it on a comma.
    var newStr = str.split(',');
    var total = 0;
    //  * loop over all the entries in the resulting list
    for (var i = 0; i < newStr.length; i++){
      var ans = newStr[i];
      //  * check if it is a call or an sms and add the right amount to the overall total
      if (ans === 'call'){
        total += 2.75;
      }
      if (ans === 'sms'){
        total += 0.75;
      }
    }
    //  * once done looping over all the entries - display the total onto the screen in the billTotal element
    return total.toFixed(2).trim();
    //console.log(total.toFixed(2));
  }

  function calculateBtnClicked(){
      // get the string entered in the textArea
      var stringEntered = billStringField.value;
      console.log(stringEntered);
      var roundedBillTotal = totalPhoneBill(stringEntered);
      console.log(roundedBillTotal);
      //  *display the total onto the screen in the billTotal element
      billTotalField.innerHTML = roundedBillTotal;

      //change colors when a certain amount is reached;
      if (roundedBillTotal >= 30){
        billTotalField.classList.replace(billTotalField.className, "danger");
      }else if (roundedBillTotal >= 20){
        billTotalField.classList.replace(billTotalField.className, "warning");
      }else{
        billTotalField.classList.replace(billTotalField.className, "billTotal");
      }
  }

//link the function to a click event on the calculate button
calculateBtn.addEventListener('click', calculateBtnClicked);

//Test cases
//Warning test
// call, sms, call, sms, call, call, sms, sms, call, sms, call
//Danger Test
//call, sms, call, sms, call, call, sms, sms, call, sms, call, sms, sms, call, call, sms, call, sms