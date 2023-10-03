// Code your solution in this file!
let headquaters = 42
let distance;
function distanceFromHqInBlocks(destination) {
    distance = destination - headquaters
    return Math.abs(distance)
}

function distanceFromHqInFeet(destination) {
    distance = (destination - headquaters) * 264
    return Math.abs(distance)
}
let start;
function distanceTravelledInFeet(start, destination) {
    distance = (destination - start) * 264
    return Math.abs(distance)
}
let fareCost;
function calculatesFarePrice(start, destination) {
    distance = (destination - start) * 264
    distance = Math.abs(distance)
    if (distance < 400) {
        return 0
    } else if (distance >= 400 && distance < 2000) {
        return distance = (distance - 400) * 0.02
    } else if (distance > 2000 && distance <2500) {
        return 25
    } else if (distance > 2500) {
        return "cannot travel that far"
    }
}