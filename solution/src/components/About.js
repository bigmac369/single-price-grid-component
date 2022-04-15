import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Description>
      <h2>Why Us</h2>
      <p>
        Tutorials by industry experts Peer &amp; expert code review Coding
        exercises Access to our GitHub repos Community forum Flashcard decks New
        videos every week
      </p>
    </Description>
  );
}

const Description = styled.div`
  width: 19.8125rem;
  height: 16.1875rem;
  background-color: #4bbfbc;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  grid-column: 2 / 3;
  grid-row: 2/ 3;

  @media (max-width: 650px) {
    max-width: 311px;
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  h2 {
    font-size: 18px;
    padding: 0 40px;
    color: #ffffff;
    transform: translateY(10px);
  }

  p {
    font-size: 14px;
    padding: 0 40px;
    padding-right: 100px;
    line-height: 20px;
    color: #ffffff;
    opacity: 0.75;
  }
`;
