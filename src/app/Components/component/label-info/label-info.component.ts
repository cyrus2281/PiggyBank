import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { LabelIconTypeEnum } from '../../enum/label-icon-type.enum';

@Component({
  selector: 'pg-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss']
})
export class LabelInfoComponent {
  @Input() type!: LabelIconTypeEnum;
  @Input() tooltip!: string;
  @Input() position:TooltipPosition = 'above'
  labelIconType = LabelIconTypeEnum;

}
