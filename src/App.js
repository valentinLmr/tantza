import React from 'react';
import './App.css'

function App() {
  return ( <div>
    <section id='banner'>
      <div id="content-banner">
      <h1 id='banner-title-brand'>Tantza</h1>
      <p>58, rue Jean - Jacques Rousseau</p><p> 75001 - Paris</p>
      </div>
    </section>

    <section id='galerie'>
      <div class='container-photo'>
        <img class='photos' id='photo-left' src='/images/photo2.png' alt='photo1'></img>
        <img class='photos' id='photo-center'src='/images/photo3.png' alt='photo1'></img>
        <img class='photos' id='photo-right' src='/images/photo4.png' alt='photo1'></img>
      </div>

      <div class='container-photo'>
      <img class='photos' id='photo-left' src='/images/photo5.png' alt='photo1'></img>
      <img class='photos' id='photo-center'src='/images/photo6.png' alt='photo1'></img>
      <img class='photos' id='photo-right' src='/images/photo1.png' alt='photo1'></img>
      </div>
      
    </section>

    <section id='menu'>
      <div class='menu-listing'>
        <h2>Starters</h2>
        <ul class='starters-list'>
          <li class='flex line'>
            <p class='name'></p><p class='price'></p>
          </li>
        </ul>
        <h2>Main Courses</h2>
        <ul class='main-courses-list'>
          <li class='flex line'>
            <p class='name'></p><p class='price'></p>
          </li>
        </ul>
          <h2> Desert</h2>
        <ul class='desserts-list'>
          <li class='flex line'>
            <p class='name'></p><p class='price'></p>
          </li>
        </ul>
          <h2> Drinks</h2>
        <ul class='drinks-list'>
          <li class='flex line'>
            <p class='name'></p><p class='price'></p>
          </li>
        </ul>
    
      </div>

      
      
    </section>
</div>
  );
}

export default App;
