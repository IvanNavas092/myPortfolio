import { Component, Host } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { AboutMe } from "./components/about-me/about-me";
import { AiChat } from './components/ai-chat/ai-chat';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-home',
  imports: [Hero, Projects, AboutMe, AiChat],
  templateUrl: './home.html',
})
export class Home {
  showButtonAi: boolean = false;

  constructor() {

  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showButtonAi = scrollPosition > 100; // Show the button when scrolled more than 100px
  }

}
