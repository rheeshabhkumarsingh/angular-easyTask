import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  constructor(){}
  taskTitle: string = '';
  taskSummary: string = '';
  taskDate: string = '';

  onSubmit() {
    this.add.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      date: this.taskDate
    })
    this.onCancel();
  }


  onCancel() {
    this.cancel.emit()
  }

}
