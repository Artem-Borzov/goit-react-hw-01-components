import Profile from './Profile';
import userData from '../user.json';
import data from '../data.json';
import Statistics from './Statistics';

export default function App() {
  return (
    <div>
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
    </div>
  );
}
