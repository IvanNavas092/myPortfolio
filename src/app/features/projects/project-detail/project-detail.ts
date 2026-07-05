import { ProjectService } from '@/core/project-service';
import { Project } from '@/interfaces/project';
import { Component, Input, OnInit } from '@angular/core';
import { IconSkill } from "@/shared/icon-skill/icon-skill";
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { HoverLetters } from "@/shared/hover-letters/hover-letters";


@Component({
  selector: 'app-project-detail',
  imports: [IconSkill, CommonModule, TranslatePipe, HoverLetters],
  templateUrl: './project-detail.html',
  styles: ``
})
export class ProjectDetail implements OnInit {
  @Input() id: string = '';
  project: Project | undefined;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.project = this.projectService.getProjectById(this.id);
    console.log(this.project)
  }

}
