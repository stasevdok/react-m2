import { useEffect } from 'react';
import styles from '@/pages/StyleGuide/StyleGuide.module.scss';

const StyleGuide = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(`.${styles.tab}`);
    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        const targetId = event.target.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    return () => {
      tabs.forEach((tab) => {
        tab.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroBlock}></div>
      <div className={styles.container}>
        <p className={styles.title1}>Разделы</p>
        <div className={styles.tabsContainer}>
          <div className={styles.tab} data-target="brand">Бренд</div>
          <div className={styles.tab} data-target="logo">Логотип</div>
          <div className={styles.tab} data-target="colors">Цвета</div>
          <div className={styles.tab} data-target="fonts">Типографика</div>
          <div className={styles.tab} data-target="graphics">Графика</div>
          <div className={styles.tab} data-target="mockups">Носители</div>
        </div>
      </div>
      <div id="brand" className={styles.container}>
        <p className={styles.title1}>Бренд</p>
        <div className={styles.group}>
          <p className={styles.title2}>Кто мы?</p>
          <p className={styles.text}>Медиа-сервис, который собирает и структурирует информацию об уличных арт-объектах, помогая любителям стрит-арта открывать новые произведения, дополнять знания, организовывать экскурсии, а художникам — рассказывать о себе и своем творчестве.</p>
        </div>
        <div className={styles.group}>
          <p className={styles.title2}>Миссия</p>
          <p className={styles.text}>Раскрывать город через уличное искусство, рассказывая людям об арт-объектах вокруг них.</p>
        </div>
        <div className={styles.group}>
          <p className={styles.title2}>Наш характер</p>
          <p className={styles.text}>Архетип — искатель. В реальной жизни типичный стрит-арт хантер. Остроумный, дерзкий, доброжелательный, экспрессивный, энергичный, непредсказуемый, устремленный, вдохновляющий, открытый, бунтарский.</p>
        </div>
        <div className={styles.group}>
          <p className={styles.title2}>Нейминг</p>
          <p className={styles.text}>Улица — как все, что объединяет уличное искусство.</p>
        </div>
      </div>
      <div id="logo" className={styles.container}>
        <p className={styles.title1}>Логотип</p>
        <div className={styles.group}>
          <p className={styles.title2}>Идея</p>
          <p className={styles.text}>Арт-объекты это неотъемлемая часть городского пространства, схематичное изображение которого мы можем увидеть на картах в виде очертаний районов и кварталов.</p>
          <img src={require('@/assets/StyleGuide/logo1-min.jpg')} className={styles.slideimg}></img>
        </div>
        <div className={styles.group}>
          <p className={styles.title2}>Вариации</p>
          <p className={styles.text}>Логотип может использоваться как в полном варианте, так и в сокращенном, однако в таком случае требуется использовать подложку.</p>
          <img src={require('@/assets/StyleGuide/logo2-min.jpg')} className={styles.slideimg}></img>
        </div>
        <div className={styles.group}>
          <p className={styles.title2}>Что нельзя делать?</p>
          <p className={styles.text}>Логотип нельзя непропорционально искажать, изменять поворот, использовать цвета не из черно-белого спектра.</p>
          <img src={require('@/assets/StyleGuide/logo3-min.jpg')} className={styles.slideimg}></img>
        </div>
      </div>
      <div id="colors" className={styles.container}>
        <p className={styles.title1}>Цвета</p>
        <div className={styles.group}>
          <p className={styles.title2}>Черно-белый спектр</p>
          <p className={styles.text}>В айдентике используется монохромная палитра, яркими акцентами являются сами арт-объекты.</p>
          <img src={require('@/assets/StyleGuide/color-min.jpg')} className={styles.slideimg}></img>
        </div>
      </div>
      <div id="fonts" className={styles.container}>
        <p className={styles.title1}>Типографика</p>
        <div className={styles.group}>
          <p className={styles.title2}>Object sans</p>
          <p className={styles.text}>Regular для наборного текста и Heavy для заголовков</p>
          <img src={require('@/assets/StyleGuide/font-min.jpg')} className={styles.slideimg}></img>
        </div>
      </div>
      <div id="graphics" className={styles.container}>
        <p className={styles.title1}>Графика</p>
        <div className={styles.group}>
          <p className={styles.title2}>Замкнутые фигуры</p>
          <p className={styles.text}>Фигуры, состоящие из случайного количества граней. На их вершинах располагаются квадраты с белой заливкой. В целом этот образ означает выделенную область на карте, которая может изменяться в зависимости от обстоятельств.</p>
          <img src={require('@/assets/StyleGuide/pics1-min.jpg')} className={styles.slideimg}></img>
        </div>
        <div className={styles.group}>
          <p className={styles.title2}>Геометрические паттерны</p>
          <p className={styles.text}>Паттерны, отсылающие к поверхностям, на которых зачастую располагаются различные арт–объекты, например, граффити.</p>
          <img src={require('@/assets/StyleGuide/pics2-min.jpg')} className={styles.slideimg}></img>
        </div>
      </div>
      <div id="mockups" className={styles.container}>
        <p className={styles.title1}>Носители</p>
        <img src={require('@/assets/StyleGuide/mockups01-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups02-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups03-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups04-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups05-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups06-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups07-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups08-min.jpg')} className={styles.slideimg}></img>
        <img src={require('@/assets/StyleGuide/mockups09-min.jpg')} className={styles.slideimg}></img>
      </div>
    </div>
  );
};

export default StyleGuide;
