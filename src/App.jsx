//Styled Components essentially allow us to write CSS right inside
// our JavaScript component files. And the way it works is that we
// take a regular HTML element and then using the styled function we
// create a brand new React component with some CSS styles applied
// to it. And we can then use and reuse that new component instead
// of using the regular HTML element.

import { styled } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("Check in")}>Check in</Button>
        <Button onClick={() => alert("Check out")}>Check out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
