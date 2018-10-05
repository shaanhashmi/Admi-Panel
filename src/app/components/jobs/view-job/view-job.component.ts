import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiAuthService } from '../../../services/api.auth.service';
import { ApiUrl } from '../../../services/api.url.service';

@Component({
    selector: 'app-view-job',
    templateUrl: './view-job.component.html',
    styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {
    jobData: any;
    loader: boolean;
    jobId: string;
    jobName: string;
    jobStatus: any[] = [
        { bgcolor: 'bg-warning', status: "ongoing" },
        { bgcolor: 'bg-success', status: "completed" },
        { bgcolor: "bg-primary", status: "posted" },
        { bgcolor: "bg-danger", status: "deactivated" }
    ];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private apiAuth: ApiAuthService
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.jobId = params.get('jobid');
            this.apiAuth.getDataById(`${ApiUrl.jobdetails}/${this.jobId}`)
                .subscribe(job => {
                    if (job && job['details']) {
                        this.jobData = job['details'][0];
                        this.jobName = this.jobData.jobStatus;
                    } else {
                        this.jobData = job;
                        this.jobName = job.jobStatus;
                    }
                })
        });
    }

    selectionChanged(status) {
        const payload = {
            _id: this.jobId,
            jobStatus: status
        }
        this.apiAuth.authUpdate(`${ApiUrl.jobs}`, payload)
            .subscribe(res => {
                this.jobData.jobStatus = res.jobList.jobStatus;
            }, err => {
                throw err;
            })
    }

}
