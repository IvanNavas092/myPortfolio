import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";

// gsap
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollSmoother);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myPortfolio');

  constructor() {
    if (typeof window !== 'undefined') { // solo en navegador
      ScrollSmoother.create({
        wrapper: '#wrapper', // contenedor principal
        content: '#content', // contenido que va a scrollear
        smooth: 0.3,         // cuánto suaviza el scroll
        effects: true        // si quieres animaciones ligadas al scroll
      });
    }
  }  
}
