import { Project } from '@/interfaces/project';
import { Component } from '@angular/core';
import { BoxProject } from './components/box-project/box-project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BoxProject],
  templateUrl: './projects.html',
  styles: ``
})
export class Projects {

  projects: Project[] = [
    {
      title: 'SkillPing',
      description: 'SkillPing is a unique platform where people connect to exchange knowledge You teach what you know and learn what you want — no money involved. A space to grow together, learn in community, and connect with others who share your passion for learning.',
      image: './images/projects/skillping.png',
      utils: ['Angular', 'Django', 'TailwindCSS', 'PostgreSQL', 'JWT']
    }
  ];

}
