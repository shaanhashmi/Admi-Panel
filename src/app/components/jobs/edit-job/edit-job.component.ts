import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiUrl } from '../../../services/api.url.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiAuthService } from '../../../services/api.auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-edit-job',
    templateUrl: './edit-job.component.html',
    styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {
    submitted: boolean;
    jobStatusArr = ['ongoing', 'post', 'complete', 'Inactive'];
    jobid: any;
    editJOb: FormGroup;
    formValue: string;
    maxDate: any;
    postMinDate
    minDate = new Date()
    jobId: string;
    loader: boolean;
    constructor(
        private fb: FormBuilder,
        private apiAuth: ApiAuthService,
        private router: Router,
        private route: ActivatedRoute,
        private datePipe: DatePipe
    ) { }

    ngOnInit(): void {
        this.initForm({});
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.jobId = params.get('id');
            this.apiAuth.getDataById(`${ApiUrl.jobdetails}/${this.jobId}`)
                .subscribe(job => {
                    if (job && job['details'])
                        this.initForm(job['details'][0]);
                    else
                        this.initForm(job);
                })
        });

    }

    initForm(job?: any) {
        this.editJOb = this.fb.group({
            jobTitle: [job.jobTitle || '', [Validators.required]],
            propertyType: [job.propertyType || '', [Validators.required]],
            jobStart: [new Date(job.jobStart) || '', [Validators.required]],
            postExpiry: [new Date(job.postExpiry) || '', [Validators.required]],
            isInterior: [job.isInterior || '', [Validators.required]],
            isNewConstruction: [job.isNewConstruction || '', [Validators.required]],
            isOccupied: [job.isOccupied || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
            isPostAs: [job.isPostAs || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
            isQuote: [job.isQuote || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
            jobLocation: [job.jobLocation || '', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
            latitude: [job.latitude || '0'],
            longitude: [job.longitude || '0'],
            matsupplied: [job.matsupplied || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
            matsupDetails: [job.matsupDetails || ''],
            toolsupDetails: [job.toolsupDetails || ''],
            toolsupplied: [job.toolsupplied || ''],
        },
        );
    }

    addEvent(event: Date) {
        this.postMinDate = new Date(event['value'])
    }

    get f() {
        return this.editJOb.controls;
    }

    disableText(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }

    onSubmit() {
        this.submitted = true;
        if (this.editJOb.valid) {
            this.loader = true;
            this.editJOb.value['jobStart'] = this.datePipe.transform(this.editJOb.value['jobStart'], 'dd/MM/yyyy');
            this.editJOb.value['postExpiry'] = this.datePipe.transform(this.editJOb.value['postExpiry'], 'dd/MM/yyyy');
            this.editJOb.value._id = this.jobId;
            this.apiAuth.authUpdate(`${ApiUrl.jobs}`, this.editJOb.value).subscribe(res => {
                this.loader = false;
                if (res.success) {
                    this.router.navigate(['/admin/jobs']);
                }
            }, err => {
                this.loader = false;
                console.log(err);
                throw err
            })
        }
    }

}
