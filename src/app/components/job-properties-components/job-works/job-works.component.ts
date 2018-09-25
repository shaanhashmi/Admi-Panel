import { Component, OnInit, Input } from '@angular/core';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { ConfirmBoxService } from '../../modals/confirm-box/confirm-box.service';
import { JobAttributesService } from '../../modals/job-attributes/job-attributes.service';
import { ApiUrl } from '../../../services/api.url.service';
import { ApiAuthService } from '../../../services/api.auth.service';

@Component({
  selector: 'app-job-works',
  templateUrl: './job-works.component.html',
  styleUrls: ['./job-works.component.scss']
})
export class JobWorksComponent implements OnInit {

  @Input() jobWorks: any[];
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

  onUpdate(data, index) {
    this.jobAttrService.openAddDialog(data)
      .subscribe(updatedData => {
        if (updatedData && Object.keys(updatedData).length) {
          const payload = {
            jobWork: updatedData['name'],
            _id: updatedData["_id"]
          };
          this.apiAuth.authUpdate(`${ApiUrl.jobWork}`, payload).subscribe(res => {
            this.loader = false;
            if (res.success)
              this.jobWorks[index] = payload;
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
          this.apiAuth.authDelete(`${ApiUrl.jobWork}`, id).subscribe(res => {
            this.loader = false;
            if (res.success) {
              this.jobWorks.splice(index, 1);
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
