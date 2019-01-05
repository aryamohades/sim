// SIMULATION PARAMETERS
const start = 1;
const end = 100;
const n = 6;
const remove = false;
const iterations = 100000;

// BEGIN SIMULATION CODE

/**
 * Set up an array of numbers from start through end
 * Select and remove n values from that array
 * Return the max value from those chosen values
 */
function compute(start, end, n, remove) {
  // Set up an array to contain our numbers
  const numbers = [];

  // push numbers from 'start' through 'end' into array
  for (let i = start; i <= end; ++i) {
    numbers.push(i);
  }
  
  // create a variable max to hold our final maximum value chosen
  let max = 0;

  // choose n values from the array, removing the selected values
  // and keeping track of the max as you go
  for (let i = 0; i < n; ++i) {
    // get a random index to remove from to simulate choosing a random piece of paper
    const idx = Math.floor(Math.random() * numbers.length);
    
    // recompute max
    if (numbers[idx] > max) {
      max = numbers[idx];
    }
    
    if (remove) {
      // remove the chosen value
      numbers.splice(idx, 1);
    }
  }
  
  // return the overall max
  return max;
}

// initialize sum
let sum = 0;

// run the simulation
for (let i = 0; i < iterations; ++i) {
  // add overall chosen max to our sum
  sum += compute(start, end, n, remove);
}

// average all of the max values found
const result = sum / iterations;

// log the result
console.log(result);
