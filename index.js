// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let theDistance = 42;
  let blocks = Math.abs(distance - theDistance);
  console.log(blocks);
  return blocks;
}

function distanceFromHqInFeet(distance) {
  let Block = distanceFromHqInBlocks(distance);
  let theFeet = Block * 264;
  console.log(theFeet);
  return theFeet;
}

function distanceTravelledInFeet(distance1, distance2) {
  let theDistance = Math.abs(distance1 - distance2);
  console.log(theDistance);
  let thefeet = theDistance * 264;
  return thefeet;
}
function calculatesFarePrice(start, destination) {
  let theDistance = Math.abs(start - destination);
  let thefeet = theDistance * 264;
  if (thefeet < 400) {
    return 0;
  } else if (thefeet < 2000 && thefeet > 400) {
    let Discount = thefeet - 400;
    return Discount * 0.02;
  }else if( thefeet > 2000 && thefeet < 2500) {
    return 25;
  }
  
  else {
    return 'cannot travel that far';
  }
}
console.log(calculatesFarePrice(34, 24));
