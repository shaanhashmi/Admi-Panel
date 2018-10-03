import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { EditJobComponent } from './edit-job.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: EditJobComponent }]),
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  declarations: [EditJobComponent],
  exports: [EditJobComponent]
})
export class EditJobModule { }
