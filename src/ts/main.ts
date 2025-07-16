import "../css/style.css";
import { CardComponent } from "../layout/card_ia/card";

// Obtén el contenedor principal
const app = document.getElementById("app");

if (app) {
  // Crea una card y agrégala al contenedor
  const cardsData = [
    {title:"card 1", content:"contenido dimanico"},
  ];


      
  cardsData.forEach((data)=>{
    const card = new CardComponent(data.title, data.content);
    card.render(app);
  })
 

}
