import logo from "./assets/logo_welbex.svg";
import "./App.scss";
import { BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

function App() {
  return (
    <div className="App px-[150px] font-bodyFont pb-[20px] pt-[46px] w-full h-auto bg-bodyColor text-lightText">
      <header className="flex justify-between gap-[30px]">
        <section className="flex gap-[52px]">
          <div>
            <img src={logo} alt="logo" />

            <p className="font-light pt-[10px] block w-[165px] text-[10px] font-miniFont text-justify leading-[12.19px]">
              крупный интегратор CRM <br />
              в Росcии и ещё 8 странах
            </p>
          </div>
          <div>
            <ul>
              <li className="flex gap-[30px] font-medium">
                <a href="/#">Услуги</a>
                <a href="/#">Выджеты</a>
                <a href="/#">Интеграции</a>
                <a href="/#">Кейсы</a>
                <a href="/#">Сертификаты</a>
              </li>
            </ul>
          </div>
        </section>
        <section className="flex gap-[47px]">
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
