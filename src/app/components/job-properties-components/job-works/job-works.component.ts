import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-job-works',
  templateUrl: './job-works.component.html',
  styleUrls: ['./job-works.component.scss']
})
export class JobWorksComponent implements OnInit {

  @Input() jobWorks: any[];
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
