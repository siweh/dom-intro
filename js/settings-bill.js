//get reference to the bills totals.
var callTotalField = document.querySelector(".callTotalSettings");
var smsTotalField = document.querySelector(".smsTotalSettings");
var totalField = document.querySelector(".totalSettings");

// get a reference to the sms or call radio buttons
var callRadioBtn = document.querySelector(".billItemTypeWithSettings");
var smsRadioBtn = document.querySelector(".billItemTypeWithSettings");

// get refences to all the settings fields
var costCallSettingField = document.querySelector(".callCostSetting");
var costSmsSettingField = document.querySelector(".smsCostSetting");
var levelWarningSettingField = document.querySelector(".warningLevelSetting");
var levelCriticalSettingField = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addRadioButton = document.querySelector(".add-button-settings");

//get a reference to the 'Update settings' button
var updateBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var costCallSetting = 2.75;
var costSmsSetting = 0.75;
var warningLevelSetting = 30.00;
var criticalLevelSetting = 50.00;

// create a variables that will keep track of all three totals.
var callTotal = 0;
var smsTotal = 0;
var overallTotal = 0;

//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener('click', function(){
    if (costCallSettingField.value !== ''){
       costCallSetting = parseFloat(costCallSettingField.value);
        //console.log(costCallSetting);
    }else{
        costCallSetting = 2.75;
        //console.log(costCallSetting);
    }
    if (costSmsSettingField.value !== ''){
        costSmsSetting = parseFloat(costSmsSettingField.value);
    }else{
        costSmsSetting = 0.75;
    }
    if (levelWarningSettingField.value !== ''){
        warningLevelSetting = parseFloat(levelWarningSettingField.value);
    }else{
        warningLevelSetting = 30.00;
    }
    if (levelCriticalSettingField.value !== ''){
        criticalLevelSetting = parseFloat(levelCriticalSettingField.value);
    }else{
        criticalLevelSetting = 50.00;
    }
})

//add an event listener for when the add button is pressed
addRadioButton.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");

    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;

        if (totalField.innerHTML <= criticalLevelSetting) {
            if (billItemTypeWithSettings == 'call'){
                var currentCallsTotal = parseFloat(callTotalField.innerHTML);
                callTotal = currentCallsTotal + costCallSetting;
            }else{
                var currentSmsTotal = parseFloat(smsTotalField.innerHTML);
                smsTotal = currentSmsTotal + costSmsSetting;
            } 
        }   

        var currentWarning = parseFloat(levelWarningSettingField.innerHTML);
        overallTotal = currentWarning + warningLevelSetting;

        var currentCritical = parseFloat(levelCriticalSettingField.innerHTML);
        overallTotal = currentCritical + criticalLevelSetting;
        

        callTotalField.innerHTML = callTotal.toFixed(2);
        smsTotalField.innerHTML = smsTotal.toFixed(2);

        var totalBill = parseFloat(callTotalField.innerHTML) + parseFloat(smsTotalField.innerHTML);
        totalField.innerHTML = totalBill.toFixed(2);

        if (totalBill > criticalLevelSetting){
            totalField.classList.replace(totalField.className, "danger");
        }else if (totalBill> warningLevelSetting){
            totalField.classList.replace(totalField.className, "warning");
        }else{
            totalField.classList.replace(totalField.className, "totalSettings");
        }
    }
    
})

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.