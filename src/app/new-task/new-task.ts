import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input() userId!: string;
  constructor(){}
  taskTitle: string = '';
  taskSummary: string = '';
}
