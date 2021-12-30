import { Component, Input, OnInit } from '@angular/core';
import { TooltipPosition } from '@angular/material/tooltip';
import { LabelIconTypeEnum } from '../../enum/label-icon-type.enum';

@Component({
  selector: 'pg-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() label!: string;

  @Input() tooltip!: string;
  @Input() tooltipType!: LabelIconTypeEnum;
  @Input() tooltipPosition:TooltipPosition = 'above'

  @Input() toggleable: boolean = true;
  @Input() expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.expanded = !this.expanded;
  }

}
