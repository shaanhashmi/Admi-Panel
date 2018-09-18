import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedJobsComponent } from './completed-jobs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CompletedJobsComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CompletedJobsComponent]
})
export class CompletedJobsModule { }
