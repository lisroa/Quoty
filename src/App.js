import './App.css';
import { useState } from "react";
import Quote from './quotes.js';
import './styles/QuoteStyle.css';
import {AiOutlineReload} from "react-icons/ai";

const quotes = [
{
  content:"Ser, o no ser: esa es la cuestión", 
  author:"Shakespeare",
  id: '1'
},
{
  content: "No está en las estrellas sostener nuestro destino, sino en nosotros mismos",
  author: "Shakespeare",
  id:'2'
},
{
  content: "Sin embargo, hay guerra en mi alma. La gente en mí está muriendo sin cesar",
  author: "Shakespeare",
  id:'3'
},
{
  content: "La ciencia corresponde a la democracia",
  author: "Nietzsche",
  id:'4'
 
},
{
  content:  "Hay espíritus que enturbian sus aguas para hacerlas parecer profundas",
  author: "Nietzsche",
  id:'5'
  
},
{   
   content: "Lo que no te mata, te hiere de gravedad, y te deja tan apaleado que luego aceptas cualquier maltrato y te dices a tí mismo que eso te fortalece",
   author: "Nietzsche",
   id:'6'
},
{
  content: "La verdad es rara vez pura y nunca simple",
  author: "Oscar Wilde",
  id:'7'
  
},
{
  content:"Adoro los placeres sencillos, son el último refugio de las almas complicadas",
  author: "Oscar Wilde",
  id:'8'
  
},
{
  content: "¿Cómo podrías ser feliz estando con alguien que insiste en tratarte como un ser humano normal?", 
  author: "Oscar Wilde",
  id:'9'
  
},
{
  content: "La sabiduría nos llega cuando ya no nos sirve de nada.", 
  author: "Gabriel García Márquez ",
  id:'10'
  
},
{
  content: "La vida no es la que uno vivió, sino la que uno recuerda y cómo la recuerda para contarla.”", 
  author: "Gabriel García Márquez ",
  id:'11'
  
},
{
  content: "No hay medicina que cure lo que no cura la felicidad", 
  author: "Gabriel García Márquez ",
  id:'12'
  
}
]

const randomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomQuote = (quotes) => {
  const randomIndex = randomNumber(0,quotes.length -1);

  return quotes[randomIndex];
}


function App() {
  const [quote, setQuotes] = useState(randomQuote(quotes));
  const [showQuotes, setShowQuotes] = useState(false);
  const authorOnScreen = quote.author;
  
  const showQuotesOnScreen = () => {
    setShowQuotes(!showQuotes);
  }
  
  const resetQuote = () => {
    setQuotes(randomQuote(quotes));
    setShowQuotes(false);
  }
  
  return (
    <div className="App">
      <AiOutlineReload className='logo' onClick={resetQuote}/>
      <div className='container'> 
      <p className='quotesContent'>
        {quote.content}
      </p> </div>

      <div className={showQuotes ? 'showList' : 'hideList'}> 
        {quotes.map((quote) => {  if (quote.author === authorOnScreen) { return (
          <Quote key={quote.id} content={quote.content} />
        )}})}
       </div>

      <button className='buttonAuthor' onClick={showQuotesOnScreen}> 
      {authorOnScreen}
      </button>
    </div>
  );
}

export default App;
