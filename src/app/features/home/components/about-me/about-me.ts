import { Component } from '@angular/core';
import { NewSection } from '../new-section/new-section';
import { IconSkill } from '@/shared/icon-skill/icon-skill';
import { SectionCard } from './components/section-card/section-card';
import { BoxProject } from '../projects/components/box-project/box-project';
import { Project } from '@/interfaces/project';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { JobItem } from './job-item/job-item';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from 'environments/environment';
import { EmailService } from '@/core/services/email-service';

@Component({
  selector: 'app-about-me',
  imports: [
    NewSection,
    IconSkill,
    SectionCard,
    BoxProject,
    TranslatePipe,
    JobItem,
    ReactiveFormsModule,
  ],
  templateUrl: './about-me.html',
})
export class AboutMe {
  serviceId = environment.emailjs_service_id;
  templateId = environment.emailjs_template_id;
  publicKey = environment.public_key;
  formData!: FormGroup;

  messageFinal: string = '';

  constructor(private emailService: EmailService, private translateService: TranslateService) {
    this.formData = new FormBuilder().group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  project: Project = {
    image: './projects/bankinter.jpg',
    utils: ['Angular', 'Bootstrap', 'java spring', 'git', 'jenkins'],
  };

  skills: string[] = ['Angular', 'React', 'Tailwind', 'Bootstrap', 'java spring', 'django'];
  itemsInput: any[] = [
    { type: 'text', label: 'name', placeholder: 'placeholderName', formName: 'name' },
    { type: 'email', label: 'email', placeholder: 'placeholderEmail', formName: 'email' },
    {
      type: 'textarea',
      label: 'message',
      placeholder: 'placeholderMessage',
      formName: 'message',
    },
  ];
  socials: any[] = [
    {
      src: './socialsIcons/linkedin.svg',
      alt: 'Linkedin',
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/navass/',
    },
    {
      src: './socialsIcons/github.svg',
      alt: 'Github',
      name: 'Github',
      href: 'https://github.com/IvanNavas092/',
    },
    {
      src: './socialsIcons/gmail.svg',
      alt: 'Gmail',
      name: 'Gmail',
      href: 'mailto:navass21112@gmail.com',
    },
  ];

  submitForm(e: Event) {
    this.emailService
      .submitForm(e)
      .then(() => {
        this.messageFinal = 'message-sent';
        this.formData.reset();
        console.log(this.messageFinal);
      })
      .catch(() => {
        this.messageFinal = 'message-error';
      });
  }
}
