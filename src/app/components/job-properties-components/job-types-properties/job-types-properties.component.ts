import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job-types-properties',
  templateUrl: './job-types-properties.component.html',
  styleUrls: ['./job-types-properties.component.scss']
})
export class JobTypesPropertiesComponent implements OnInit {

  @Input() jobTypes: any[];
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
