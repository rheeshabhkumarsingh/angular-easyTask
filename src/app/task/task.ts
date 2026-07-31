import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskData } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input() task!: TaskData;
  @Output() complete = new EventEmitter<String>();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
