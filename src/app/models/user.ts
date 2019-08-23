import {Timesheet} from './timesheet';

export interface User{
  username: string;
  password: string;
  realName: string;
  timesheet: Timesheet[];
}
