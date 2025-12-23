
import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import  Container  from "./components/Container";
import Logo from "./components/Logo";


import "./styles/theme.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Container>
        <Logo/>  
      </Container>

      <Container>
        <Menu />
      </Container>


       <Container>
        <CountDown/>
      </Container>



    
    </>
  );
}
export { App };
