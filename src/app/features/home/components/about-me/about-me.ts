import { Component } from '@angular/core';
import { NewSection } from "../new-section/new-section";
import { IconSkill } from "@/shared/icon-skill/icon-skill";

@Component({
  selector: 'app-about-me',
  imports: [NewSection, IconSkill],
  templateUrl: './about-me.html',
})
export class AboutMe {
  skills: string[] = ['Angular', 'React', 'Tailwind', 'Bootstrap', 'java spring', 'django'];
  itemsInput : any[] = [
    {type: 'text', label: 'Nombre', placeholder: 'Jack'},
    {type: 'email', label: 'Email', placeholder: 'jack@gmail.com'},
    {type: 'tel', label: 'Telefono', placeholder: '+56 987654321'},
    {type: 'text', label: 'message', placeholder: 'Hello! I am a developer...'},
  ]
  socials: any[] = [
    {src: './socialsIcons/linkedin.svg', alt: 'Linkedin', name: 'Linkedin'},
    {src: './socialsIcons/github.svg', alt: 'Github', name: 'Github'},
    {src: './socialsIcons/discord.svg', alt: 'Discord', name: 'Discord'},
  ]


}
