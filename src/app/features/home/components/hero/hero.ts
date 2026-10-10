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
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  imports: [HoverLetters, TranslatePipe, AiChat, DatePipe],
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('line') line!: ElementRef<HTMLDivElement>;
  titleSize: string = '';
  subtitleSize: string = '';

  skills: string[] = ['Angular', 'TypeScript', 'Microservices']
  localeDate = new Date();

  constructor(
    private animationService: AnimationService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translateService: TranslateService
  ) { }

  ngAfterViewInit() {
    this.animationService.animateLineOnScroll(this.line.nativeElement);
  }
  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
  }

  getLang(): string {
    const lang = this.translateService.getCurrentLang();
    if (lang === 'en') {
      return 'clamp(2.5rem,13vw,100px)';
    } else (lang === 'es')
    return 'clamp(2.1rem,11vw,90px)';
  }


}
