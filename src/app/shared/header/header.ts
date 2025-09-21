import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styles: ``,
})
export class Header {

  goToAboutMe() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
