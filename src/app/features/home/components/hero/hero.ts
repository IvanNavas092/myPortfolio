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
      // mobile M
      return '180px';
    } else if (windowWidth < 640) {
      // mobile L
      return '200px';
    } else if (windowWidth < 1024) {
      // tablets
      return '300px';
    } else if (windowWidth < 1095) {
      return '340px';
    } else if (windowWidth < 1280) {
      // laptop
      return '360px';
    } else if (windowWidth < 1366) {
      return '420px';
    } else if (windowWidth < 1536) {
      return '450px';
    } else {
      return '500px';
    }
  }

  responsiveSubtitle(): string {
    const windowWidth = window.innerWidth;
    if (windowWidth < 640) {
      // mobile M
      return '100px';
    } else if (windowWidth < 640) {
      // mobile L
      return '120px';
    } else if (windowWidth < 1024) {
      // tablets
      return '190px';
    } else if (windowWidth < 1280) {
      // laptop
      return '250px';
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
