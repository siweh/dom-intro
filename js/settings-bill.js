// get a reference to the sms or call radio buttons
var callRadioField = document.querySelector(".billItemTypeWithSettings");
var smsRadioField = document.querySelector(".billItemTypeWithSettings");

//get the totals of the sms and call and the overall total
var callTotalSettingsField = document.querySelector(".callTotalSettings");
var smsTotalSettingsField = document.querySelector(".smsTotalSettings");
var totalSettingsField =document.querySelector(".totalSettings");

// get refences to all the settings fields
var callCostSettingField = document.querySelector(".callCostSetting");
var smsCostSettingField = document.querySelector(".smsCostSetting");
var warningLevelField = document.querySelector(".warningLevelSetting");
var criticalLevelField = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var addBtnRadio = document.querySelector(".add-button-settings");

//get a reference to the 'Update settings' button
var updateBtn = document.querySelector(".updateSettings");

// create a variables that will keep track of all the settings
var callCostSetting = 2.75;
var smsCostSetting = 0.75;
var warningLevelSetting = 30.00;
var criticalLevelSetting = 50.00;

// create a variables that will keep track of all three totals.
var callCostTotal = 0;
var smsCostTotal = 0;
var totalCost = 0;

function colorChange(){
    totalCost = parseFloat(callTotalSettingsField.innerHTML) + parseFloat(smsTotalSettingsField.innerHTML);
    totalSettingsField.innerHTML =totalCost.toFixed(2);

    if (totalCost >= criticalLevelSetting){
        totalSettingsField.classList.replace(totalSettingsField.className, "danger");
    }else if (totalCost >= warningLevelSetting){
        totalSettingsField.classList.replace(totalSettingsField.className, "warning");
    }else {
        totalSettingsField.classList.replace(totalSettingsField.className, "totalSettings");
    }
}

function updateCostSettingsBtn(){
    if (callCostSettingField.value !== ''){
        callCostSetting = parseFloat(callCostSettingField.value);
        //console.log(callCostSetting);
    }else {
        callCostSetting = 2.75;
    }
    if (smsCostSettingField.value !== ''){
        smsCostSetting = parseFloat(smsCostSettingField.value);
        //console.log(smsCostSetting);
    }else{
        smsCostSetting = 0.75;
    }

    if (warningLevelField.value !== ''){
        warningLevelSetting = parseFloat(warningLevelField.value);
    }else{
        warningLevelSetting = 30.00;
    }

    if (criticalLevelField.value !== ''){
        criticalLevelSetting = parseFloat(criticalLevelField.value);
    }else {
        criticalLevelSetting = 50.00;
    }

    //callCostSettingField.innerHTML = callCostSetting.toFixed(2);
    //console.log();
    //smsCostSettingField.innerHTML = smsCostSetting;

    totalCost = parseFloat(callTotalSettingsField.innerHTML) + parseFloat(smsTotalSettingsField.innerHTML);
    //console.log(totalCost);
    totalSettingsField.innerHTML = totalCost.toFixed(2);
    colorChange();
}
function addBillTypeBtn(){
    var checkedBtnRadio = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    //console.log(checkedBtnRadio);
    var billItemTypeWithSettings = checkedBtnRadio.value;
    if (totalSettingsField.innerHTML <= criticalLevelSetting){
        if (billItemTypeWithSettings === 'call'){
            callCostTotal += callCostSetting;
        }else if (billItemTypeWithSettings === 'sms'){
            smsCostTotal += smsCostSetting;
        }
    }

    callTotalSettingsField.innerHTML = callCostTotal.toFixed(2);
    smsTotalSettingsField.innerHTML = smsCostTotal.toFixed(2);

    totalCost = parseFloat(callTotalSettingsField.innerHTML) + parseFloat(smsTotalSettingsField.innerHTML);
    totalSettingsField.innerHTML =totalCost.toFixed(2);

    colorChange();
}

//add an event listener for when the 'Update settings' button is pressed
updateBtn.addEventListener('click', updateCostSettingsBtn);

//add an event listener for when the add button is pressed
addBtnRadio.addEventListener('click', addBillTypeBtn);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.