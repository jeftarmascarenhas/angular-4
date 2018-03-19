import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
  messages: String[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
