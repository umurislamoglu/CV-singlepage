import './style/main.scss';
import Header from "./layout/Header";
import About from "./layout/About";
import Portfolio from "./layout/Portfolio";
import Comments from "./layout/Comments";
import Contact from "./layout/Contact";

function App() {
  return (
    <div >
      <Header />
      <About />
      <Portfolio />
      <Comments />
      <Contact />
    </div>
  );
}

export default App;
