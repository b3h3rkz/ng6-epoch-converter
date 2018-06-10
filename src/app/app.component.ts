import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Epoch  Time Converter';
  epoch: any;
  current_time: Date;
  human_format: any;
  human_format_utc: any;

  constructor() {
    this.current_time =  new Date();
    this.epoch = moment().format('X');
  }

  convertEpoch(epoch_time) {
        this.human_format = moment.unix(epoch_time);
        this.human_format_utc = moment.unix(epoch_time).utc();
  }

  convertToEpoch(time) {

  }


}
