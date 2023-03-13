let temperature = {'name':'temperature', 'max':45, 'min':0, 'metric':"°C" };
let stateOfCharge = {'name':'state of charge','max':80, 'min':20, 'metric':"%" };
let chargeRate = {'name':'charge rate', 'max':0.8, 'metric':"C"};

function checkBattery(current_value,factor){

    if( current_value < factor.min && 'min' in factor){
        console.log(`${factor.name} is too low(${current_value}${factor.metric})`);
        return false;
    } else if(current_value > factor.max  && 'max' in factor) {
        console.log(`${factor.name} is too high (${current_value}${factor.metric})`);
        return false;
    }
    return true;
}

function batteryIsOk(temperature_value, soc_value, charge_rate_value) {
    console.log("+++++++++++");
    isTemperatureOk = checkBattery(temperature_value,temperature);
    isStateOfChargeOk = checkBattery(soc_value,stateOfCharge);
    isChargeRateOk = checkBattery(charge_rate_value,chargeRate);
    return isTemperatureOk && isStateOfChargeOk && isChargeRateOk;
}


module.exports = {
    batteryIsOk
}