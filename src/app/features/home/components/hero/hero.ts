import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
  PLATFORM_ID,
  HostListener,
  Inject,
  OnInit,
} from '@angular/core';
import { HoverLetters } from '@/shared/hover-letters/hover-letters';
import { AnimationService } from '@/core/services/animationService';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [HoverLetters],
})
export class Hero implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('line') line!: ElementRef<HTMLDivElement>;

  titleSize: string = '';
  subtitleSize: string = '';

  constructor(
    private animationService: AnimationService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.onResize();
  }

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateSizes();
    }
  }

  ngAfterViewInit() {
    this.animationService.animateLineOnScroll(this.line.nativeElement);
  }
  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
  }

  responsiveTitle(): string {
    const windowWidth = window.innerWidth;

    if (windowWidth < 640) {
      // mobile
      return '200px';
    } else if (windowWidth < 1024) {
      // tablets
      return '320px';
    } else if (windowWidth < 1280) {
      // laptop
      return '390px';
    } else if (windowWidth < 1536) {
      return '450px';
    } else {
      return '500px';
    }
  }

  responsiveSubtitle(): string {
    const windowWidth = window.innerWidth;

    if (windowWidth < 640) {
      // mobile
      return '120px';
    } else if (windowWidth < 1024) {
      // tablets
      return '250px';
    } else if (windowWidth < 1280) {
      // laptop
      return '290px';
    } else if (windowWidth < 1536) {
      return '350px';
    } else {
      return '400px';
    }
  }

  updateSizes() {
    this.titleSize = this.responsiveTitle();
    this.subtitleSize = this.responsiveSubtitle();
  }
}
