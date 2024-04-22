import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  //!SECTION esto permite emitir un evento a el padre
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character:Character={
    id: uuid(),
    name: '',
    power: 0
  }

  emitCharacter():void{

    //!SECTION cuando se hace submit se usa el emiter, para sacar el nuevo character ingresado en el formulario
    //SECTION - para que se envie un objeto nuevo por que si no se envia la referencia de
    //this.character y cuando haga reset se va a borrar de la lista
    this.onNewCharacter.emit({...this.character});

    //NOTE - si se hace submit se borra la info en el input y la propiedad es un reset
    this.character.name="";
    this.character.power=0;

  }
}
