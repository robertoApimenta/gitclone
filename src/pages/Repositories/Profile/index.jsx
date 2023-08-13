import React from 'react';

import PropTypes from 'prop-types';

import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md';

import {Container, Header, Avatar, Perfil, Name, Inner, Data} from './styles';

function Profile({user}) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url}/>
        <Perfil>{user.login}</Perfil>
        <Name>{user.name}</Name>
      </Header>

      <Inner>
        <Data>
          <MdGroup size={20} />
            {user.followers}&nbsp;<i>seguidores</i>&nbsp;  &middot; {user.following} &nbsp;<i>seguindo</i>
        </Data>
        {user.company ? <Data>
          <MdWork size={20}/>
          {user.company}
        </Data> : ''}

        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
        <Data>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Data>
      </Inner>
    </Container>
  )
}

export default Profile;

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    blog: PropTypes.string.isRequired,
    location: PropTypes.string,
  }).isRequired,
};
