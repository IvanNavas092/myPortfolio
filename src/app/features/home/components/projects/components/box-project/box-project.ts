import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Project } from '@/interfaces/project';
import { CommonModule } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IconSkill } from "@/shared/icon-skill/icon-skill";

import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-box-project',
  imports: [CommonModule, IconSkill, TranslatePipe],
  templateUrl: './box-project.html',
})
export class BoxProject implements AfterViewInit, OnDestroy {
  @Input() project!: Project;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @ViewChild('projectBox', { static: true }) projectBox!: ElementRef;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.from(this.projectBox.nativeElement, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: this.projectBox.nativeElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }

  ngOnDestroy() {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }
}
