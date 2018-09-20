import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { MatInputModule, MatPaginatorModule, MatIconModule, MatButtonModule, MatSortModule, MatTableModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: CompanyComponent,
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
        MatInputModule
    ],
    declarations: [CompanyComponent]
})
export class CompanyModule { }
