console.log('                            6 task');

function printPyramid(n){
  let sumbol = 1;
  for(let i = n - 1; i >= 0; i--){
    console.log(" ".repeat(i) + "#".repeat(sumbol) + " ".repeat(i));
    sumbol += 2;
  }
}
printPyramid(3);