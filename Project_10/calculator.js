const calculator = (operation, ...numbers) => {
    const legend = '+-*/';
    const ind = legend.indexOf(operation);
    return numbers.reduce((acc, val) => {
       switch(operation){
          case '+': return acc+val;
          case '-': return acc-val;
          case '*': return acc*val;
          case '/': return acc/val;
       };
    });
 };
 console.log(calculator('+', 12, 45,));
 console.log(calculator('-', 89, 45,));
 console.log(calculator('*', 12, 45,));
 console.log(calculator('/', 189000, 45,));


