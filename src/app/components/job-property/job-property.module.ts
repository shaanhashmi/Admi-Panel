import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPropertyComponent } from './job-property.component';
import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  declarations: [JobPropertyComponent],
  exports: [JobPropertyComponent]
})
export class JobPropertyModule { }
