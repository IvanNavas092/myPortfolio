import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-letters',
  imports: [CommonModule],
  templateUrl: './hover-letters.html',
})
export class HoverLetters {
  @Input() text: string = '';

  getLetters() {
    return this.text.split('');
  }

}
