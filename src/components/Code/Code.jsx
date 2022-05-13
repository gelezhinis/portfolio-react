import {useContext} from 'react';
import {ThemeContext} from '../../context';

import Nav from '../Nav/Nav';

import './code.css';
import Award1 from '../../img/award1.jpg';
import Award2 from '../../img/award2.jpg';
import Award3 from '../../img/award3.jpg';
import Award4 from '../../img/award4.jpg';
import CodeImg from '../../img/code.jpg';
import VisualImg from '../../img/visual.jpg';

const Code = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
    <Nav />
    <div className="code">
      <div className="code-left">
        <div className="code-card bg"  style={{backgroundColor: darkMode ? "rgb(13, 96, 99)" : "rgb(55, 89, 90)"}}></div>
        <div className="code-card">
          <img src={CodeImg} alt="" className="code-image" />
        </div>
      </div>
      <div className="code-right">
        <h1 className="code-title">Programavimo Kalba</h1>
        <p className="code-sub">
          Pagrindinė mano projektuose naudojama programavimo kalba - JavaScript.
        </p>
        <p className="code-desc">
          Javascript yra standartinė interneto programavimo kalba, skirta tinklapių ir žiniatinklio programų sąveikai ir automatizavimui. Ji skirta "kliento pusės" (client-side, front-end) programavimui.
          "Serverio pusės" (server-side, back-end) programavimui naudoju Node.js, kuri užtikrina tinklapio duomenų saugumą bei sklandų komunikavimą su duomenų baze.
        </p>
        <div className="code-award">
          <img src={Award1} alt="" className="code-award-img" />
          <img src={Award2} alt="" className="code-award-img" />
        </div>
      </div>
    </div>
    <div className="visual">
      <div className="visual-left">
        <h1 className="visual-title">Vizualizacija</h1>
        <p className="visual-sub">
          Vizualizacija ir tinklapio struktūra kuriama su HTML ir CSS.
        </p>
        <p className="visual-desc">
          HTML (hyper text markup language) yra kalba, kuri aprašo tinklapio struktūrą naršyklei. Už patį atvaizdavimą, jo stilių, išdėstymą, spalvas ir panašius dalykus atsakinga CSS (cascade style sheet). Tačiau norint sukurti dar geresnę varotojo patirtį, neretai naudoju ir papildomas JavaScript bibliotekas, tokias kaip Vue ar React, kurios tinklapį padaro dar greitesnį, bei puikiai atvaizduojamą mobiliajame įrenginyje.
        </p>
        <div className="visual-award">
          <img src={Award3} alt="" className="visual-award-img" />
          <img src={Award4} alt="" className="visual-award-img" />
        </div>
      </div>
      <div className="visual-right">
        <div className="visual-card bg" style={{backgroundColor: darkMode ? "rgb(13, 96, 99)" : "rgb(55, 89, 90)"}}></div>
        <div className="visual-card">
          <img src={VisualImg} alt="" className="visual-image" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Code;