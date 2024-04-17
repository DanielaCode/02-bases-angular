import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="decreaseBy(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  //SECTION - para agregar funcionalidad a los botones, con metodos
  increaseBy(value: number): void {
    this.counter += value;
  }
  decreaseBy(value: number): void {
    this.counter -= value;
  }
  resetCounter() {
    this.counter = 10;
  }
}
