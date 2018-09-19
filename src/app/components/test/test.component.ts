import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiAuthService } from '../../services/api.auth.service';
import { ApiUrl } from '../../services/api.url.service';

export interface PeriodicElement {
    first: string;
    email: string;
    userRole: string;
    status: string;
    createdAt: string
}


@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent {
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    displayedColumns: string[] = ['first', 'userRole', 'email', 'createdAt', 'status', 'actions'];
    adminList: any[] = []
    dataSource = new MatTableDataSource(this.adminList);


    pageNo: number = 1;
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
            this.dataSource = new MatTableDataSource(this.adminList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

            console.log(this.adminList);
        }, err => {
            this.loader = false;
            console.log(err);
            throw err
        })
    }
}
