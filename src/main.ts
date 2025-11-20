import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.1,
  smooth: true,
});

function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

bootstrapApplication(AppComponent);

