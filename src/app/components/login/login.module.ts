import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatProgressSpinnerModule } from '@angular/material';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        RouterModule.forChild([{ path: '', component: LoginComponent }])
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class LoginModule { }
