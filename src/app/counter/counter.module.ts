import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

//!SECTION este module abarca solo al scope de la carpeta counter
@NgModule({
  declarations:[
    CounterComponent,
  ],
  exports: [
    //!SECTION si lo quiero tener disponible en el exterior necesito exporta aca e importar alla
    CounterComponent
  ]
})
export class CounterModule { }
