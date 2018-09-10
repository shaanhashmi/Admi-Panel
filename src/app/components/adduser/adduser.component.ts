import { Component, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
    selector: 'app-adduser',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
    @ViewChild('datePicker') dataPicker: ElementRef;
    userForm: any;
    submitted: boolean;
    date: Date;

    options: DatepickerOptions = {
        minYear: 1970,
        maxYear: 2030,
        maxDate: new Date(Date.now()),  // Maximal selectable date
        placeholder: 'Date Of Birth', // HTML input placeholder attribute (default: '')
        addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
        addStyle: { background: 'white', width: '100%' }, // Optional, value to pass to [ngStyle] on the input field
        useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
    };

    constructor(private fb: FormBuilder, private router: Router) {
    }
    ngOnInit(): void {
        this.userForm = this.fb.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            country: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            dateOfBirth: ['', [Validators.required]],
            gender: ['', Validators.required],
        });
    }

    get f() {
        return this.userForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.userForm.value);

        if (this.userForm.valid) {
        }
    }

}
