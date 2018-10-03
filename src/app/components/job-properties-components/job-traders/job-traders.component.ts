import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ConfirmBoxService } from '../../modals/confirm-box/confirm-box.service';
import { JobAttributesService } from '../../modals/job-attributes/job-attributes.service';
import { ApiAuthService } from '../../../services/api.auth.service';
import { ApiUrl } from '../../../services/api.url.service';
import { MatCard } from '@angular/material';

@Component({
  selector: 'app-job-traders',
  templateUrl: './job-traders.component.html',
  styleUrls: ['./job-traders.component.scss']
})
export class JobTradersComponent implements OnInit {

  @Input() jobTraders: any;
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
