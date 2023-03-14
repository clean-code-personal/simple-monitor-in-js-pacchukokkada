const factors = {
    'temperature' : {'name':'temperature', 'max':45, 'min':0, 'unit':"°C" },
    'stateOfCharge' : {'name':'state of charge','max':80, 'min':20, 'unit':"%" },
    'chargeRate' : {'name':'charge rate', 'max':0.8, 'min':0, 'unit':"C"}
}

function checkBattery(current_value,factor){
    let isOk = true; 
    if(current_value > factors[factor].max) {
        console.log(`${factors[factor].name} is too high (${current_value}${factors[factor].unit})`)
        isOk = false;
    }
    else if(current_value < factors[factor].min ){
        console.log(`${factors[factor].name} is too low (${current_value}${factors[factor].unit})`)
        isOk = false;
    }
    return isOk;
}


function batteryIsOk(temperature_value, soc_value, charge_rate_value) {
    isTemperatureOk = checkBattery(temperature_value,'temperature');
    isStateOfChargeOk = checkBattery(soc_value,'stateOfCharge');
    isChargeRateOk = checkBattery(charge_rate_value,'chargeRate');
    return isTemperatureOk && isStateOfChargeOk && isChargeRateOk;
}
batteryIsOk(60,10,0.6);

module.exports = {
    batteryIsOk
}