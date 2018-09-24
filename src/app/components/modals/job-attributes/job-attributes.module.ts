import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobAttributesComponent } from './job-attributes.component';
import { MatButtonModule, MatCardModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
    ],
    declarations: [JobAttributesComponent],
    exports: [JobAttributesComponent],
    entryComponents: [JobAttributesComponent]
})
export class JobAttributesModule { }
