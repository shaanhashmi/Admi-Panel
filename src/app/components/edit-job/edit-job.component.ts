import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiUrl } from '../../services/api.url.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PasswordValidators } from '../../password-validators';
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
  date: Date;
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

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.apiAuth.getJob(params.get('id'))
        .subscribe(job => {
          this.initForm(job);
        })
    })
  }

  initForm(job?: any) {
    console.log(job);
    this.editJOb = this.fb.group({
      jobTitle: ['', [Validators.required]],
      propertyType: ['', [Validators.required]],
      jobStart: ['', [Validators.required]],
      jobStatus: ['', [Validators.required, Validators.email]],
      isInterior: ['', [Validators.required]],
      isNewConstruction: ['', [Validators.required]],
      isOccupied: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      isPostAs: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      isQuote: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      jobCost: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      jobLocation: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(40)]],
      // matsupDetails: ['', [Validators.required]],
      matsupplied: ['', [Validators.required]],
      toolsupDetails: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      toolsupplied: ['', [Validators.required]],
    },
    );
  }

  get f() {
    console.log(this.editJOb.controls);
    return this.editJOb.controls;
  }

  disableText(event) {
    return event.charCode >= 48 && event.charCode <= 57;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.editJOb.value, this.editJOb.valid);
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
