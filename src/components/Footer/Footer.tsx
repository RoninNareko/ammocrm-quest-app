import { BiLogoTelegram, BiLogoWhatsapp } from "react-icons/bi";
import { LiaPhoneVolumeSolid } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="mt-[124px] mdx:mt-[35px]">
      <div
        className="grid gap-4 
      grid-cols-4 "
      >
        <div className="mdx:col-start-1 mdx:col-end-4">
          <ul className="text-left">
            <p className="text-[#656566] text-[14px] font-bold uppercase mb-[20px]">
              О компании
            </p>
            <li className="mt-[10px]">
              <a href="/#">Партнёрская программа</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Вакансии</a>
            </li>
          </ul>
        </div>
        <div className="mdx:col-start-1 mdx:col-end-3">
          <ul className="text-left">
            <p className="text-[#656566] text-[14px] font-bold uppercase mb-[20px]">
              Меню
            </p>
            <li className="mt-[10px]">
              <a href="/#">Расчёт стоимости</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Услуги</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Виджеты</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Интеграции</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Наши клиенты</a>
            </li>
          </ul>
        </div>
        <div className="mdx:col-start-3 mdx:col-end-4 mdx:w-max">
          <ul className="text-left">
            <p className="mb-[20px] text-transparent">_</p>
            <li className="mt-[10px]">
              <a href="/#">Кейсы</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Благодарственные письма</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Сертификаты</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Блог на Youtube</a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Вопрос / Ответ</a>
            </li>
          </ul>
        </div>
        <div className="mdx:col-start-1 mdx:col-end-4">
          <ul className="text-right mdx:text-left">
            <p className="text-[#656566] text-[14px] font-bold uppercase mb-[20px]">
              Контакты
            </p>
            <li className="mt-[10px]">
              <a href="tel:+75555555555">+7 555 555-55-55</a>
            </li>
            <li className="flex gap-[10px] justify-end mdx:justify-start">
              <a href="/#">
                <BiLogoTelegram width={20} height={20} />
              </a>
              <a href="/#">
                <LiaPhoneVolumeSolid width={20} height={20} />
              </a>
              <a href="/#">
                <BiLogoWhatsapp width={20} height={20} />
              </a>
            </li>
            <li className="mt-[10px]">
              <a href="/#">Москва, Путевой проезд 3с1, к 902</a>
            </li>
          </ul>
        </div>
      </div>
      <section className="mt-[33px] text-[12px] font-miniFont font-normal text-right mdx:text-start">
        <p>©WELBEX 2022. Все права защищены.</p>
        <a href="/#" className="underline">
          Политика конфиденциальности
        </a>
      </section>
    </footer>
  );
}
