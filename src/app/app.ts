import { afterNextRender, AfterViewInit, ApplicationRef, Component, ElementRef, NgZone, OnInit, signal, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { TranslateService } from '@ngx-translate/core';
// gsap
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { filter, take } from 'rxjs';


gsap.registerPlugin(ScrollSmoother);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('myPortfolio');
  @ViewChild('bgVideo')
  video!: ElementRef<HTMLVideoElement>;

  constructor(private translateService: TranslateService, private router: Router,
    private appRef: ApplicationRef, private ngZone: NgZone
  ) {
    afterNextRender(() => {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo(0, 0);
      });
    });

    // idioma por defecto
    this.translateService.use('en');

  }

  log(event: any) {
    console.log(event);
  }

  ngAfterViewInit(): void {
    this.appRef.isStable
      .pipe(filter(stable => stable), take(1))
      .subscribe(() => {
        this.ngZone.runOutsideAngular(() => this.playVideo());
      });
  }

  private playVideo(): void {
    const video = this.video.nativeElement;
    video.muted = true;
    video.play().catch(err => console.warn('Autoplay bloqueado:', err));
  }



}