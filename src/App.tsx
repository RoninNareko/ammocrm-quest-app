import "./App.scss";
import redlight from "./assets/red light.png";
import purplelight from "./assets/purple light.png";
import purpleball from "./assets/purple ball.png";
import redball from "./assets/red ball.png";
import miniRedball from "./assets/red ball_mini.png";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <section>
      <img
        className="absolute mdx:hidden left-0 top-0 z-5"
        src={redlight}
        alt="red"
      />
      <img
        className="absolute mdx:hidden left-[35vw] top-0 z-5"
        src={purplelight}
        alt="purplelight"
      />
      <img
        className="absolute mdx:hidden left-[70vw] top-0 z-5"
        src={purpleball}
        alt="purpleball"
      />
      <img
        className="absolute mdx:hidden left-[30vw] top-[5vw] z-5"
        src={redball}
        alt="redball"
      />
      <img
        className="absolute mdx:hidden left-[63vw] top-[23vw] z-5"
        src={miniRedball}
        alt="redball"
      />
      <div
        className="App mdx:overflow-auto overflow-hidden
       font-normal px-[0px] md:px-[150px] font-bodyFont pb-[60px] md:pb-[20px] pt-[20px] md:pt-[46px] w-full h-[100vh] bg-bodyColor text-lightText"
      >
        <Header />
        <Main />
        <Footer />
      </div>
    </section>
  );
}

export default App;
