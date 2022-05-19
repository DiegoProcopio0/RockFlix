import Shuffle from "../../assets/shuffle.svg"

import { ButtonLink } from "./styles"


export function Button() {
    return (
        <ButtonLink>
            <img src={Shuffle} alt="Encontrar Filmes" />
            Find Movie
        </ButtonLink>
    )
}