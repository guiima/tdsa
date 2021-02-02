import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Teste = styled.h1`
  background: red;
`;

// import { Container } from './styles';

const Home = () => {
  const history = useHistory();
  const goTeste = () => {
    console.log("foi");
    history.push("/teste");
  };

  return (
    <>
      <Teste>Olaaaa</Teste>
      <button onClick={() => goTeste()}>go teste2</button>
    </>
  );
};

export default Home;
