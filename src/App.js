import "./styles.css";
import Main from "./components/Main/main";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav/nav";

export default function App() {
  return (
    <div id="wrapper">
      <Nav />
      <div id="content-wrapper" className="d-flex flex-column">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
