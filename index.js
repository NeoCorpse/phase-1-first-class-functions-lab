// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    return arr.slice(0,2)
}

function returnLastTwoDrivers(arr) {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num
    }
}

const fareDoubler = createFareMultiplier(2)
const fareQuintupler = createFareMultiplier(4)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arr, fun) {
    return fun(arr)
}