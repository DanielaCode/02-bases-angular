import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    AddCharacterComponent,
    ListComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    //!SECTION para poder usar ngModule
    FormsModule
  ]
})
export class DbzModule { }
