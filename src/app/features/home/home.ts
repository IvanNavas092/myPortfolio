import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { AboutMe } from "./components/about-me/about-me";

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, AboutMe],
  templateUrl: './home.html',
})
export class Home {

}
