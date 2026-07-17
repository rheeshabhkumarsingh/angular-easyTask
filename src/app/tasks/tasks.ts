import { Component, Input } from '@angular/core';
import { UserDetail } from '../app';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  @Input() userDetail!: UserDetail;


  
}
