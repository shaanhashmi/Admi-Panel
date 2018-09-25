import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomLevelComponent } from './room-level/room-level.component';
import { JobTradersComponent } from './job-traders/job-traders.component';
import { JobWorksComponent } from './job-works/job-works.component';
import { JobTypesPropertiesComponent } from './job-types-properties/job-types-properties.component';
import { MatButtonModule, MatCardModule, MatChipsModule, MatTooltipModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [RoomLevelComponent, JobTradersComponent, JobWorksComponent, JobTypesPropertiesComponent, FilterPipe],
  exports: [RoomLevelComponent, JobTradersComponent, JobWorksComponent, JobTypesPropertiesComponent, FilterPipe],
})
export class JobPropertiesComponentsModule { }
