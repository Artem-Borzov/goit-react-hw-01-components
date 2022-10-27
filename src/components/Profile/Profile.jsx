import PropTypes from 'prop-types';
import defaultImg from '../../img/defaultImage.jpg';
import css from './Profile.module.css';

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
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}a</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li className={css.statsItem}>
          <span class="label">Likes</span>
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
