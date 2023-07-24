import "./App.scss";
import Header from "./components/Header/Header";
import { Main } from "./components/Header/Main/Main";

function App() {
  return (
    <div className="App font-normal px-[15px] md:px-[150px] font-bodyFont pb-[60px] md:pb-[20px] pt-[20px] md:pt-[46px] w-full h-auto bg-bodyColor text-lightText">
      <Header />
      <Main />
    </div>
  );
}

export default App;
