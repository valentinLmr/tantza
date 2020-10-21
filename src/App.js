import React from 'react';
import './App.css'
import ScrollableAnchor from 'react-scrollable-anchor'



function App() {

  const scrollDown = () => {
    document.addEventListener('scroll', e => {
      if(window.scrollY > 450) {
        document.getElementById('navbar').style.top = "0"
      } else {
        document.getElementById('navbar').style.top = "-80px"
      }
    })
  }
  

  const displayDropBox = () => {

    document.getElementById('dropbox').style.left = "0"    
    document.getElementById('navbar').classList.add("hidden")  
  }

    const closeDropBox = () => {

      document.getElementById('dropbox').style.left = '-100rem'    
      document.getElementById('navbar').classList.remove("hidden")  
    }

  return ( 

  <div onScroll={scrollDown()}>
    <header id="navbar" className="flex space-between">
      <i className="fas fa-bars flex center" onClick={displayDropBox}></i>
      <h3 className='flex center'>Tzantza</h3>
    </header>
    <div id="dropbox">
      <i class="fas fa-times" onClick={closeDropBox}></i>
      <div id="dropbox-links">
      <a href="#menu-anchor" >Menu</a >
      <a href="#coktails-anchor">Cocktails</a >
      <a href="#history-anchor">History</a >
      <a href="#contact-anchor">Contact</a >
      </div>
    </div>
    <section id='banner'>
      <div id="content-banner">
      <h1 id='banner-title-brand'>Tzantza</h1>
      <p>58, rue Jean - Jacques Rousseau</p><p> 75001 - Paris</p>
      </div>
    </section>

    <section id='galerie'>
      <div className='container-photo'>
        <img className='photos' id='photo-left' src='/images/photo2.jpg' alt='photo1'></img>
        <img className='photos' id='photo-center'src='/images/photo3.jpg' alt='photo1'></img>
        <img className='photos' id='photo-right' src='/images/photo4.jpg' alt='photo1'></img>
      </div>

      <div className='container-photo'>
      <img className='photos' id='photo-left' src='/images/photo5.jpg' alt='photo1'></img>
      <img className='photos' id='photo-center'src='/images/photo6.jpg' alt='photo1'></img>
      <img className='photos' id='photo-right' src='/images/photo1.jpg' alt='photo1'></img>
      </div>

      <div className='container-photo'>
      <img className='photos' id='photo-left' src='/images/photo7.jpg' alt='photo1'></img>
      <img className='photos' id='photo-center'src='/images/photo8.jpg' alt='photo1'></img>
      <img className='photos' id='photo-right' src='/images/photo9.jpg' alt='photo1'></img>
      </div>

      <div className='container-photo'>
      <img className='photos' id='photo-left' src='/images/photo10.jpg' alt='photo1'></img>
      <img className='photos' id='photo-center'src='/images/photo11.jpg' alt='photo1'></img>
      <img className='photos' id='photo-right' src='/images/photo12.jpg' alt='photo1'></img>
      </div>
  
    </section>

    <section  id='menu'>
      <ScrollableAnchor id={'menu-anchor'}>
      <div href="#menu" id='Food'>
        <h1> MENU</h1>
        <h3>SARTERS</h3>
        <ul className='starters-list'>
          <li className='line'>
            <h4 className='name'>Ceviche de thon, leche de tigre au coc</h4><p className='price'>15€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Bao à l’encre de seiche, crabe mayonnaise</h4><p className='price'>16€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Artichaut fondant, garniture de saison</h4><p className='price'>14€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Huitres en tempura, béarnaise au yuzu et coriandre</h4><p className='price'>16€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Gyoza de foie gras et sauce ponzu </h4><p className='price'>14€</p>
          </li>
          
          
        </ul>
        <h3>MAIN COURSES</h3>
        <ul className='main-courses-list'>
          <li className='line'>
            <h4 className='name'>Tartare de bœuf, betterave, mayonnaise au wasabi, tajette croustillante</h4><p className='price'>13€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Ceviche de mangue</h4><p className='price'>12€</p>
          </li>
          <li className='line'>
            <h4 className='name'>CMaïs rôti frotté au fromage de brebis,  sésame,  quinoa soufflé et coriandr</h4><p className='price'>12€</p>
          </li>
          
        </ul>
          <h3> DESSERTS</h3>
        <ul className='desserts-list'>
          <li className='line'>
            <h4 className='name'>Crême brulée</h4><p className='price'>12€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Mousse au Chocolat</h4><p className='price'>12€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Glace 2 boules</h4><p className='price'>12€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Café gourmand</h4><p className='price'>12€</p>
          </li>
          <li className='line'>
            <h4 className='name'>Salade de fruits</h4><p className='price'>12€</p>
          </li>
        </ul>
      </div>
      </ScrollableAnchor>

        <ScrollableAnchor id={'coktails-anchor'}>
        <div href="#cocktails" id='Bar'>
            <h3> DRINKS</h3>
          <ul className='drinks-list'>
            <li className='line'>
              <div className='drink'>
                <h4 className='name'>SERGENT HARTMAN</h4>
                <p className='recette'> Vodka Combawa, Cordial de gingembre et cidre brut</p>
              </div>
              <p className='price'>14€</p>
            </li>
            <li className='line'>
              <div className='drink'>
                <h4 className='name'>WEST EGG </h4>
                <p className='recette'> Monkey 47 Sloe gin aux citrons noirs d’Iran, Verjus, 
Champagne, gouttes de Ferne</p>
              </div>
              <p className='price'>18€</p>
            </li>
            <li className='line'>
              <div className='drink'>
                <h4 className='name'>SHIBUYA</h4>
                <p className='recette'>Olorosso, Saké, Cynar cuit sous vide au pandan et à l’anis étoilé </p>
              </div>
              <p className='price'>17€</p>
            </li>
            <li className='line'>
              <div className='drink'>
                <h4 className='name'>MICKEY B MALLORY KNOX </h4>
                <p className='recette'>Tequila Reposado, Pomme compotées aux 5 épices, 
Pommeau maison, Citron vert, Blanc d’oeu</p>
              </div>
              <p className='price'>16€</p>
            </li>
            <li className='line'>
              <div className='drink'>
                <h4 className='name'>THE GECKO</h4>
                <p className='recette'> Campari, Kalamansi, Miel salé, Mezcal, Soda</p>
              </div>
              <p className='price'>17€</p>
            </li>
            <li className='line'>
              <div className='drink'>
                <h4 className='name'>JUSTE UN DOIGT</h4>
                <p className='recette'> Whisky, Sirop de poivre Blanc maison, Citron vert, Aquafaba</p>
              </div>
              <p className='price'>16€</p>
            </li>
          </ul>
        </div>   
        </ScrollableAnchor>   
    </section>
    <section href="#history" id='history' className='flex center'>
      <ScrollableAnchor id={'history-anchor'}>
      <div>
      <h1> HISTORY</h1>
      <div id='history-container' className="flex center">
        <p> sus quaecepedi officiet hil incit, conserem 
et repudip idendit endel inti con rerciet illabor 
ehentib usapel mo maiorrorror re, que porrovi 
tatureped min rest, officiam etur? 
Tas est eos eumendi apicaeprorro dolutem fuga. 
Tur, id ma velest adipsan duscienis 
aut quam deni occaere, tenis ea ipsunt, si arcia 
quos el molu
Qui cuptasit maio illuptia is reritas 
consed maxim quodi dellupt atibus 
quatemperum venis dolor ad expelit ecaturi 
orianis aut que est  </p>
      </div>
      </div>
      </ScrollableAnchor>
    </section>

    <ScrollableAnchor id={'contact-anchor'}>
    <div className="footer" >
        <h2><strong><u>CONTACT</u></strong></h2>
        <div className="contact">
            <p>Contactez nous au <strong>03.20.44.46.07</strong> ou par mail à <strong>Tzantza@gmail.com</strong></p>
            <div className="reseau">
                <p>Vous pouvez également nous retrouver sur les sites suivants !</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <a href="https://www.instagram.com/?hl=fr"><i class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
                </div>
            </div>
        </div>
    </div>
    </ScrollableAnchor>
</div>

  )
}


export default App;
