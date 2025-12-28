import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import Container from "./components/Container";
import Logo from "./components/Logo";
import DefaultInput from "./components/DefaultInput";
import DefaultButton from "./components/DefaultButton";
import Cycles from "./components/Cycles";
import Footer from "./components/Footer";

import "./styles/theme.css";
import "./styles/global.css";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";

function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>

        <form className="form" action="">
          <div className="formRow">
            <DefaultInput type="text" labelText="Task" id='meuInput' placeholder="Digite algo"/>
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>
          <div className="formRow">
           <DefaultButton icon={<PlayCircleIcon />} color='green'/>
          </div>
        </form>
      </Container>

      <Container>
      <Footer />
    </Container>
    </>
  );
}
export { App };
