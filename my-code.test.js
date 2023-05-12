const { sum, inOneHour } = require('./my-code');

describe('Function matematicas', () => { 
    it('function sum(){}', () => { 
        expect(sum(1,2)).toBe(3);
    })
})


// test de time
describe('Function de Time', () => { 
    it('function inOneHour(){}', () => { 
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000);
    })
})


