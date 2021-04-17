// get a reference to the sms or call radio buttons

// get refences to all the settings fields
var callTotalSettingsField = document.querySelector(".callTotalSettings");
var smsTotalSettingsField = document.querySelector(".smsTotalSettings");
var totalSetting = document.querySelector(".totalSettings");
var costCall = document.querySelector(".callCostSetting");
var costSms = document.querySelector(".smsCostSetting");
var levelWarningSetting = document.querySelector(".warningLevelSetting");
var criticalSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button

//get a reference to the 'Update settings' button
var updateSetting = document.querySelector(".updateSettings");
var buttonBillAdd = document.querySelector(".add-button-settings");

// create a variables that will keep track of all the settings
var settingsCallCost = 2.75;
var settingsSMSCost = 0.75;
var settingsWarningLevel = 30.00;
var settingCriticalLevel = 50.00;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var total = 0;


//add an event listener for when the 'Update settings' button is pressed
updateSetting.addEventListener('click', function(){
    if (costCall.value !== '') {
        settingsCallCost = parseFloat(costCall.value);
    }else{
        settingsCallCost = 2.75;
    }
    if(costSms.value !== ''){
        settingsSMSCost = parseFloat(costSms.value);
    }else{
        settingsSMSCost = 0.75;
    }
    if (levelWarningSetting.value !== ''){
        settingsWarningLevel = parseFloat(levelWarningSetting.value);
    }else{
        settingsWarningLevel = 30.00;
    }
    if (criticalSetting.value !== ''){
        settingCriticalLevel = parseFloat(criticalSetting.value);
    }else{
        settingCriticalLevel = 50.00;
    }
    //console.log(settingCriticalLevel);
    //console.log(settingsWarningLevel);
    //console.log(settingsCallCost);
})
buttonBillAdd.addEventListener('click', function(){
        //var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
       var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        //console.log(checkedRadioBtn);
    if (checkedRadioBtn){
        var billItemTypeWithSettings = checkedRadioBtn.value;
        //console.log(billItemTypeWithSettings);
        if (totalSetting.className !== "danger") {
            if (billItemTypeWithSettings === 'call'){
                var currentCallTotal = parseFloat(callTotalSettingsField.innerHTML);
                //console.log(currentCallTotal);
                callsTotal = currentCallTotal + settingsCallCost;
                //console.log(currentCallTotal + settingsCallCost);
            }else{
                var currentSmsTotal = parseFloat(smsTotalSettingsField.innerHTML);
                smsTotal = currentSmsTotal + settingsSMSCost;
                //console.log(currentSmsTotal + settingsSMSCost);   
            }
        }

            var currentWarningLevel = parseFloat(levelWarningSetting.innerHTML);
            //console.log(currentWarningLevel);
            total = currentWarningLevel + settingsWarningLevel;
            //console.log(total);

            var currentCriticalLevel = parseFloat(criticalSetting.innerHTML);
            //console.log(currentCriticalLevel);
            total = currentCriticalLevel + settingCriticalLevel;
            //console.log(total);

        levelWarningSetting.innerHTML = total.toFixed(2);
        criticalSetting.innerHTML = total.toFixed(2);
        callTotalSettingsField.innerHTML = callsTotal.toFixed(2);
        smsTotalSettingsField.innerHTML = smsTotal.toFixed(2);

        var totalBills = parseFloat(callTotalSettingsField.innerHTML) + parseFloat(smsTotalSettingsField.innerHTML);
        totalSetting.innerHTML = totalBills.toFixed(2);
        //console.log(totalBills);
        if (totalBills > settingCriticalLevel){
            totalSetting.classList.replace(totalSetting.className, "danger");
        }else if (totalBills > settingsWarningLevel){
            totalSetting.classList.replace(totalSetting.className, "warning")
        }
   }
})
//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
