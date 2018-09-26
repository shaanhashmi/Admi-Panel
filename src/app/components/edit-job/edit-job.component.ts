import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiUrl } from '../../services/api.url.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ApiAuthService } from '../../services/api.auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss']
})
export class EditJobComponent implements OnInit {

  @ViewChild('datePicker') dataPicker: ElementRef;
  submitted: boolean;
  jobStatusArr = ['ongoing', 'post', 'complete', 'Inactive'];
  jobid: any;
  editJOb: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiAuth: ApiAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initForm({});
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.apiAuth.getDataById(`${ApiUrl.jobdetails}/${params.get('id')}`)
        .subscribe(job => {
          if (job && job['details'])
            this.initForm(job['details'][0]);
          else
            this.initForm(job);
        })
    })
  }

  initForm(job?: any) {
    this.editJOb = this.fb.group({
      jobTitle: [job.jobTitle || '', [Validators.required]],
      propertyType: [job.propertyType || '', [Validators.required]],
      jobStart: [job.jobStart || '', [Validators.required]],
      postExpiry: [job.postExpiry || '', [Validators.required]],
      jobStatus: [job.jobStatus || '', [Validators.required, Validators.email]],
      isInterior: [job.isInterior || '', [Validators.required]],
      isNewConstruction: [job.isNewConstruction || '', [Validators.required]],
      isOccupied: [job.isOccupied || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      isPostAs: [job.isPostAs || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      isQuote: [job.isQuote || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      jobCost: [job.jobCost || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      jobLocation: [job.jobLocation || '', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      matsupplied: [job.matsupplied || '', [Validators.required]],
      toolsupDetails: [job.toolsupDetails || '', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      toolsupplied: [job.toolsupplied || '', [Validators.required]],
    },
    );
  }

  get f() {
    return this.editJOb.controls;
  }

  disableText(event) {
    return event.charCode >= 48 && event.charCode <= 57;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.editJOb.value);
    return;
    if (this.editJOb.valid) {
      this.apiAuth.authPost(`${ApiUrl.manageAdmin}`, this.editJOb.value).subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
        throw err
      })
    }
  }

}
