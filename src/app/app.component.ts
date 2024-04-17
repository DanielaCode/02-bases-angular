import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

//SECTION - este componente y la info que aca esta definida se puede usar solo en './app.component.html',
export class AppComponent {
  //SECTION - estas propiedades estan bindeadas a el html si cambian aca cambian alla

  //NOTE - sintaxis corta de angular
  title = '02-bases-angular my primer app de angular';

  //NOTE - pero es lo mismo que
  public someText:string="segundo texto de ejemplo"
  public counter:number=10;

  //SECTION - para agregar funcionalidad a los botones, con metodos
  increaseBy(value:number):void{
    this.counter+=value;
  }
  decreaseBy(value:number):void{
    this.counter-=value;
  }
  resetCounter(){
    this.counter=10;
  }
}
