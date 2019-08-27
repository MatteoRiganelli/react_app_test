import React from "react";
import "../../css/home/home.css"
import FirstSlideImage from "../../images/book1.jpg"
import SecondSlideImage from "../../images/book2.jpg"
import ThirdSlideImage from "../../images/book3.jpg"
import BookPassionate from "../../images/book-passionate.jpg";

export default class Home extends React.Component{ 
   constructor(props){ 
      super(props); 
   }
   render(){ 
      return( 
        <div className = "home-content">
        <div id="home-top" className="carousel slide" data-ride="carousel">
           <div className="carousel-inner">
              <div className="carousel-item active">
                 <img className="d-block w-100" src={FirstSlideImage} alt="First slide"/>
              </div>
              <div className="carousel-item">
                 <img className="d-block w-100" src={SecondSlideImage} alt="Second slide"/>
              </div>
              <div className="carousel-item">
                 <img className="d-block w-100" src={ThirdSlideImage} alt="Third slide"/>
              </div>
           </div>
        </div>
        <div className = "container">
           <div className = "row" id="what">
              <div className = "col-12 text-center">
                 <h1>Cosa Facciamo</h1>
              </div>
           </div>
           <div className = "row">
              <div className = "col-4 text-center">
                 <h3>Stampa</h3>
              </div>
              <div className = "col-4 text-center">
                 <h3>Rilegatura</h3>
              </div>
              <div className = "col-4 text-center">
                 <h3>Pubblicazione</h3>
              </div>
           </div>
           <div className = "row">
              <div className = "col-4 text-justify book-bordered">
                 <p>
                    Tramite un meccanismo iper-avanzato la stampa su carta non contiene errori e ti
                    assicuriamo una qualità ottima anche su lucido.
                 </p>
              </div>
              <div className = "col-4 text-justify book-bordered">
                 <p>
                    Ogni singolo libro viene rilegato a mano con cuciture in vista. Fatto per durare negli anni,
                    fatto per durare per sempre.
                 </p>
              </div>
              <div className = "col-4 text-justify book-bordered">
                 <p>
                    Sei un autore? Pubblica il tuo libro con noi! Ci occupiamo di pubblicità e costi di distribuzione,
                    contattaci per saperne di più.
                 </p>
              </div>
           </div>
           <div className = "row division">
              <div className="col-12 text-center">
                 <div className = "important white">
                    <p>La passione è l'arte di saper fare qualcosa con amore.</p>
                    <p>E con amore viene sempre tutto bene.</p>
                 </div>
              </div>
           </div>
           <div className = "row" id="who">
              <div className = "col-12 text-center">
                 <h1>Chi Siamo</h1>
              </div>
           </div>
           <div className = "row">
              <div className = "col-8">
                 <img className = "book-passionate" src={BookPassionate} alt="team"/>
              </div>
              <div className = "col-4">
                 <div className = "row">
                    <div className = "col-12 text-center">
                       <h3>Appassionati di Libri</h3>
                    </div>
                 </div>
                 <div className = "row">
                    <div className = "col-12 text-justify">
                       <p>
                          Parlare di libri, lavorarli, leggere, sentire il profumo delle pagine
                          ci rende persone appassionate e per questo motivo diamo sempre il massimo
                          per pubblicare il tuo libro senza errori.
                       </p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
      ); 
   } 
}