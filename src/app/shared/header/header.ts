import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonLang } from '../button-lang/button-lang';
import { ButtonCV } from '../button-cv/button-cv';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-header',
  imports: [TranslatePipe, ButtonLang, ButtonCV],
  templateUrl: './header.html',
})
export class Header {
  changeLang: boolean = true;
  isMobile!: boolean;
  isOpenMenu: boolean = false;

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(platformId)) {
      this.checkIfMobile();
      window.addEventListener('resize', () => {
        this.checkIfMobile();
      });
    }
  }

  goToAboutMe() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  openMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  private checkIfMobile() {
    this.isMobile = window.innerWidth < 768;
  }
}
