import { useCallback, useEffect, useMemo, useState } from "react";

export default function Main() {
  const MyWidgetData = useMemo(
    () => [
      {
        title: "Виджеты",
        titleMobile: "Skype аудит",
        description: "30 готовых решений",
      },
      {
        title: "Dashboard",
        titleMobile: "30 виджетов",
        description: "с показателями вашего бизнеса",
      },
      {
        title: "Skype АУДИТ",
        titleMobile: "Dashboard",
        description: "отдела продаж и CRM системы",
      },
      {
        title: "35 дней",
        titleMobile: "Месяц аmoCRM",
        description: "использования CRM",
      },
    ],
    []
  );

  const widgetStyles =
    "uppercase font-medium mdx:text-left mdx:pl-[15px] mdx:text-[13px] mdx:w-max relative after:opacity-0 mdx:after:opacity-100 after:absolute after:content-[''] after:left-[0] after:top-[10px] after:red after:bg-gradient-to-r from-[#FCB045] to-[#FD1D1D] after:w-[10px] after:h-[1px]";
  const descriptionStyles =
    "mdx:hidden font-normal leading-[19.5px] font-miniFont text-right";

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [widgetData, setWidgetData] = useState(MyWidgetData);

  const updateWidgetData = useCallback(() => {
    const isMobile = windowWidth < 667;
    if (isMobile) {
      setWidgetData(
        MyWidgetData.map((item) => ({
          ...item,
          title: item.titleMobile,
        }))
      );
    } else {
      setWidgetData(
        MyWidgetData.map((item) => ({
          ...item,
        }))
      );
    }
  }, [windowWidth, MyWidgetData]);

  useEffect(() => {
    updateWidgetData();
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateWidgetData();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateWidgetData]);

  return (
    <section className="flex justify-between mdx:flex-wrap w-full mt-[90px]">
      <section className="w-[362px] text-left">
        <div>
          <p className="text-[48px] leading-[58.09px]">Зарабатывайте больше</p>
          <p className="text-[68px] font-black leading-[58.09px]  text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FF3F78]">
            с WELBEX
          </p>
          <p className="text-[18px] w-[275px] mt-[30px] mdx:mb-[45px] leading-[21.94px] font-miniFont">
            Развиваем и контролируем продажи за вас
          </p>
        </div>
      </section>
      <section className="w-[300px] text-right">
        <p className="mb-[40px] mdx:text-left">
          Вместе с&nbsp;
          <span className="uppercase font-bold text-[18px] leading-[21.78px] text-transparent bg-clip-text bg-gradient-to-r from-[#FCB045] to-[#FD1D1D]">
            бесплатной консультацией
          </span>
          &nbsp;мы дарим:
        </p>
        <div className="grid grid-cols-2 gap-5 w-[291px] mb-[60px] mdx:gap-0">
          {widgetData.map((item, index) => (
            <div key={index}>
              <p className={widgetStyles}>{item.title}</p>
              <p className={descriptionStyles}>{item.description}</p>
            </div>
          ))}
        </div>
        <button className="mdx:hidden bg-[#4077F3] w-[262px] h-[61px]">
          Получить консультацию
        </button>
      </section>
    </section>
  );
}
