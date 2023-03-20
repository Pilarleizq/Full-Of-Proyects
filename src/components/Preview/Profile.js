import React from 'react';
import PropTypes from 'prop-types';

function Profile({ avatar, defaultAvatar, className }) {
  // const avatarImg = avatar === '' ? defaultAvatar : avatar;
  return <img className={className} src={avatar} alt="" />;
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
