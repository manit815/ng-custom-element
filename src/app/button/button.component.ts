import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <p>
      button works!
    </p>
    <h3>{{ name }}</h3>
    <button (click)="handleClick()">Click</button>
  `,
  styles: [
    `
    h3 {
      background-color: orange;
    }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  @Input() name = 'Default'; 

  @Output() action = new EventEmitter<number>();
  private clickCount = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.clickCount++;
    console.log(this.clickCount);
    this.action.emit(this.clickCount);
  }

}
