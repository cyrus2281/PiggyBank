import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { iconListMap, ICONS } from './icons/icons';
import { IconSizeEnum } from './icons/icon.enum';

@Component({
  selector: 'pg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon!: string;
  @Input() svg!: string;
  @Input() type: string = 'brand';
  @Input() styles!: { [klass: string]: any; } | null;
  @Input() size : IconSizeEnum = IconSizeEnum.medium;

  svgHTML!: SafeHtml;
  iconList = iconListMap;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    if (!!this.svg) {
      const icon = this.iconList[this.type][this.svg.toLowerCase()]
      this.svgHTML = this.sanitizer.bypassSecurityTrustHtml(icon);
    }
  }

}
