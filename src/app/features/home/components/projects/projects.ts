import { Project } from '@/interfaces/project';
import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { BoxProject } from './components/box-project/box-project';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BoxProject],
  templateUrl: './projects.html',
  styles: ``
})
export class Projects implements AfterViewInit, OnDestroy {
  @ViewChild('lineP') lineP!: ElementRef<HTMLDivElement>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to(this.lineP.nativeElement, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3
        }
      });
    }
  }
  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }


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
      utils: ['Angular', 'Tailwind', 'Firebase']
    },
    {
      title: 'PomodoroCount',
      description: 'PomodoroCount is a website that implements the Pomodoro technique to help you stay focused while studying or working — with integrated music from your own Spotify account!',
      image: './projects/pomodoroCount.png',
      utils: ['Angular', 'Tailwind']
    },
    {
      title: 'TimeCapsule',
      description: '🚀 Time Capsule — Your story, sealed in time. It’s a web platform where users can create digital time capsules, schedule them to open in the future, and share them with others… or keep them secret until the exact day.',
      image: './projects/timeCapsule.png',
      utils: ['React', 'Tailwind', 'Java Spring', 'PostgreSQL']
    }
  ];



}
