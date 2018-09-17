import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../services/api.url.service';
import { ApiAuthService } from '../../services/api.auth.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

    constructor(
        private apiAuth: ApiAuthService
    ) { }

    ngOnInit() {
        this.getUsers()
    }

    getUsers() {
        this.apiAuth.authGet(ApiUrl.manageAdmin).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
            throw err
        })
    }

}
