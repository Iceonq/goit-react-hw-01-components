import user from '../hw-1/user.json';
import data from '../hw-2/data.json';
import friends from '../hw-3/friends.json';
import transactions from '../hw-4/transactions.json';

import { Profile } from '../hw-1/profile';
import { Statistics } from 'hw-2/stats';
import { FriendsList } from 'hw-3/friendslist';
import { TransactionHistory } from 'hw-4/transactionhistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
