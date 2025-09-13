import { Project } from '@/interfaces/project';
import { Component } from '@angular/core';
import { BoxProject } from './components/box-project/box-project';
import { platform } from 'node:os';

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
      description: 'SkillPing is a unique platform with chat included, where people connect to exchange knowledge You teach what you know and learn what you want — no money involved. A space to grow together, learn in community, and connect with others who share your passion for learning.',
      image: './projects/skillPing.png',
      utils: ['Angular', 'Django', 'Tailwind', 'PostgreSQL', 'JWT']
    },
    {
      title: 'FastSnippets',
      description: 'FastSnippets is a web platform to quickly and easily search, filter, and save code snippets.It supports frameworks like Angular, React, Vue, and Svelte, displaying code fragments with syntax highlighting and the option to save them as favorites.',
      image: './projects/fastSnippets.png',
      utils: ['Angular', 'Firebase', 'TailwindCSS']
    },
    {
      title: 'PomodoroCount',
      description: 'PomodoroCount is a website that implements the Pomodoro technique to help you stay focused while studying or working — with integrated music from your own Spotify account!',
      image: './projects/pomodoroCount.png',
      utils: ['Angular', 'Firebase', 'TailwindCSS']
    },
    {
      title: 'TimeCapsule',
      description: '🚀 Time Capsule — Your story, sealed in time. It’s a web platform where users can create digital time capsules, schedule them to open in the future, and share them with others… or keep them secret until the exact day.',
      image: './projects/timeCapsule.png',
      utils: ['React', 'Firebase', 'TailwindCSS']
    }
  ];

}
