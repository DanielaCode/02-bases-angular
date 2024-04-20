import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {
  constructor(private dbzService:DbzService ){}

  get characters():Character[]{
    //!SECTION the spread is because here I want to return a copy of the object so it can´t be edit ditectly
    //!SECTION usually it is not necesary because data comes from resr apis and dbses but here Is an object and it pass the reference
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onCharacterDeleted(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
  }

}
