import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomLevelComponent } from './room-level/room-level.component';
import { JobTradersComponent } from './job-traders/job-traders.component';
import { JobWorksComponent } from './job-works/job-works.component';
import { JobTypesPropertiesComponent } from './job-types-properties/job-types-properties.component';
import { MatButtonModule, MatCardModule, MatChipsModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
  ],
  declarations: [RoomLevelComponent, JobTradersComponent, JobWorksComponent, JobTypesPropertiesComponent],
  exports: [RoomLevelComponent, JobTradersComponent, JobWorksComponent, JobTypesPropertiesComponent],
})
export class JobPropertiesComponentsModule { }
