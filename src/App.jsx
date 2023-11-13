//Styled Components essentially allow us to write CSS right inside
// our JavaScript component files. And the way it works is that we
// take a regular HTML element and then using the styled function we
// create a brand new React component with some CSS styles applied
// to it. And we can then use and reuse that new component instead
// of using the regular HTML element.

import { styled } from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("Check in")}>Check in</Button>
      <Button onClick={() => alert("Check out")}>Check out</Button>

      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  );
}

export default App;
