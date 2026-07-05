import { ApiService } from '@/core/services/api-service';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '@/interfaces/message';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule, AsyncPipe],
  templateUrl: './ai-chat.html',
  styles: ``
})
export class AiChat implements AfterViewChecked {
  @ViewChild('chatContainer') private chatContainer!: ElementRef;
  isOpen: boolean = false;
  isLoading: boolean = false;
  message: string = '';
  messages: Observable<Message[]>;
  constructor(private apiService: ApiService) {

    this.messages = this.apiService.messages$;
  }
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  sendMessage(question: string): void {
    if (!question.trim()) return;
    this.isLoading = true;

    this.apiService.messages_.next([
      ... this.apiService.messages_.value,
      {
        role: 'person',
        message: question
      }
    ]);

    this.message = '';

    this.apiService.sendMessage(question).subscribe({
      next: (response) => {
        this.apiService.messages_.next([
          ... this.apiService.messages_.value,
          response
        ]);

        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error(error);

        this.apiService.messages_.next([
          ... this.apiService.messages_.value,
          {
            role: 'ai',
            message: 'Algo ha fallado'
          }
        ]);

        this.isLoading = false;
      }
    });
  }


  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop =
        this.chatContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }


}
