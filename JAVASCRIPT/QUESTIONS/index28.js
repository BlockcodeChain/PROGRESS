// write js program to shuffle an array 

let array = [1, 2, 3, 4, 6, 5];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    
    // swap
  [arr[j],arr[i]]=[arr[i], arr[j]];
  }
  return arr;
}

console.log(shuffle(array));