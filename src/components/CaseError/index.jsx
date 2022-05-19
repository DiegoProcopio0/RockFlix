import imageCaseError from "../../assets/case-error.png"
import {ContentContainer} from "./styles"

export function CaseError() {
    return (
        <ContentContainer>
            <img src={imageCaseError} alt="" />
            <p className="content">Error! Atualize a página e tente novamente !</p>
        </ContentContainer>
    )
}