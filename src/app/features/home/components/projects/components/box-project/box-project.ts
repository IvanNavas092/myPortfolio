import { Component, ElementRef, Input, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Project } from '@/interfaces/project';
import { CommonModule } from '@angular/common';
import { IconSkill } from "@/shared/icon-skill/icon-skill";
import { TranslatePipe } from '@ngx-translate/core';
import { AnimationService } from '@/core/services/animationService';

@Component({
  selector: 'app-box-project',
  imports: [CommonModule, IconSkill, TranslatePipe],
  templateUrl: './box-project.html',
})
export class BoxProject implements AfterViewInit, OnDestroy {
  @Input() project!: Project;

  constructor(private animationService: AnimationService) { }

  @ViewChild('projectBox', { static: true }) projectBox!: ElementRef;

  ngAfterViewInit() {
    this.animationService.animateCard(this.projectBox.nativeElement, 0.1);
  }

  ngOnDestroy() {
    this.animationService.killAllScrollTriggers();
  }
}
