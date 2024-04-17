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
  title = 'Counter';

  //NOTE - pero es lo mismo que
  public someText:string="segundo texto de ejemplo"

}
