import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-new-section',
  imports: [],
  templateUrl: './new-section.html',
  styles: ``
})
export class NewSection implements AfterViewInit, OnDestroy {
  @Input() nameSection!: string;
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

}
