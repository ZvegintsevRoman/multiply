module.exports = function multiply(first, second) {
  let numA = first.split('');
  let numB = second.split('');
  let stack = [];
  let result = [];

  for (let i = 0; numA[i]; i++) {
    for (let j = 0; numB[j]; j++) {
      if (!stack[i + j]) stack[i + j] = 0;      
      stack[i + j] += numA[i] * numB[j];
    }
  }

  stack = stack.reverse().map(item => item.toString());
	
  while (stack.length > 1) {        
    result.push(stack[0].slice(-1));
    if (stack[0].length === 1) { 
      stack.shift();
    }
    else { 
      stack[1] = (parseInt(stack[1]) + parseInt(stack[0].slice(0, -1))).toString();
      stack.shift();
    }
  }
  
  result = stack[0] + result.reverse().join('');

  return result;
}
