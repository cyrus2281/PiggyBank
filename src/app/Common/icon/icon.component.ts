import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { ICONS } from './icons';

@Component({
  selector: 'pg-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() icon: string = 'home';
  @Input() svg!: string;

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    if (!!this.svg) {
      this.iconRegistry.addSvgIconLiteral(this.svg, this.sanitizer.bypassSecurityTrustHtml(ICONS[this.svg]));
    }
  }

}
