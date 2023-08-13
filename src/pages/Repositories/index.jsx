import React, {useEffect, useState} from 'react';

import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Profile from './Profile';
import Filter from './Filter';
import RepositoriesInd from './Repositories';

import {Container, Sidebar, Main} from './styles';

function Repositories() {
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState('');

  const {perfil} = useParams();

  useEffect(() => {
    const loadData = async () => {
      const dataUser = await api.get(`https://api.github.com/users/${perfil}`);
      setUser(dataUser.data);
    };

    const loadRepos = async () => {
      const dataRepos = await api.get(`https://api.github.com/users/${perfil}/repos`);
      setRepos(dataRepos.data);
    };

    loadData();
    loadRepos();
  }, []);

  return (
      <Container>
          <Sidebar>
            <Profile user={user} />
            <Filter />
          </Sidebar>
          <Main>
            <RepositoriesInd repos={repos} />
          </Main>
      </Container>
  )
}

export default Repositories


