import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-room-level',
  templateUrl: './room-level.component.html',
  styleUrls: ['./room-level.component.scss']
})
export class RoomLevelComponent implements OnInit {

  @Input() roomLevels: any;

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
