import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { Project } from '@/interfaces/project';
import { CommonModule } from '@angular/common';
import { IconSkill } from "@/shared/icon-skill/icon-skill";
import { TranslatePipe } from '@ngx-translate/core';
import { AnimationService } from '@/core/services/animationService';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-box-project',
  imports: [CommonModule, IconSkill, TranslatePipe],
  templateUrl: './box-project.html',
})
export class BoxProject implements AfterViewInit, OnDestroy {
  @Input() project!: Project;
  isOpenOverlay!: boolean;
  isMobile!: boolean;

  constructor(private animationService: AnimationService, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 768;
    }
  }

  @ViewChild('projectBox', { static: true }) projectBox!: ElementRef;

  ngAfterViewInit() {
    this.animationService.animateCard(this.projectBox.nativeElement, 0.1);
  }

  toggleOverlay() {
    if (this.isMobile) {
      this.isOpenOverlay = !this.isOpenOverlay;
    }
  }


  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
  }


  get overlayClasses(): Record<string, boolean> {
    if (this.isMobile) {
      return {
        'opacity-0': !this.isOpenOverlay,
        'opacity-100': this.isOpenOverlay,
      };
    } else {
      return {
        'opacity-0': true,
        'group-hover:opacity-100': true,
      };
    }
  }

}
