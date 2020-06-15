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
  console.log(transactionType)
  try {

    if (transactionType !== 'credit' && transactionType !== 'debit')
      throw err;

  } catch(err) {
      isValidTransaction = false;
      console.log('invalid transaction type (only credit or debit)');
    }
  
  return isValidTransaction;
}


/**
 * create a transaction
 */
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

}

createTransaction({ type: 'credit', value: 50.5 });

console.table(user);

