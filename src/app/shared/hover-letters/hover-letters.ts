import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-letters',
  imports: [CommonModule],
  templateUrl: './hover-letters.html',
})
export class HoverLetters {
  @Input() text: string = '';
  @Input() size: string = '';
  @Input() isHero: boolean = false;
  @Input() isSubTitle: boolean = false;

  constructor() {}

  getLetters() {
    return this.text.split('');
  }

  get fontSize() {
    return !this.isHero && !this.isSubTitle ? this.size : '';
  }

  get heroClasses() {
    if (this.isHero) return 'text-[40vw] md:text-[22vw] lg:text-[25vw] xl:text-[25vw]';
    if (this.isSubTitle) return 'text-[25vw] md:text-[20vw] lg:text-[23vw] xl:text-[18vw]';
    return '';
  }
}
