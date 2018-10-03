import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-room-level',
  templateUrl: './room-level.component.html',
  styleUrls: ['./room-level.component.scss']
})
export class RoomLevelComponent implements OnInit {

  @Input() roomLevel: any[];
  @Input() loader: boolean;

  @Output() save: EventEmitter<any> = new EventEmitter<any>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  searchValue: string = '';

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    this.save.emit(true);
  }

  onUpdate(data, index) {
    this.update.emit({ data: data, index: index })
  }

  onDelete(index, id) {
    this.delete.emit({ index: index, id: id });
  }
}
