import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from 'src/app/Components/progress-bar/progress-bar.component';

@Component({
  selector: 'pg-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mode: ProgressBarMode[] = ['determinate', 'indeterminate', 'buffer', 'query', 'breath'];
  num = 0

  constructor() { }

  ngOnInit(): void {}

  change() {
    if (this.num < 5) {
      this.num++;
    } else {
      this.num = 0
    }
  }
}
