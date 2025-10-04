import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-letters',
  imports: [CommonModule],
  templateUrl: './hover-letters.html',
})
export class HoverLetters {
  @Input() text: string = '';
  @Input() isTitle: boolean = false;
  @Input() isSubTitle: boolean = false;

  constructor() {}

  getLetters() {
    return this.text.split('');
  }

  get heroClasses() {
    if (this.isTitle) return 'text-[52vw] md:text-[22vw] lg:text-[25vw] xl:text-[30vw]';
    if (this.isSubTitle) return 'text-[25vw] md:text-[20vw] lg:text-[23vw] xl:text-[20vw]';
    return '';
  }
}
