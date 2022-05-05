function isValidParentheses(str) {
  let stack = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] == "(") stack++;
    else if(stack > 0){
      stack--;
    }else{
      return false;
    }
  }
  return stack > 0 ? false : true;
}

let res = isValidParentheses("(())((()())())")
console.log(res);