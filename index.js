// Code your solution in this file!
function distanceFromHqInBlocks(x) {
  let hq = 42
  return x > hq ? x - hq : hq - x
}

function distanceFromHqInFeet(x) {
  return distanceFromHqInBlocks(x) * 264
}

function distanceTravelledInFeet(beg, des) {
  return beg > des ? ((beg - des) * 264) : ((des - beg) * 264)
}

function calculatesFarePrice(beg, des) {
  let feet = distanceTravelledInFeet(beg, des)
  let fare = 0.02
  let flatFare = 25
  if (feet < 400) {
    return feet * 0
  }else if (feet > 400 && feet < 2000) {
    return (feet - 400) * fare
  }else if (feet > 2000 && feet < 2500) {
    return flatFare
  }else {
    return 'cannot travel that far'
  }
}