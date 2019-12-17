// let board = '';
// let size = 8;

// let position = size;

// makeBoard = () => { 
//     for(let i = size; i > 0; i--){
//         if(position % 2 === 0){
//             board = board + ' ';
        
//         } else {
//             board = board + '#';
//         };
//         position--;  
//     };
 
// };
// for(let i = size; i > 0; i--){
//     board = board + '\n';
//     makeBoard();
// }

// console.log (board); 

// let size = 8;

// let board = "";

// for (let y = 0; y < size; y++) {
//   for (let x = 0; x < size; x++) {
//     if ((x + y) % 2 == 0) {
//       board += " ";
//     } else {
//       board += "#";
//     }
//   }
//   board += "\n";
// }

// console.log(board);

//Chapter 3 Problems

//Problem 1

let min = function(a,b) {
    if (a < b) {
      return a
      console.log()
    } else if (b < a) {
      return b
    } else {
      console.log ('equal!')
    }
};

min(2,3);


//Problem 2
let isEven = function(num) {
  num = Math.abs(num);
  if (num === 0)
      return true;
  else if (num === 1)
      return false;
  else
      return isEven(num - 2);
};

//tests
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-762));

//Problem 3

let countBs = function(string) {
  return countChar(string, "B");
};

let countChar = function(string, letter) {
  letterCounter = 0;
  for (x=0; x<=string.length-1; x++) {
    if (string[x] === letter) {
      letterCounter++;
    }
  }
  return letterCounter;
};

console.log(countBs("BoBby"));
console.log(countChar("mississippi", "s"));