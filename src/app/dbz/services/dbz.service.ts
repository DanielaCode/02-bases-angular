import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

//SECTION - con el snniped a-seervice se genera
@Injectable(
  //!SECTION esta instruccion es para no tener que ponerlo en el modulo como provider
  //!SECTION gracias a esto el servicio es un singleton en toda la app osea se puede inyectar y es la misma instancia
  {providedIn: 'root'}
)
export class DbzService {
  constructor() { }

  public characters: Character[] = [
    {
      name:"krillin",
      power:500
    },
    {
      name:"goku",
      power:9500
    },
    {
      name:"vegeta",
      power:7000
    }
  ];

  onNewCharacter(character:Character):void{
    //!SECTION el evento del padre que esta escuchando, se puede llamar como sea
    this.characters.push(character)
  }

  onCharacterDeleted(name:string):void{
    this.characters=this.characters.filter(e=>e.name!==name);
  }
}
