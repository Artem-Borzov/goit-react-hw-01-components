import css from './index.module.css';
import Profile from './Profile/Profile';
import userData from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionsHistory/TransactionHistory';

export default function App() {
  return (
    <div className={css.container}>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
