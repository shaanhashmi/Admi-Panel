import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatSortModule, MatButtonModule, MatIconModule, MatPaginatorModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: PostsComponent,
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
    ],
    declarations: [PostsComponent]
})
export class PostsModule { }
