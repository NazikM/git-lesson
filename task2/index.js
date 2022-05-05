function grid(number) {
  if(number < 0) return null;

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let grid = [];

  for(let i = 0; i < number; i++){
    grid[i] = [];
    for(let j = 0; j < number; j++){
      grid[i][j] = alphabet[(j+i)%26];
    }
  }

  return grid;
}

let res = grid(30);

console.log(res)