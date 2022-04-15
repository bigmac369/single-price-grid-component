import React from "react";
import styled from "styled-components";

export default function Community() {
  return (
    <Container>
      <h1>Join our community</h1>
      <h2>30-day, hassle-free money back guarantee</h2>
      <p>
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f5f5f5;
  width: 39.6875rem;
  height: 216px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 650px) {
    max-width: 311px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    padding-bottom: 20px;
    padding-top: 15px;
  }

  h1 {
    color: #2ab3b1;
    font-size: 24px;
    font-weight: 700;
    padding: 0 40px;

    @media (max-width: 650px) {
      font-size: 20px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }

  h2 {
    color: #c0df33;
    font-size: 18px;
    font-weight: 700;
    padding: 0 40px;

    @media (max-width: 650px) {
      font-size: 15px;
      padding-bottom: 5px;
    }
  }

  p {
    color: #9aa7be;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    padding: 0 40px;

    @media (max-width: 650px) {
      font-size: 14px;
      padding-bottom: 20px;
    }
  }
`;
