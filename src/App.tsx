import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App mdx:overflow-auto font-normal px-[15px] md:px-[150px] font-bodyFont pb-[60px] md:pb-[20px] pt-[20px] md:pt-[46px] w-full h-[100vh] bg-bodyColor text-lightText">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
