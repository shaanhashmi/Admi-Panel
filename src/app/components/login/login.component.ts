import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted: boolean = false
    constructor(private router: Router, private fb: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
        });
    }

    // convenience getter for easy access to form fields
    get lf() {
        return this.loginForm.controls;
    }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            localStorage.setItem('accessToken', 'true')
            this.router.navigate(['/admin/dashboard']);
        }
    }
}