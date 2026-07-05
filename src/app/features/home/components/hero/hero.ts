import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverLetters } from '@/shared/hover-letters/hover-letters';
import { AnimationService } from '@/core/services/animationService';
import { AiChat } from "../ai-chat/ai-chat";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [HoverLetters, TranslatePipe, AiChat],
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('line') line!: ElementRef<HTMLDivElement>;
  titleSize: string = '';
  subtitleSize: string = '';

  constructor(
    private animationService: AnimationService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

  ngAfterViewInit() {
    this.animationService.animateLineOnScroll(this.line.nativeElement);
  }
  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
  }

}
