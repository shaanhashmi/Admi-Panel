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

  constructor(
    private cnfboxService: ConfirmBoxService,
    private jobAttrService: JobAttributesService,
    private apiAuth: ApiAuthService
  ) { }

  ngOnInit() {
  }


  onDelete(id) {
    this.cnfboxService.openDialog()
      .subscribe(confirm => {
        console.log(confirm)
        if (confirm === 'yes') {
          this.apiAuth.authGet(`${ApiUrl.jobWork}`).subscribe(res => {
            this.loader = false;
            console.log(res);
          }, err => {
            this.loader = false;
            console.log(err);
            throw err
          })
        }
      })
  }

  addRoomLevel(id) {
    this.jobAttrService.openAddDialog()
      .subscribe(added => {
        console.log(added)
      })
  }

}
