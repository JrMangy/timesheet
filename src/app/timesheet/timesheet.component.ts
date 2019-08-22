import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  private timeInHours: string;
  private timeInMinutes: string;
  private timeOutHours: string;
  private timeOutMinutes: string;
  private date: string;
  constructor() { }

  ngOnInit() {
  }
  newTimesheet(){
    console.log('new timesheet');
  }

}
