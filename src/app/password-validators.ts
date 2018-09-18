import { AbstractControl } from '@angular/forms';

export class PasswordValidators {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag

        if (password != confirmPassword) {
            AC.get('confirmPassword').setErrors({ invalid: true })
        } else {
            return null
        }
    }
}