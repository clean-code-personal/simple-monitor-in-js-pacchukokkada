const {expect} = require('chai');
const { batteryIsOk } = require('../bms-monitor');

function test(){
    expect(batteryIsOk(25, 70, 0.7)).to.be.true;

    expect(batteryIsOk(50, 70, 0.2)).to.be.false;
    expect(batteryIsOk(-10,60,0.6)).to.be.false;

    expect(batteryIsOk(30,100,0.4)).to.be.false;
    expect(batteryIsOk(20,10,0.2)).to.be.false;

    expect(batteryIsOk(25,35,1.2)).to.be.false;
    expect(batteryIsOk(40,80,0.81)).to.be.false;

    expect(batteryIsOk(60,19,0.92)).to.be.false;
    
}

test();
