import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InactiveJobsComponent } from './inactive-jobs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: InactiveJobsComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [InactiveJobsComponent]
})
export class InactiveJobsModule { }
