import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonLang } from '../button-lang/button-lang';
import { ButtonCV } from '../button-cv/button-cv';
@Component({
  selector: 'app-header',
  imports: [TranslatePipe, ButtonLang, ButtonCV],
  templateUrl: './header.html',
})
export class Header {
  changeLang: boolean = true;

  constructor(private translateService: TranslateService) {}

  goToAboutMe() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

}
