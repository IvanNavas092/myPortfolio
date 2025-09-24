import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { AnimationService } from '@/core/services/animationService';

@Component({
  selector: 'app-new-section',
  imports: [],
  templateUrl: './new-section.html',
  styles: ``
})
export class NewSection implements AfterViewInit, OnDestroy {
  @Input() nameSection!: string;
  @ViewChild('lineP') lineP!: ElementRef<HTMLDivElement>;

  constructor(private animationService: AnimationService) {}
  
    ngAfterViewInit() {
      this.animationService.animateLineOnScroll(this.lineP.nativeElement);
    }
    ngOnDestroy() {
      this.animationService.killAllScrollTriggers();
      }

}
