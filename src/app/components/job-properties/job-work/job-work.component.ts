import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../../../services/api.auth.service';
import { ApiUrl } from '../../../services/api.url.service';
import { ConfirmBoxService } from '../../modals/confirm-box/confirm-box.service';
import { JobAttributesService } from '../../modals/job-attributes/job-attributes.service';

@Component({
  selector: 'app-job-work',
  templateUrl: './job-work.component.html',
  styleUrls: ['./job-work.component.scss']
})
export class JobWorkComponent implements OnInit {
  loader: boolean;
  jobWorks: any[];

  constructor(
    private cnfboxService: ConfirmBoxService,
    private jobAttrService: JobAttributesService,
    private apiAuth: ApiAuthService
  ) { }

  ngOnInit() {
    this.getAllWork();
  }

  getAllWork() {
    this.loader = true;
    this.apiAuth.authGet(`${ApiUrl.getAllJobDropdowns}`).subscribe(res => {
      this.loader = false;
      if (res.success) {
        this.jobWorks = res.dropdownValues.jobWork;
      }
      console.log(res);
    }, err => {
      this.loader = false;
      console.log(err);
      throw err
    })
  }



  onSave() {
    this.jobAttrService.openAddDialog({})
      .subscribe(data => {
        if (data && Object.keys(data).length) {
          const payload = {
            "jobWork": data['name']
          }
          this.apiAuth.authPost(`${ApiUrl.jobWork}`, payload).subscribe(res => {
            this.loader = false;
            this.jobWorks.push(res.jobwork);
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
            jobWork: updatedData['name'],
            _id: updatedData["_id"]
          };
          this.apiAuth.authUpdate(`${ApiUrl.jobWork}`, payload).subscribe(res => {
            this.loader = false;
            if (res.success)
              this.jobWorks[ev.index] = payload;
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
          this.apiAuth.authDelete(`${ApiUrl.jobWork}`, ev.id).subscribe(res => {
            this.loader = false;
            if (res.success) {
              this.jobWorks.splice(ev.index, 1);
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
