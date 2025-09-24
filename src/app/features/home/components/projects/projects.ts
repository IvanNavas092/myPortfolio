import { Project } from '@/interfaces/project';
import { Component } from '@angular/core';
import { BoxProject } from './components/box-project/box-project';
import { NewSection } from '../new-section/new-section';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  imports: [BoxProject, NewSection, TranslatePipe],
  templateUrl: './projects.html',
  styles: ``
})
export class Projects {

  projects: Project[] = [
    {
      title: 'SkillPing',
      description: 'desc-skillping',
      image: './projects/skillPing.jpg',
      utils: ['Angular', 'Django', 'Tailwind', 'PostgreSQL']
    },
    {
      title: 'FastSnippets',
      description: 'desc-fastsnippets',
      image: './projects/fastSnippets.jpg',
      utils: ['Angular', 'Tailwind', 'Firebase']
    },
    {
      title: 'Pomodoro Count',
      description: 'desc-pomodoro',
      image: './projects/pomodoroCount.jpg',
      utils: ['Angular', 'Tailwind']
    },
    {
      title: 'TimeCapsule',
      description: 'desc-timecapsule',
      image: './projects/timeCapsule.jpg',
      utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL']
    }
  ];
}
