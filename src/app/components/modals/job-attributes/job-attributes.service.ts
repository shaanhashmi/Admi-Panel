import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogRef, MatDialog } from '@angular/material';
import { JobAttributesComponent } from './job-attributes.component';

@Injectable({
  providedIn: 'root'
})
export class JobAttributesService {

  jobDialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog) { }

  openAddDialog() {
    return new Observable((observer) => {
      this.jobDialogRef = this.dialog.open(JobAttributesComponent, {
        width: '450px',
      });

      this.jobDialogRef.afterClosed().subscribe(result => {
        observer.next(result);
      });
    })
  }
}
