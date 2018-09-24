import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-types-properties',
  templateUrl: './job-types-properties.component.html',
  styleUrls: ['./job-types-properties.component.scss']
})
export class JobTypesPropertiesComponent implements OnInit {

  @Input() jobTypes: any;

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
