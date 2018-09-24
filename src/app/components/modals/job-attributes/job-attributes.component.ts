import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ApiUrl } from '../../../services/api.url.service';
import { AuthGuardService } from '../../../services/auth-guard.service';
import { ApiAuthService } from '../../../services/api.auth.service';

@Component({
  selector: 'app-job-attributes',
  templateUrl: './job-attributes.component.html',
  styleUrls: ['./job-attributes.component.scss']
})
export class JobAttributesComponent implements OnInit {

  dialogResult: any;
  confirmYes: string = 'yes'
  confirmNo: string = 'no'
  jobAttrForm: FormGroup;
  items: FormArray;
  loader: boolean;

  constructor(
    public dialogRef: MatDialogRef<JobAttributesComponent>,
    private fb: FormBuilder,
    private apiAuth: ApiAuthService
  ) { }

  ngOnInit() {

    this.jobAttrForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    })
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]]
    });
  }

  get f() {
    return this.jobAttrForm.controls;
  }

  addItem(): void {
    this.items = this.jobAttrForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(index: number): void {
    console.log(index)
    this.items = this.jobAttrForm.get('items') as FormArray;
    this.items.removeAt(index);
  }

  onSubmit(f) {
    console.log(f.items.value)

    if (f.items.valid) {
      const data = {
        jobWork: f.items.value[0].name
      }
      this.apiAuth.authPost(`${ApiUrl.jobWork}`, data).subscribe(res => {
        this.loader = false;
        console.log(res);
      }, err => {
        this.loader = false;
        console.log(err);
        throw err
      })
    }
  }

  onNoClick(confirmation): void {
    this.dialogRef.close(confirmation);
  }

}
