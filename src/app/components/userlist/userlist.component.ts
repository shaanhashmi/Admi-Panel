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
    loader: boolean;


    constructor(
        private apiAuth: ApiAuthService
    ) { }

    ngOnInit() {
        this.getUsers(this.pageNo);
    }

    getUsers(pageNo) {
        this.loader = true;
        this.apiAuth.authGet(`${ApiUrl.manageAdmin}/?page=${pageNo}`).subscribe(res => {
            this.loader = false;
            this.adminList = res.allAdmins;
            console.log(this.adminList);
        }, err => {
            this.loader = false;
            console.log(err);
            throw err
        })
    }

}
