import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierda = "../assets/img/dice1.png";
  dadoDerecha = "../assets/img/dice4.png";
  /* indicamos que se inicie el numero1 con el 1 y el numero2 con el 2 para que no se muestre el has ganado por defecto */
  numero1= 1;
  numero2= 2;


  /* metodo para random en boton de iniciar tirada entre numeros 1 y 6, ponemos *5 + 1 para evitar que salga el 0*/
  /* void es porque no va a devolver ni recibir nada */
  tirarDados(): void {
    this.numero1 = Math.round(Math.random() * 5) + 1;
    this.numero2 = Math.round(Math.random() * 5) + 1;
    /* le decimos cada dado que corresponde a la ruta relativa sin definir una imagen fija, más el random del numero 1 y 2 + .png */
    this.dadoIzquierda = '../assets/img/dice' + this.numero1 + '.png'
    this.dadoDerecha = '../assets/img/dice' + this.numero2 + '.png'
  }
}
