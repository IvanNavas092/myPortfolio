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
      link: 'https://marketingcostadigital.com/',
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
      link: 'projects/esencia',
      title: 'ESENCIA',
      description: 'desc-esencia',
      image: './projects/esencia.jpg',
      utils: ['React', 'Tailwind'],
    },
    {
      link: 'projects/timeCapsule',
      title: 'TimeCapsule',
      description: 'desc-timecapsule',
      image: './projects/timeCapsule.jpg',
      utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL'],
    },
  ];
}

// TODO:
// 1. ADD PROJECTS
// 2. METER UN 404 POR SI EL LINK NO EXISTE
// 3. MODIFICAR FECHAS 2020-2022 Y 2022-2024 

