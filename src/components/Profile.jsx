import PropTypes from 'prop-types';
import defaultImg from '../img/defaultImage.jpg';

export default function Profile({
  username = 'Anonymous',
  tag = 'anon',
  location = 'Somewhere',
  avatar = defaultImg,
  followers = '> 0',
  views = '> 0',
  likes = '> 0',
}) {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt="User avatar" class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">@{tag}a</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers </span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views </span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes </span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
