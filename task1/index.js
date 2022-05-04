function calculate(str) {
  let arr = str.split(' ');
  let count;
  
  switch (arr[1]){
    case '+':
      return arr[0] + arr[2]
    case '-':
      count = arr[0].length - arr[2].length;
      break;
    case '*':
      count = arr[0].length * arr[2].length;
      break;
    case "//":
      count = Math.floor(arr[0].length / arr[2].length);
      break;
  }
  return ".".repeat(count);
}

let res = calculate(".. // ...");

console.log(res);