import { Component } from '@angular/core';
import { NewSection } from "../new-section/new-section";
import { BoxProject } from "../projects/components/box-project/box-project";
import { Project } from '@/interfaces/project';

@Component({
  selector: 'app-about-me',
  imports: [NewSection, BoxProject],
  templateUrl: './about-me.html',
  styles: ``
})
export class AboutMe {

  project: Project = {
    image: './projects/bankinter.png',
    utils: ['Angular', 'java spring', 'bootstrap', 'git',]
  };

}
