import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyleEnum } from 'src/app/Components/enum/button-style.enum';

@Component({
  selector: 'pg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() name!: string;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() shadow: boolean = false;
  @Input() circle: boolean = false;
  @Input() holdable: boolean = false;
  @Input() holdTime: number = 500;
  @Input() style!: ButtonStyleEnum;

  @Output() focus= new EventEmitter();
  @Output() holdFinished= new EventEmitter<boolean>();

  readonly intervalAmount = 50;
  interval!: any;
  holdPercentage: string = 'width: 0%';


  constructor() { }

  startHold(){
    if (!this.holdable) return;

    let timePassed = 0;
    this.interval =  setInterval(() => {
      timePassed += this.intervalAmount;
      const percentage = Math.min(Math.round(timePassed / this.holdTime * 100),100);
      this.holdPercentage = `width: ${percentage}%`;

      if (timePassed >= this.holdTime) {
        clearInterval(this.interval);
        this.holdFinished.emit(true);
      }
    }, this.intervalAmount);
  }

  clearHold(){
    if (!this.holdable || !this.interval) return;

    clearInterval(this.interval);
    this.interval = null;
    this.holdPercentage = 'width: 0%';
  }
}
