// CHALLENGE 1
// Function of student scores.
// The input should be between 0 and 100, any score above 100 is incorrect.
// The result of the correct grade  is between A and E
   
function studentGrade (score) {
  if (score > 79 && score <= 100) return 'A';
  else if (score >= 60 &&  score <= 79) return 'B';
  else if (score <= 59 && score >= 49) return 'C';
  else if (score >= 40 && score <= 49) return 'D';
  else if (score >= 0 && score < 40) return 'E';
  else return 'Incorrect score';
}

console.log(studentGrade(2));

// Print 'Incorrect score' when score not reflecting.


// CHALLENGE 2: Speed Detector
// The function takes input of car speed e.g 80
// The average speed limit 70. 
// Above this limit, one demerit point should given to the driver

function speedDetector(velocity) {
  let point ='';
  if (velocity <= 70) return 'OK';
  else (point = 0)
  if (point >= 12) return 'License suspended';
  else return `points: ${point}`;
}
// To print this records from the computer || speedDetector
console.log(speedDetector(12));