import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-job-item',
  imports: [TranslatePipe],
  templateUrl: './job-item.html',
})
export class JobItem {

  listOfExperience: any[] = [
    {
      title:'job-title-better',
      date:'job-date-better',
    },
    {
      title:'job-title-man',
      date: 'job-date-man',
    }
  ]

}
