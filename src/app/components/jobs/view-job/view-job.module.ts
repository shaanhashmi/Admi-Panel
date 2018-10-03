import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewJobComponent } from './view-job.component';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatProgressSpinnerModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: ViewJobComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        MatProgressSpinnerModule,
    ],
    declarations: [ViewJobComponent]
})
export class ViewJobModule { }
