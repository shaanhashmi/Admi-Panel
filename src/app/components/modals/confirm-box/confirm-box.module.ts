import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatCardModule, MatButtonModule } from '@angular/material';
import { ConfirmBoxComponent } from './confirm-box.component';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule

    ],
    declarations: [ConfirmBoxComponent],
    exports: [ConfirmBoxComponent],
    entryComponents: [ConfirmBoxComponent]
})
export class ConfirmBoxModule { }
