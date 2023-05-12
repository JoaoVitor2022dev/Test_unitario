const sum = (a,b) => {
   return a + b
}

const inOneHour = () => { 
    const now = Date.now(); 
    const inOneHourInMili = 1 * 60 * 60 * 1000
    return now + inOneHourInMili   
}

module.exports = { sum, inOneHour }

