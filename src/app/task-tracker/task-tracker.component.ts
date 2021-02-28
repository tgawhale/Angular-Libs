import { Component, OnInit } from '@angular/core';
import { TaskTracker } from './task.model';

@Component({
  selector: 'app-task-tracker',
  templateUrl: './task-tracker.component.html',
  styleUrls: ['./task-tracker.component.css'],
})
export class TaskTrackerComponent implements OnInit {
  isResult: boolean = false;
  taskTrackers: TaskTracker[] = [];
  taskList: string[] = [
    'Online Training',
    'Break',
    'Mentor Assignment',
    'Mini Project',
    'Account Interview',
    'Mock Interview',
    'Other',
  ];
  constructor() {}

  ngOnInit(): void {}

  addTask(val: string) {
    this.taskTrackers.push({ name: val });
  }

  startTask(id: number) {
    this.taskTrackers[id].sTime = new Date();
  }

  endTask(id: number) {
    this.taskTrackers[id].eTime = new Date();
    let total =
      this.taskTrackers[id].eTime.getTime() -
      this.taskTrackers[id].sTime.getTime();
    this.taskTrackers[id].tTime = total;
  }
}
