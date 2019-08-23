import { Component, OnInit } from '@angular/core';
import {User} from '../models/user';
import {UserService} from '../user.service';
import {Timesheet} from '../models/timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  user: User = { username: '', password: '', realName: '', timesheet: []};
  constructor(private userService: UserService) {}
  ngOnInit() {
  }
  onSubmit() {
    this.userService.createUser(this.user).subscribe(
      value => {
        console.log('[POST] create Customer successfully', value);
      }, error => {
        console.log('FAIL to create Customer!');
      },
      () => {
        console.log('POST Customer - now completed.');
      });
  }
}

