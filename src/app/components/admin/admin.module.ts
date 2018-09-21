import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
    }
];
@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatTableModule,
        MatSortModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        MatInputModule,
        MatProgressSpinnerModule
    ],
    declarations: [AdminComponent]
})
export class AdminModule { }
