import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiAuthService } from '../../../services/api.auth.service';

@Component({
    selector: 'app-view-job',
    templateUrl: './view-job.component.html',
    styleUrls: ['./view-job.component.scss']
})
export class ViewJobComponent implements OnInit {
    jobData: any
    jobid: any;
    loader: boolean
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private authService: ApiAuthService
    ) {
        this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
            this.jobid = params.get('jobid')
        })
    }

    ngOnInit() {
        this.loader = true
        this.authService.getDataById(this.jobid).subscribe(res => {
            console.log(res);
            this.jobData = res;
            this.loader = false
        })
    }

}
