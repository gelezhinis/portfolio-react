import './home.css';
import Me from '../../img/as1.jpg';

import Nav from '../Nav/Nav';

const Home = () => {
  return (
    <>    
      <Nav />
      <div className="home">
        <div className="home-left">
          <div className="home-left-wrapper">
            <h2 className="home-intro">Sveiki, mano vardas</h2>
            <h1 className="home-name">Linas</h1>
            
            <div className="mobile-title">
              <h2>Internetinių Tinklapių Programuotojas</h2>
            </div>
            <p className="home-desc">
              Mane visą gyvenimą žavėjo programavimas ir dizainas, todėl šias dvi savo aistras nusprendžiau apjungti ir panaudoti tinklapių kūrime. Mano darbai pagrįsti paprastumu ir praktiškumu, bei moderniu dizainu tam, kad vartotojo patirtis būtų pati geriausia. Tinklapius kuriu naudodamas patikimas programavimo kalbas bei jų karkasus ir bibliotekas. Galiu redaguoti, patobulinti ar atnaujinti ir jau esamas svetaines.
            </p>
            <div className="slides-wrapper">
              <div className="slides">
                <div className="slide">
                  <h2 className="home-title-item">Tinklapių Kūrimas</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Grafinis Dizainas</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Valdiklių Programavimas</h2>
                </div>
                <div className="slide">
                  <h2 className="home-title-item">Tinklapių Kūrimas</h2>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="home-right">
          <img src={Me} alt="" className="home-image" />
        </div>
      </div>
    </>
  );
}

export default Home;