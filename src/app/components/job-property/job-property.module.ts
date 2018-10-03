import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPropertyComponent } from './job-property.component';
import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';
import { JobPropertiesComponentsModule } from '../job-properties-components/job-properties-components.module';
import { FilterPipe } from '../../pipes/filter.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: JobPropertyComponent }]),
    JobPropertiesComponentsModule
  ],
  declarations: [JobPropertyComponent],
  exports: [JobPropertyComponent]
})
export class JobPropertyModule { }

