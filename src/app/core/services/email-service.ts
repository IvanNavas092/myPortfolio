import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from 'environments/environment';
import { Observable, of } from 'rxjs';

interface FormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  serviceId = environment.emailjs_service_id;
  templateId = environment.emailjs_template_id;
  publicKey = environment.public_key;

  submitForm(e: Event): Promise<any> {
    return emailjs
      .sendForm(this.serviceId, this.templateId, e.target as HTMLFormElement, {
        publicKey: this.publicKey,
      })
      .then(
        () => {
          console.log('correct');
        },
        (error: string) => {
          console.log(error);
        }
      );
  }
}
