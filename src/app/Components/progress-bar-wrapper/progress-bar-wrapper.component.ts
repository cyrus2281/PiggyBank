import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pg-progress-bar-wrapper',
  templateUrl: './progress-bar-wrapper.component.html',
  styleUrls: ['./progress-bar-wrapper.component.scss']
})
export class ProgressBarWrapperComponent {
  @Input() mode: 'determinate' | 'indeterminate' | 'buffer' | 'query' = 'indeterminate';
  @Input() error: boolean = false;
  @Input() value!: number;
  @Input() bufferValue!: number;

}
