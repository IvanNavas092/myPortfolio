import { Project } from '@/interfaces/project';
import { Component } from '@angular/core';
import { BoxProject } from './components/box-project/box-project';
import { NewSection } from '../new-section/new-section';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  imports: [BoxProject, NewSection, TranslatePipe],
  templateUrl: './projects.html',
  styles: ``,
})
export class Projects {
  projects: Project[] = [
    {
      link: 'https://skillping.netlify.app/',
      title: 'SkillPing',
      description: 'desc-skillping',
      image: './projects/skillPing.jpg',
      utils: ['Angular', 'Django', 'Tailwind', 'PostgreSQL'],
    },
    {
      link: 'https://fastsnippets.es',
      title: 'FastSnippets',
      description: 'desc-fastsnippets',
      image: './projects/fastSnippets.jpg',
      utils: ['Angular', 'Tailwind', 'Firebase'],
    },
    {
      link: 'https://pomodorocount.netlify.app/',
      title: 'Costa Digital',
      description: 'desc-costadigital',
      image: './projects/costaDigital.jpg',
      utils: ['React', 'Tailwind'],
    },
    {
      link: 'https://pomodorocount.netlify.app/',
      title: 'Pomodoro Count',
      description: 'desc-pomodoro',
      image: './projects/pomodoroCount.jpg',
      utils: ['Angular', 'Tailwind'],
    },
    {
      link: 'https://pomodorocount.netlify.app/',
      title: 'ELYSE',
      description: 'desc-elyse',
      image: './projects/elyse.png',
      utils: ['React', 'Tailwind'],
    },
    {
      link: '',
      title: 'TimeCapsule',
      description: 'desc-timecapsule',
      image: './projects/timeCapsule.jpg',
      utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL'],
    },
  ];
}
