/*const users = [
  { name: 'Júlio', technologies: ['Python', 'JavaScript'] },
  { name: 'Jasmine', technologies: ['JavaScript', 'CSS'] },
  { name: 'Tuane', technologies: ['HTML', 'Node.js'] }
];

for (let user of users) {
  console.log(`${user.name} works with ${user.technologies}`);
}

function workWithCss(user) {
  for (let technology of user.technologies) {
    if (technology == 'CSS') {
      return true;  
    }
  }

  return false;
}

for (let user of users) {
  if (workWithCss(user)) {
    console.log(`The user ${user.name} works with CSS`);
  }
}
*/


// question 02

const users = [
  {
    name: "Salvio",
    income: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: "Marcio",
    income: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: "Lucia",
    income: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

function calculateBalance(income, expenses) {
  const incomeSum = sumNumbers(income);
  const expensesSum = sumNumbers(expenses);

  const balance = incomeSum - expensesSum;
  
  return balance;
}

function sumNumbers(numbers) {
  let sum = 0;
  
  for (let number of numbers) {
    sum += number;
  }

  return sum; 
}


let stringNegativeorPositive;
let balance;

for (let user of users) {
  stringNegativeorPositive = 'NEGATIVE';
  
  balance = calculateBalance(user.income, user.expenses);

  if (balance >= 0) stringNegativeorPositive = 'POSITIVE';

console.log(`${user.name} has ${stringNegativeorPositive} balance of ${balance}`);

}










