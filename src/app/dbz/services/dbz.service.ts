import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface'
//SECTION - para crear ids, se instala con npm i uuid y luego npm i --save-dev @types/uuid v4 es una funcion
import { v4 as uuid } from "uuid";

//!SECTION v4 es una funcion
//console.log(v4());
//genera un id unico
//console.log(uuid());  despues del alias
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
      id:uuid(),
      name:"krillin",
      power:500
    },
    {
      id:uuid(),
      name:"goku",
      power:9500
    },
    {
      id:uuid(),
      name:"vegeta",
      power:7000
    }
  ];

  onNewCharacter(character:Character):void{
    //!SECTION el evento del padre que esta escuchando, se puede llamar como sea
    this.characters.push(character)
  }

  onCharacterDeleted(id:string):void{
    this.characters=this.characters.filter(e=>e.id!==id);
  }
}
