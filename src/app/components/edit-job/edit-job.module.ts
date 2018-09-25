import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { EditJobComponent } from './edit-job.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: EditJobComponent }]),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [EditJobComponent],
  exports: [EditJobComponent]
})
export class EditJobModule { }
