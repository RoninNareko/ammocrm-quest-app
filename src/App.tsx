import logo from "./assets/logo_welbex.svg";
import "./App.scss";
import { BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

function App() {
  return (
    <div className="App px-0 md:px-[150px] font-bodyFont pb-[20px] pt-[20px] md:pt-[46px] w-full h-auto bg-bodyColor text-lightText">
      <header className="flex justify-center w-full md:justify-between md:gap-[30px]">
        <section className="gap-[52px] flex">
          <div className="hidden md:block">
            <img src={logo} alt="logo" />

            <p className="font-light pt-[10px] block w-[165px] text-[10px] font-miniFont text-justify leading-[12.19px]">
              крупный интегратор CRM <br />
              в Росcии и ещё 8 странах
            </p>
          </div>
          <div>
            <ul className="flex gap-[30px] text-[16px] md:font-medium">
              <li>
                <a href="/#">Услуги</a>
              </li>
              <li>
                <a href="/#">Выджеты</a>
              </li>
              <li>
                <a href="/#">Интеграции</a>
              </li>
              <li>
                <a href="/#">Кейсы</a>
              </li>
              <li className="hidden md:block">
                <a href="/#">Сертификаты</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="hidden gap-[47px] md:flex">
          <div>
            <p>+7 555 555-55-55</p>
          </div>
          <div className="flex gap-[30px]">
            <a href="/#">
              <BiLogoTelegram width={20} height={20} />
            </a>
            <a href="/#">
              <BiLogoWhatsapp width={20} height={20} />
            </a>
            <a href="/#">
              <LiaPhoneVolumeSolid width={20} height={20} />
            </a>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
