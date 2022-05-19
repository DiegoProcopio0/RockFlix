import styled from "styled-components";

export const ButtonLink = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.7rem 0.9rem;

  width: 10.2rem;
  
  border-radius: 0.3rem;

  cursor: pointer;
  transition: all 0.3s;

  font-weight: bold;
  font-size: .9rem;

  background-color: #E9E6E3;
  border: none;

  :hover {
    transform: scale(1.1);
  }

  img {
    width: 35px;
    height: 25px;
  }
`;
