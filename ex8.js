const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const tempsF = [60, 65, 70, 68, 72, 78, 80];

function convertFtoC(tempF) {
  return (tempF - 32) * (5 / 9);
}

/* Write code to print out the temperature in Celsius for each day:
   `${dayName} it will be ${tempC} degrees Celsius`
*/
const zeroToSix = [0, 1, 2, 3, 4, 5, 6]
for (const num of zeroToSix) {
  console.log(dayNames[num] + " it will be " + convertFtoC(tempsF[num]));
}

for (let i = 0; i<dayNames; i++) {
  console.log(dayNames(i) + " it will be " + convertFtoC(tempsF[i]));
}
