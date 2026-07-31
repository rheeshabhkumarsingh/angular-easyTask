import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;
  selectedUserDetail = DUMMY_USERS[0];
  protected readonly title = signal('first-angular-project');

  onUserSelect(event: string) {
    console.log(event)
    this.selectedUserDetail = DUMMY_USERS.find(user => user.id === event) ?? DUMMY_USERS[0];
  }
}
