import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { Routes, RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatInputModule } from '@angular/material';
import { FilterPipe } from '../../pipes/filter.pipe';

const routes: Routes = [
    {
        path: '',
        component: UserlistComponent,
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
    declarations: [UserlistComponent, FilterPipe]
})
export class UserlistModule { }
