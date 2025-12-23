
import  Container  from "./components/Container";

import Logo from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Container>
        <Logo/>  
      </Container>

      <Container>
        <Menu />
      </Container>



    
    </>
  );
}
export { App };
