let randomBuffer = [];

function randomArrayWithoutReps( { min, max, arrayLength, randomArray = [], integers=true } ) {
  if (arrayLength > Math.abs(min - max)) {
    throw "Array length fails to exceed range."
    }
  while (randomArray.length < arrayLength) {
    const randNum = integers
      ? (Math.floor(Math.random() * (max - min) + min))
      : (Math.random() * (max - min) + min);
    if (!randomArray.includes(randNum)) { randomArray.push(randNum); }
    }
  return randomArray;
}

function randomStream( { min, max, lengthWithoutRep, integers=true } ) {
    [...n] = randomArrayWithoutReps( { min: min, max: max, arrayLength: lengthWithoutRep, randomArray: randomBuffer, integers: integers } );
    randomBuffer = n;
    return randomBuffer.shift();
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function stream() {
  while (true) {
    document.getElementById("output").innerHTML = randomStream( { min: 0, max: 6, lengthWithoutRep: 5, integers: true } );
    await sleep(1000);
  }
}

stream();
