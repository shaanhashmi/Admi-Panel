import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatChipsModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: JobsComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatChipsModule,
        MatProgressSpinnerModule,
        MatSelectModule
    ],
    declarations: [JobsComponent]
})
export class JobsModule { }
