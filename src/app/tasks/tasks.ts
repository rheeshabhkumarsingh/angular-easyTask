import { Component, Input } from '@angular/core';
import { Task } from '../task/task';
import { UserDetail } from '../user/user.model';
import { NewTask } from '../new-task/new-task';
import { NewTaskData } from '../task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})

export class Tasks {
  @Input() userDetail!: UserDetail;

  isAddingTask = false;

  constructor(
    private taskService: TaskService,
  ){}

  get selectedUserTask() {
    return this.taskService.getUserTask(this.userDetail.id)
  }

  completeTask(id: string) {
    this.taskService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
