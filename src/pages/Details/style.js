import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(43deg, #102d71 0%, #000000 52%, #c12a23 100%)
    no-repeat;

  h1 {
    margin: 3rem 0;
  }

  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 100%;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 50%;
  }

  button {
    background-color: #6654da;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: #fff;
    padding: 0.8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all 0.3s;
  }

  button:hover {
    background: #5848c2;
  }

  span {
    line-height: 130%;
    margin-bottom: 1rem;
    font-size: 110%;
  }

  .release-date {
    opacity: 0.5;
  }


  @media (max-width: 750px) {
    height: auto;

    div.details {
      align-items: center;
      text-align: center;
      margin: 0;
      max-width: 80%;
    }
  }
`;
