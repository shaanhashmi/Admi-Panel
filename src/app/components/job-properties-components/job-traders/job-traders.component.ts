import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  loader: boolean;
  searchValue: string = '';

  constructor(
    private cnfboxService: ConfirmBoxService,
    private jobAttrService: JobAttributesService,
    private apiAuth: ApiAuthService
  ) { }

  ngOnInit() {
  }

  onSave() {
    this.jobAttrService.openAddDialog({})
      .subscribe(data => {
        if (data && Object.keys(data).length) {
          const payload = {
            "jobTrade": data['name']
          }
          this.apiAuth.authPost(`${ApiUrl.jobTrade}`, payload).subscribe(res => {
            this.loader = false;
            this.jobTraders.push(res.jobtrade);
            console.log(res);
          }, err => {
            this.loader = false;
            console.log(err);
            throw err
          })
        }
      })
  }

  onUpdate(data, index) {
    this.jobAttrService.openAddDialog(data)
      .subscribe(updatedData => {
        if (updatedData && Object.keys(updatedData).length) {
          const payload = {
            jobTrade: updatedData['name'],
            _id: updatedData["_id"]
          };
          this.apiAuth.authUpdate(`${ApiUrl.jobTrade}`, payload).subscribe(res => {
            this.loader = false;
            if (res.success)
              this.jobTraders[index] = payload;
            console.log(res);
          }, err => {
            this.loader = false;
            console.log(err);
            throw err
          })
        }
      })
  }


  onDelete(index, id) {
    this.cnfboxService.openDialog()
      .subscribe(confirm => {
        const payload = {
          "_id": id
        }
        console.log(confirm, payload)
        if (confirm === 'yes') {
          this.apiAuth.authDelete(`${ApiUrl.jobTrade}`, id).subscribe(res => {
            this.loader = false;
            if (res.success) {
              this.jobTraders.splice(index, 1);
            }
          }, err => {
            this.loader = false;
            console.log(err);
            throw err;
          })
        }
      })
  }


}
