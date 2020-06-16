/**
 * Desafios para fortalecer alguns conceitos, entre eles:

    Booleanos;
    Organização;
    Padronização;
    Escrita.

  INTRODUÇÃO:
  Crie um programa para realizar operações bancárias na conta de um usuário.
 */


const user = {
  name: 'Júlio',
  transactions: [],
  balance: 0
};

/**
 * return true if the transactionType is credit or debit
 */
function validateTransaction(transactionType) {
  let isValidTransaction = true;

  try {

    if (transactionType !== 'credit' && transactionType !== 'debit')
      throw err;

  } catch(err) {
      isValidTransaction = false;
      console.log('invalid transaction type (only credit or debit)');
    }
  
  return isValidTransaction;
}

function createTransaction(transaction) {
  const isValid = validateTransaction(transaction.type);
  
  if (isValid) {
    user.transactions.push(transaction);
    if (transaction.type == 'credit') user.balance += transaction.value;
    else user.balance -= transaction.value;
  }
  
  return;
}

function getHigherTransactionByType(transactionType) {
  const isValid = validateTransaction(transactionType);
  let higherTransaction = {type: null, value: null};

  if (isValid) {
    
    for(let transaction of user.transactions) {
      if (transaction.type == transactionType && transaction.value > higherTransaction.value)
        higherTransaction = transaction;
    }
  }

  return higherTransaction;
}

function getAverageTransactionValue() {
  let sumTransactions = 0;
  
  for (let transaction of user.transactions) {
    sumTransactions += transaction.value;
  }

  const average = sumTransactions / user.transactions.length;

  return average;
}

function getTransactionsCount() {
  let sumAllTransactions = {credit: null, debit: null};

  for (let transaction of user.transactions) {
    if (transaction.type == 'credit') sumAllTransactions.credit++;
    else sumAllTransactions.debit++;
  }

  return sumAllTransactions;
}

createTransaction({ type: 'credit', value: 15 });
createTransaction({ type: 'credit', value: 50.5 });
createTransaction({ type: 'debit', value: 25 });


console.table(user);

console.log(getHigherTransactionByType('credit'));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());



