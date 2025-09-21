import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  animateCard(element: HTMLElement, duration: number = 0.1) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from(element, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  animateLineOnScroll(element: HTMLElement) {
    if (isPlatformBrowser(this.platformId)) {
      gsap.to(element, {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    }
  }

  killAllScrollTriggers() {
    if (isPlatformBrowser(this.platformId)) {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    }
  }
}
