import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
  dataToEdit: object;

  constructor(
    public dialogRef: MatDialogRef<JobAttributesComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.dataToEdit = data }

  ngOnInit() {

    this.jobAttrForm = this.fb.group({
      items: this.fb.array([this.createItem(this.dataToEdit)])
    })
  }

  createItem(data?: any): FormGroup {
    return this.fb.group({
      name: [data.jobWork || data.jobTrade || '', [Validators.required]]
    });
  }

  get f() {
    return this.jobAttrForm.controls;
  }

  addItem(): void {
    this.items = this.jobAttrForm.get('items') as FormArray;
    this.items.push(this.createItem({}));
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
        name: f.items.value[0].name
      }
      this.sendDataAfterClose(data);
    }
  }

  onUpdate(f) {
    console.log(f.items.value)
    if (f.items.valid) {
      const data = {
        name: f.items.value[0].name,
        _id: this.dataToEdit["_id"]
      }
      this.sendDataAfterClose(data);
    }
  }

  sendDataAfterClose(confirmation): void {
    this.dialogRef.close(confirmation);
  }

}
