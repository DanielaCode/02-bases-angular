import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";
import { CommonModule } from "@angular/common";

//!SECTION este module abarca solo al scope de la carpeta counter
@NgModule({
  declarations:[
    CounterComponent,
  ],
  exports: [
    //!SECTION si lo quiero tener disponible en el exterior necesito exporta aca e importar alla
    CounterComponent
  ],
  imports:[
    //!SECTION si no lo importo no puedo usar las directivas en este scope
    CommonModule
  ]
})
export class CounterModule { }
