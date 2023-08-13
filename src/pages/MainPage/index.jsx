import React, {useState} from "react";

import {MdSearch} from "react-icons/md";

import { Container, Form, Logo, Title, Input, Button } from "./styles";

// import do svg
import logoGitHub from '../../assets/images/github-logo.svg';

function MainPage() {
  const [perfil, setPerfil] = useState('');

  return (
    <Container>
     <Logo src={logoGitHub} alt="Logo do github svg"/>
     <Title>GitHub</Title>
     <Form>
      <Input
        placeholder="Insira o git aqui"
        value={perfil}
        onChange={(e) => setPerfil(e.target.value)}
      />
      <Button to={`/${perfil}/repositories`}>
        <MdSearch size={42}/>
      </Button>
     </Form>
    </Container>
  );
}

export default MainPage;
