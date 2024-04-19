import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input()
  public charactersList:Character[] = [
    {
      id:"",
      name:"krillin",
      power:10
    }
  ]

  @Output() onCharacterDeleted = new EventEmitter<string>();

  deleteCharacter(id:string):void{
    this.onCharacterDeleted.emit(id)
  }
}
