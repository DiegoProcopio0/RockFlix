import React, { useEffect, useState } from "react";
import Shuffle from "../../assets/shuffle.svg";

import { CaseError } from "../../components/CaseError"
import { Button } from "../../components/Button"
import { BASE_URL } from "../../components/api/Api";
import { ApiKey as API_KEY} from "../../config/key"

import { Container, Header } from "./styles"

import { Link } from "react-router-dom"

import { GoVerified } from "react-icons/go";


export function FindMovie() {

  const [data, setData] = useState([]);
    const [num] = useState({
        id: Math.floor(Math.random() * 2880),
    });
    const [err, setErr] = useState();
    
    const mudarId = () => {
      return document.location.reload(true);
    };

    useEffect(()=>{
      async function getData(){
          try {
            const Get = await BASE_URL.get(`/${num.id}?api_key=${API_KEY}`)
            setData(Get.data);
        }catch(erro){
            setErr(erro.response.status);
        };
      }

      getData()
    }, []);

  return (
    <Container> 
     {
      err === 404 ? (
             <CaseError />
      ) : (
        <>
        <Header>
        <img src={Shuffle} alt="Encontrar Filmes" />
        <h1>Não sabe o que assistir?</h1>
      </Header>
          <div><GoVerified /></div>
      <Link to={`/details/${num.id}`}>
           <Button onClick={() => mudarId()} >  
           </Button>  
      </Link>  
        <p>
           Clique em "Encontrar filme" que traremos informações
           de algum filme para você assistir hoje.
        </p>
      </>
    )}
    </Container>
  );
}
