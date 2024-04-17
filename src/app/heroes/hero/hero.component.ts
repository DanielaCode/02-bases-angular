import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string="ironman";
  public age:number=45;

  //NOTE - los getters permiten ser accedidos como propiedades osea sin ()
  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  //NOTE - Juntar 2 propiedades
  gerHeroDescription():string{
    return `name: ${this.name} , age: ${this.age}`;
  }

  changeName():void{
    this.name="spiderman"
  }

  changeAge():void{
    this.age=20;
  }

  resetForm():void{
     this.name="ironman";
     this.age=45;
  }
}
//NOTE - en angular tiene two way data binding lo que quiere decir que lo que esta del lado
//de la clase actualiza lo que esta en el html y lo que esta en el html puede actualizar lo que esta en la clase
//sinembargo se recomienda mantenerlo en one way data binding donde la clase es la que manda
//LAS CLASES EXPLONEN LA INFO A EL HTML

//!SECTION recordar que las manipulaciones directas al DOM no estan detectadas por el
//ciclo de deteccion de cambios de angular, por ende no cambiaria la interfaz asi de facil
//y empezaria a generar problemas
