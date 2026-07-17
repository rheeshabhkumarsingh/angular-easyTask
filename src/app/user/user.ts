import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { UserDetail } from '../app';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input() user!: UserDetail;
  @Output() selectedUser = new EventEmitter();

  

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.selectedUser.emit(this.user.id);
  }
}
