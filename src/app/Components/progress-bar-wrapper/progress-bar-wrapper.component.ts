import { Component, Input, OnInit } from '@angular/core';
import { ProgressBarMode } from '../progress-bar/progress-bar.component';

@Component({
  selector: 'pg-progress-bar-wrapper',
  templateUrl: './progress-bar-wrapper.component.html',
  styleUrls: ['./progress-bar-wrapper.component.scss']
})
export class ProgressBarWrapperComponent {
  @Input() mode: ProgressBarMode= 'breath';
  @Input() error: boolean = false;
  @Input() value!: number;
  @Input() bufferValue!: number;

}
