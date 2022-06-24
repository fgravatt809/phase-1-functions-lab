function distanceFromHqInBlocks(pickUpBlock) {
    //return Math.abs (42 - pickUpBlock)
    if (pickUpBlock <= 42) {
        return 42 - pickUpBlock
    } else {
        return pickUpBlock - 42
    }
}
function distanceFromHqInFeet(pickUpBlock) {
    return distanceFromHqInBlocks(pickUpBlock) * 264 
}
function distanceTravelledInFeet(start, destination) {
    // return Math.abs((start - destination) * 264)
    if (start > destination) {
        return (start - destination) * 264
    } else { 
        return (destination - start) * 264
    }
}
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)
    if(distance <= 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if(distance >2500) {
        return 'cannot travel that far'
    }
}