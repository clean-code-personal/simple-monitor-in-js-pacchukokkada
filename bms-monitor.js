const { temperature, stateOfCharge, chargeRate, checkBattery} = require('./batteryChecker')

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