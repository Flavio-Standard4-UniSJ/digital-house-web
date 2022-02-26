import mew from './assets/images/mew.svg';
import moltres from './assets/images/moltres.svg';
import articuno from './assets/images/articuno.svg';
import diance from './assets/images/diance.svg';
import pikachu from './assets/images/pikachu.svg';
import zapdos from './assets/images/zapdos.svg';
import xerneas from './assets/images/xerneas.svg';
import arrowlft from './assets/images/left-arrow.svg';
import arrowrght from './assets/images/right-arrow.svg';
import pokeball from './assets/images/pokeball.svg';
import Header from './Header';
function App() {
  return (
    <>
     <Header />
     <main class="main-legendaries">
        <h1>Legendaries</h1>
        <div class="legendarie-details">
                <img src={mew} alt="Mew Picture" />
                <div>
                    <h2></h2>
                    <p></p>
                    <div class="legendarie-stats">
                        <div>
                            <p>Health Points</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Attack</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Special Attack</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Experience</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Defense</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                        <div>
                            <p>Special Defense</p>
                            <p></p>
                            <div class="progress-bar">
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div class="legendaries-carousel">
            <img src={arrowlft} alt="Left Arrow" />
            <div class="carousel-legendarie-box first">
                <img src={mew} alt="Mew Picture" />
                <div>
                    <p>Mew</p>
                    <img src={pokeball} alt="Pokeball" />
                </div>
            </div>
            <div class="carousel-legendarie-box">
                <img src={moltres} alt="Moltres Picture" />
                <div>
                    <p>Moltres</p>
                    <img src={pokeball} alt="Pokeball" />
                </div>
            </div>
            <div class="carousel-legendarie-box">
                <img src={articuno} alt="Articuno Picture" />
                <div>
                    <p>Articuno</p>
                    <img src={pokeball} alt="Pokeball" />
                </div>
            </div>
            <div class="carousel-legendarie-box">
                <img src={zapdos} alt="Zapdos Picture" />
                <div>
                    <p>Zapdos</p>
                    <img src={pokeball} alt="Pokeball" />
                </div>
            </div>
            <div class="carousel-legendarie-box">
                <img src={diance} alt="Diance Picture" />
                <div>
                    <p>Diance</p>
                    <img src={pokeball} alt="Pokeball" />
                </div>
            </div>
            <div class="carousel-legendarie-box">
                <img src={xerneas} alt="Xerneas Picture" />
                <div>
                    <p>Xerneas</p>
                    <img src={pokeball} alt="Pokeball" />
                </div>
            </div>
            <img src={arrowrght} alt="Left Arrow" />
        </div>
    </main>
    </>
  );
}

export default App;
