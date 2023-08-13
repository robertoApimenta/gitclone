import React from 'react';

import {Container, Name, Description, Footer, Lang, Link} from './styles';

function repository ({repo}) {
  console.log(repo)
  return (
    <Container>
      <Name>{repo.name}</Name>
      <Description>{repo.description}</Description>
      <Footer color="red">
        <Lang>PHP</Lang>
        <Link href="www.globo.com" target="_blank">Link</Link>
      </Footer>
    </Container>
  )
}

export default repository;
