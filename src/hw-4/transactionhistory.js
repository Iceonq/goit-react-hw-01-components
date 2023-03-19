import {} from '../hw-4/transactionhistory.css';

export function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead class="transaction-header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(transaction => {
        return (
          <tbody class="transaction" id={transaction.id}>
            <tr>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
