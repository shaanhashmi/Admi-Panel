import { Component, ViewChild, ElementRef } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiUrl } from '../../../services/api.url.service';
import { ApiAuthService } from '../../../services/api.auth.service';
import { PasswordValidators } from '../../../password-validators';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-adduser',
    templateUrl: './adduser.component.html',
    styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent {
    userForm: any;
    submitted: boolean;
    date: Date;
    roles = ['Admin', "User"];
    userStatus = [{ status: true, value: 'Active' }, { status: false, value: 'Deactive' }]
    userId: any = '';

    constructor(
        private fb: FormBuilder,
        private apiAuth: ApiAuthService,
        private router: Router,
        private route: ActivatedRoute,
        public titlecasePipe: TitleCasePipe
    ) { }

    ngOnInit(): void {
        this.initForm({});
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.userId = params.get('id');
            this.apiAuth.getDataById(`${ApiUrl.manageUser}/${this.userId}`)
                .subscribe(user => {
                    if (user && user['userDetail']) {
                        user['userDetail'].userRole = this.transformString(user['userDetail'].userRole)
                        this.initForm(user['userDetail']);
                    } else {
                        user.userRole = this.transformString(user.userRole);
                        this.initForm(user);
                    }
                    console.log("user", user.status)
                })
        })

    }

    // this.userForm = this.fb.group({
    //     first: ['', [Validators.required]],
    //     last: ['', [Validators.required]],
    //     userRole: [this.roles[0], [Validators.required]],
    //     email: ['', [Validators.required, Validators.email]],
    //     password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    //     confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    //     postcode: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(4)]],
    //     phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    // },
    //     { validator: PasswordValidators.MatchPassword }
    // );


    initForm(user?: any) {
        console.log(user.status)
        this.userForm = this.fb.group({
            first: [user.first || '', [Validators.required]],
            last: [user.last || '', [Validators.required]],
            phone: [user.phone || '', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            userRole: [user.userRole || '', [Validators.required]],
            userType: [user.userType || '', Validators.required],
            email: [user.email || '', [Validators.required, Validators.email]],
            postcode: [user.postcode || '', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]],
            status: [user['status'] || false]
        });
    }

    transformString(value) {
        return this.titlecasePipe.transform(value);
    }

    get f() {
        return this.userForm.controls;
    }

    disableText(event) {
        return event.charCode >= 48 && event.charCode <= 57;
    }

    onSubmit() {
        this.submitted = true;
        this.userForm.value._id = this.userId
        if (this.userForm.valid) {
            this.apiAuth.authUpdate(`${ApiUrl.manageUser}/${this.userId}`, this.userForm.value)
                .subscribe(res => {
                    if (res.success) {
                        this.router.navigate(['admin/users'])
                    }
                }, err => {
                    console.log(err);
                    throw err
                })
        }
    }

}
