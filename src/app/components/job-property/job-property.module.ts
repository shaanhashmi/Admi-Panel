import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobPropertyComponent } from './job-property.component';
import { MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';
import { JobPropertiesComponentsModule } from '../job-properties-components/job-properties-components.module';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    JobPropertiesComponentsModule
  ],
  declarations: [JobPropertyComponent],
  exports: [JobPropertyComponent]
})
export class JobPropertyModule { }
