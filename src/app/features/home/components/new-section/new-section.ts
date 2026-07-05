import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { AnimationService } from '@/core/services/animationService';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-new-section',
  imports: [NgClass],
  templateUrl: './new-section.html',
  styles: ``
})
export class NewSection implements AfterViewInit, OnDestroy {
  @Input() nameSection!: string;
  @ViewChild('lineP') lineP!: ElementRef<HTMLDivElement>;
  @Input() small!: boolean;

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit() {
    this.animationService.animateLineOnScroll(this.lineP.nativeElement);
  }
  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
  }

}
