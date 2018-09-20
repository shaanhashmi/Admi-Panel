import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { TestComponent } from '../../test/test.component';
import { ConfirmBoxComponent } from './confirm-box.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmBoxService {
  dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    return new Observable((observer) => {
      this.dialogRef = this.dialog.open(ConfirmBoxComponent, {
        width: 'auto',
      });
      this.dialogRef.afterClosed().subscribe(result => {
        observer.next(result);
      });
    })
  }
}
