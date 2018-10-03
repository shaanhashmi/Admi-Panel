import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobWorkComponent } from './job-work.component';
import { RouterModule } from '@angular/router';
import { JobPropertiesComponentsModule } from '../../job-properties-components/job-properties-components.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: JobWorkComponent }]),
    JobPropertiesComponentsModule
  ],
  declarations: [JobWorkComponent],
  exports: [JobWorkComponent]
})
export class JobWorkModule { }
