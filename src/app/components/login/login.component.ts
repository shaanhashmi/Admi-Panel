import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiAuthService } from '../../services/api.auth.service';
import { ApiUrl } from '../../services/api.url.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    loginForm: FormGroup;
    submitted: boolean = false
    loader = false
    error: boolean;
    errorMessage: any;
    constructor(
        private router: Router,
        private fb: FormBuilder,
        private apiAuth: ApiAuthService,
        private renderer: Renderer2,
        private el: ElementRef
    ) { }

    ngOnInit(): void {
        this.renderer.addClass(this.el.nativeElement, 'loader-body');
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
        this.error = false;
        this.submitted = true;
        if (this.loginForm.valid) {
            this.loader = true
            this.apiAuth.authPost(ApiUrl.login, this.loginForm.value).subscribe(res => {
                this.loader = false
                if (res.user.userRole === "Admin") {
                    localStorage.setItem('accessToken', res.token)
                    localStorage.setItem('user', JSON.stringify(res.user))
                    this.router.navigate(['/admin/dashboard']);
                }
                else {
                    this.errorMessage = "You are not authorised Admin"
                    this.error = true;
                    throw this.errorMessage
                }
            }, err => {
                this.loader = false
                this.errorMessage = err.error.error
                this.error = true;
                throw this.errorMessage
            })
        }
    }
}