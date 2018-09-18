import { Component, OnInit } from '@angular/core';
import { ApiUrl } from '../../services/api.url.service';
import { ApiAuthService } from '../../services/api.auth.service';

@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

    pageNo: number = 1;
    adminList: any[] = []


    constructor(
        private apiAuth: ApiAuthService
    ) { }

    ngOnInit() {
        this.getUsers(this.pageNo);
    }

    getUsers(pageNo) {
        this.apiAuth.authGet(`${ApiUrl.manageAdmin}/?page=${pageNo}`).subscribe(res => {
            this.adminList = res.allAdmins;
            console.log(this.adminList);
        }, err => {
            console.log(err);
            throw err
        })
    }

}
