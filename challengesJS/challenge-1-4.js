const user = {
  name: 'Júlio',
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  try {

    if (transaction.type !== 'credit' && transaction.type !== 'debit')
      throw err;
    else
      user.transactions.push(transaction);
  
  } catch(err) {
      console.log('invalid transaction type (only credit or debit)');
    } 
  
  return;
}

createTransaction({ type: 'credit', value: 50.5 });



