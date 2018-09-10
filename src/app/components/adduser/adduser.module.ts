import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: AdduserComponent,
        data: {
            title: 'Add User'
        }
    }
];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgDatepickerModule,
        RouterModule.forChild(routes)
    ],
    declarations: [AdduserComponent],
    exports: [AdduserComponent]
})
export class AdduserModule { }
