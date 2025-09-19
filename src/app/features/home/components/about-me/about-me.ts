import { Component } from '@angular/core';
import { NewSection } from "../new-section/new-section";
import { IconSkill } from "@/shared/icon-skill/icon-skill";
import { SectionCard } from "./components/section-card/section-card";
import { BoxProject } from "../projects/components/box-project/box-project";
import { Project } from '@/interfaces/project';

@Component({
  selector: 'app-about-me',
  imports: [NewSection, IconSkill, SectionCard, BoxProject],
  templateUrl: './about-me.html',
})
export class AboutMe {

  project: Project =
    {
      image: './projects/bankinter.png',
      utils: ['Angular', 'Bootstrap', 'java spring', 'git', 'jenkins']
    }

  skills: string[] = ['Angular', 'React', 'Tailwind', 'Bootstrap', 'java spring', 'django'];
  itemsInput: any[] = [
    { type: 'text', label: 'Nombre', placeholder: 'Jack' },
    { type: 'email', label: 'Email', placeholder: 'jack@gmail.com' },
    { type: 'tel', label: 'Telefono', placeholder: '+56 987654321' },
    { type: 'text', label: 'message', placeholder: 'Hello! I am a developer...' },
  ]
  socials: any[] = [
    { src: './socialsIcons/linkedin.svg', alt: 'Linkedin', name: 'Linkedin', href: 'https://www.linkedin.com/in/navass/' },
    { src: './socialsIcons/github.svg', alt: 'Github', name: 'Github', href: 'https://github.com/IvanNavas092/' },
    { src: './socialsIcons/discord.svg', alt: 'Discord', name: 'Discord', href: 'https://discord.com' },
  ]


}
