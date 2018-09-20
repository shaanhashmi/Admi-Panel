import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-box',
  templateUrl: './confirm-box.component.html',
  styleUrls: ['./confirm-box.component.scss']
})
export class ConfirmBoxComponent implements OnInit {
  dialogResult: any;
  confirmYes: string = 'yes'
  confirmNo: string = 'no'

  constructor(
    public dialogRef: MatDialogRef<ConfirmBoxComponent>
  ) { }

  ngOnInit() {
  }

  onNoClick(confirmation): void {
    this.dialogRef.close(confirmation);
  }

}
