import { Component, Input } from '@angular/core';
import { Project } from '@/interfaces/project';

@Component({
  selector: 'app-box-project',
  imports: [],
  templateUrl: './box-project.html',
})
export class BoxProject {
  @Input() project!: Project;
}
