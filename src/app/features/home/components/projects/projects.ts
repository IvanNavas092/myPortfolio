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
      image: './projects/skillPing.png',
      utils: ['Angular', 'Django', 'Tailwind', 'PostgreSQL', 'JWT']
    },
    {
      title: 'FastSnippets',
      description: 'desc-fastsnippets',
      image: './projects/fastSnippets.png',
      utils: ['Angular', 'Tailwind', 'Firebase']
    },
    {
      title: 'Pomodoro Count',
      description: 'desc-pomodoro',
      image: './projects/pomodoroCount.png',
      utils: ['Angular', 'Tailwind']
    },
    {
      title: 'TimeCapsule',
      description: 'desc-timecapsule',
      image: './projects/timeCapsule.png',
      utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL']
    }
  ];
}
