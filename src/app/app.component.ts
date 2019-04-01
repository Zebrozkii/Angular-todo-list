import { Component } from '@angular/core';
import { Task } from './models/task.model';
import { Taco } from './models/taco.model';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course'),
    new Task('Begin brainstorming possible JavaScript group projects'),
    new Task('Add README file to last few Angular repos on GitHub')
  ];
  tacos: Taco[] = [
    new Taco('Soft Taco', 6),
    new Taco('Hard Taco', 7),
    new Taco('Fish Taco', 8)
  ];
}
