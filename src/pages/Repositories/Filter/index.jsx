import React from 'react';

import {Container, Selector, Cleanner} from './styles';

function Filter() {

  const langs = [
    {name: 'javascript', count: 5, color: 'yellow'},
    {name: 'typescript', count: 5, color: 'blue'},
    {name: 'php', count: 5, color: 'black'},
    {name: 'java', count: 5, color: 'green'},
  ]

  return (
    <Container>
      {langs.map((el) => (
    <Selector key={el.name} color={el.color}>
      <span>{el.name}</span>
      <span>{el.count}</span>
    </Selector>
  ))}
      <Cleanner>
        Limpar
      </Cleanner>
    </Container>
  )
}

export default Filter
