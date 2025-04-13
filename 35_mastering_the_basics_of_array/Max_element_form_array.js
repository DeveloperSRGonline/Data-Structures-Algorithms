let arr = [12, 2, 100, 23, 6, 32, 43];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Max element : " + max)
