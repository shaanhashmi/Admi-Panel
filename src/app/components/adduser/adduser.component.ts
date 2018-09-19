import { Component, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiUrl } from '../../services/api.url.service';
import { ApiAuthService } from '../../services/api.auth.service';
import { PasswordValidators } from '../../password-validators';

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
    roles = ['Admin']

    constructor(private fb: FormBuilder, private apiAuth: ApiAuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.userForm = this.fb.group({
            first: ['', [Validators.required]],
            last: ['', [Validators.required]],
            userRole: [this.roles[0], [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            postcode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
        },
            { validator: PasswordValidators.MatchPassword }
        );
    }

    get f() {
        return this.userForm.controls;
    }

    disableText(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }

    onSubmit() {
        this.submitted = true;
        console.log(this.userForm.value, this.userForm.valid);
        if (this.userForm.valid) {
            this.apiAuth.authPost(ApiUrl.manageAdmin, this.userForm.value).subscribe(res => {
                console.log(res);
            }, err => {
                console.log(err);
                throw err
            })
        }
    }

}
