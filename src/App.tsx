import Menu from "./components/Menu";
import CountDown from "./components/CountDown";
import Container from "./components/Container";
import Logo from "./components/Logo";
import DefaultInput from "./components/DefaultInput";

import "./styles/theme.css";
import "./styles/global.css";

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
            <p>ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className="formRow">
            <button>enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
export { App };
