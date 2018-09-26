import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user.component';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ViewUserComponent }]),
    MatCardModule,
    MatButtonModule
  ],
  declarations: [ViewUserComponent],
  exports: [ViewUserComponent]
})
export class ViewUserModule { }
