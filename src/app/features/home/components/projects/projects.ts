import { Project } from '@/interfaces/project';
import { Component } from '@angular/core';
import { BoxProject } from './components/box-project/box-project';
import { NewSection } from '../new-section/new-section';
import { TranslatePipe } from '@ngx-translate/core';
import { projectList } from '@/utils/projects';
@Component({
  selector: 'app-projects',
  imports: [BoxProject, NewSection, TranslatePipe],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {
  projects = projectList;
}


