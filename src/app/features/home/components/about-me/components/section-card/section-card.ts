import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import { AnimationService } from '@/core/services/animationService';
@Component({
  selector: 'app-section-card',
  imports: [],
  templateUrl: './section-card.html',
  styles: ``
})
export class SectionCard implements AfterViewInit, OnDestroy {
  @Input() title?: string = '';

  @ViewChild('card', { static: true }) cardSection!: ElementRef;

  constructor(private animationService: AnimationService) { }

  ngAfterViewInit() {
    this.animationService.animateCard(this.cardSection.nativeElement, 0.5);

  }

  ngOnDestroy(): void {
    this.animationService.killAllScrollTriggers();
  }
}