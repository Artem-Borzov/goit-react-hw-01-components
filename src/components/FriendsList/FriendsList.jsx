import PropTypes from 'prop-types';
import FriendListItem from '../FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
