import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-traders',
  templateUrl: './job-traders.component.html',
  styleUrls: ['./job-traders.component.scss']
})
export class JobTradersComponent implements OnInit {

  @Input() jobTraders: any;

  constructor() { }

  ngOnInit() {
  }


  removeRoomLevel(id) {
    console.log('removeRoomLevel', id)
  }

  addRoomLevel(id) {
    console.log(id);
  }


}
