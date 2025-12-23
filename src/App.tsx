import "./styles/theme.css";
import "./styles/global.css";
import  Container  from "./components/Container";
import  Heading  from "./components/Heading";

function App() {
  return (
    <>
      <Container>
        <Heading>logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>

      <div className="container-fluid">
        <div className="container">
          <div className="content">
            <section>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
              esse! Vel neque, alias doloremque, optio facere sunt maiores,
              velit et ipsam nemo asperiores assumenda adipisci dicta laborum
              inventore fuga culpa!
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export { App };
