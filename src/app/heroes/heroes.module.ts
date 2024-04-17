import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports:[
    //!SECTION si no lo importo no puedo usar las directivas en este scope
    CommonModule
  ]
})
export class HeroesModule{}
