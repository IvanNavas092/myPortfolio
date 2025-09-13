import { Component, Input } from '@angular/core';
import { Project } from '@/interfaces/project';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-box-project',
  imports: [CommonModule],
  templateUrl: './box-project.html',
})
export class BoxProject {
  @Input() project!: Project;

  constructor(private sanitizer: DomSanitizer) { }

  detectUtils(util: string): SafeHtml {
    let svg: string;
    switch (util.toLowerCase()) {
      case 'angular':
        svg = `<svg class="w-5 fill-red-600 drop-shadow-2xl " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"/></svg>`;
        break;
      case 'django':
        svg = `<svg class="w-5 fill-[#113527] drop-shadow-2xl " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Django</title><path d="M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"/></svg>`;
        break;
      case 'tailwind':
        svg = `<svg class="w-5 fill-[#06B6D4] drop-shadow-2xl " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tailwind CSS</title><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/></svg>`;
        break;
      default:
        svg = `<span class="text-white text-xs">${util}</span>`;
    }
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

}
