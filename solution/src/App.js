import Community from "./components/Community";
import Subscription from "./components/Subscription";
import About from "./components/About";
import styled from "styled-components";

function App() {
  return (
    <Gridbox>
      <Community />
      <Subscription />
      <About />
    </Gridbox>
  );
}

export default App;

const Gridbox = styled.div`
  height: 29.6875rem;
  width: 39.6875rem;
  display: grid;
  grid-template-columns: 19.8125rem 19.875rem;
  grid-template-rows: 13.5rem 16.1875rem;

  @media (max-width: 650px) {
    max-width: 300px;
    grid-template-columns: 311px;
    grid-template-rows: 267px 228px 228px;
  }

  // grid-template-columns: max-content max-content;
  // grid-template-rows: max-content max-content;
`;
