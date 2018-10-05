import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { AdduserComponent } from './adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule, MatProgressSpinnerModule } from '@angular/material';

const routes: Routes = [
    {
        path: '',
        component: AdduserComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        MatCardModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    declarations: [AdduserComponent],
    exports: [AdduserComponent],
    providers: [TitleCasePipe]
})
export class AdduserModule { }
