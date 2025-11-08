import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-job-item',
  imports: [TranslatePipe],
  templateUrl: './job-item.html',
})
export class JobItem {
  @Input() title?: string;
  @Input() date?: string;
  
  constructor() {}
}
