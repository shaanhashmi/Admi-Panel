import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../../../services/api.auth.service';
import { ApiUrl } from '../../../services/api.url.service';
import { ConfirmBoxService } from '../../modals/confirm-box/confirm-box.service';
import { JobAttributesService } from '../../modals/job-attributes/job-attributes.service';

@Component({
  selector: 'app-job-trade',
  templateUrl: './job-trade.component.html',
  styleUrls: ['./job-trade.component.scss']
})
export class JobTradeComponent implements OnInit {
  loader: boolean;
  jobTraders: any;

  constructor(
    private cnfboxService: ConfirmBoxService,
    private jobAttrService: JobAttributesService,
    private apiAuth: ApiAuthService
  ) { }

  ngOnInit() {
    this.getAllJobDropdowns();
  }

  getAllJobDropdowns() {
    this.loader = true;
    this.apiAuth.authGet(`${ApiUrl.getAllJobDropdowns}`).subscribe(res => {
      this.loader = false;
      if (res.success) {
        this.jobTraders = res.dropdownValues.jobTrade;
      }
      console.log(res);
    }, err => {
      this.loader = false;
      console.log(err);
      throw err
    })
  }


  onSave(ev) {
    this.jobAttrService.openAddDialog({})
      .subscribe(data => {
        if (data && Object.keys(data).length) {
          this.loader = true;
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

  onUpdate(ev) {
    this.jobAttrService.openAddDialog(ev.data)
      .subscribe(updatedData => {
        if (updatedData && Object.keys(updatedData).length) {
          const payload = {
            jobTrade: updatedData['name'],
            _id: updatedData["_id"]
          };
          this.apiAuth.authUpdate(`${ApiUrl.jobTrade}`, payload).subscribe(res => {
            this.loader = false;
            if (res.success)
              this.jobTraders[ev.index] = payload;
            console.log(res);
          }, err => {
            this.loader = false;
            console.log(err);
            throw err
          })
        }
      })
  }

  onDelete(ev) {
    this.cnfboxService.openDialog()
      .subscribe(confirm => {
        const payload = {
          "_id": ev.id
        }
        console.log(confirm, payload)
        if (confirm === 'yes') {
          this.apiAuth.authDelete(`${ApiUrl.jobTrade}`, ev.id).subscribe(res => {
            this.loader = false;
            if (res.success) {
              this.jobTraders.splice(ev.index, 1);
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
