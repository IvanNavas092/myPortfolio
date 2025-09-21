import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { HoverLetters } from '@/shared/hover-letters/hover-letters';
import { AnimationService } from '@/core/services/animationService';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [HoverLetters],
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('line') line!: ElementRef<HTMLDivElement>;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    this.animationService.animateLineOnScroll(this.line.nativeElement);
  }
  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
    }
}
