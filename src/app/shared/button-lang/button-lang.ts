import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-button-lang',
  imports: [],
  templateUrl: './button-lang.html',
  styles: ``
})
export class ButtonLang {
  changeLang: boolean = true;
  
  constructor(private translateService: TranslateService) { }

  switchLang() {
    if (this.changeLang) {
      this.translateService.use('es');
    } else {
      this.translateService.use('en');
    }
    this.changeLang = !this.changeLang;
  }

  getLang() {
    const lang = this.translateService.getCurrentLang();
    return lang === 'en'
      ? './flags/Usa.png'
      : './flags/Spain.png';
  }

}
