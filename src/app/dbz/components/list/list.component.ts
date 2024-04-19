import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input()
  public charactersList:Character[] = [
    {
      name:"krillin",
      power:10
    }
  ]

  @Output() onCharacterDeleted = new EventEmitter<string>();

  deleteCharacter(name:string):void{
    this.onCharacterDeleted.emit(name)
  }
}
