import Shuffle from "../../assets/shuffle.svg";

import { Button } from "../../components/Button"

import { Container, Header } from "./styles"

import { Link } from "react-router-dom"



export function SearchMovie() {

  return (
   
    <Container>
      <Header>
        <img src={Shuffle} alt="Encontrar Filmes" />
        <h1>Não sabe o que assistir?</h1>
      </Header>


      <Link to="/details/335787">
           <Button  >  
           </Button>  
      </Link>  
      

      <p>
           Clique em "Encontrar filme" que traremos informações
           de algum filme para você assistir hoje.
        </p>
    </Container>
  );
}
