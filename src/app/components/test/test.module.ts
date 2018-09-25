import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule, MatIconModule } from '@angular/material';
import { MatButtonModule, } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JobPropertyModule } from '../job-property/job-property.module';


const routes: Routes = [
    {
        path: '',
        component: TestComponent,
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
        JobPropertyModule
    ],
    declarations: [TestComponent],
    exports: [TestComponent]
})
export class TestModule { }
