import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;
  flex-direction: column;

  margin: 0;
  padding: 8rem 0 1.9rem;

  height: 100vh;
  width: 100%;

  p {
    max-width: 24rem;
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.3rem;
    color: #fffcf9;
    margin-bottom: 6rem;
  }

  
`;

export const Header = styled.header`
  text-align: center;

  img {
    margin-bottom: 0.8rem;
    width: 5rem;
  }
`;
