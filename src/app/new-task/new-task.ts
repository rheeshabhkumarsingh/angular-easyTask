import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input() userId!: string;
  @Output() cancel = new EventEmitter<void>()
  constructor(){}
  taskTitle: string = '';
  taskSummary: string = '';
  taskDate: string = '';


  onCancel() {
    this.cancel.emit()
  }

}
