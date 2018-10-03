import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobTradeComponent } from './job-trade.component';
import { RouterModule } from '@angular/router';
import { JobPropertiesComponentsModule } from '../../job-properties-components/job-properties-components.module';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: JobTradeComponent }]),
    JobPropertiesComponentsModule,
  ],
  declarations: [JobTradeComponent],
  exports: [JobTradeComponent]
})
export class JobTradeModule { }
