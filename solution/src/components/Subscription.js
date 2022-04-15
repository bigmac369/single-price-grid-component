import React from "react";
import styled from "styled-components";

export default function Subscription() {
  return (
    <Price>
      <h2>Monthly Subscription</h2>
      <h1>
        $29 <span>per month</span>
      </h1>
      <p>Full access for less than $1 a day</p>
      <button>Sign Up</button>
    </Price>
  );
}

const Price = styled.div`
  background-color: #2ab3b1;
  height: 259px;
  width: 317px;
  color: #ffffff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-column: 1 / 2;
  grid-row: 2/ 3;

  @media (max-width: 650px) {
    max-width: 311px;
    transform: translateY(-31px);
  }

  h2 {
    font-size: 18px;
  }

  h1 {
    font-size: 32px;

    span {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.5;
      display: inline-block;
      transform: translateY(-5px);
    }
  }

  button {
    width: 237px;
    height: 48px;
    background: #c0df33;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.0973011);
    border-radius: 5px;
    border: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;

    &:active {
      outline: none;
      box-shadow: inset 0px 0px 5px #c1c1c1;
    }
  }
`;
