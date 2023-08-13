import React from 'react';

import PropTypes from 'prop-types';

import Repository from './Repository';

import {Container} from './styles';

function Repositories({repos}) {

  return(
    <Container>
      <Repository repos={repos}/>
    </Container>
  )
};

export default Repositories;

Repositories.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


