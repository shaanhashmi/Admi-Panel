import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiUrl } from '../../../services/api.url.service';
import { ApiAuthService } from '../../../services/api.auth.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmBoxService } from '../../modals/confirm-box/confirm-box.service';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-userlist',
    templateUrl: './userlist.component.html',
    styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    displayedColumns: string[] = ['first', 'userRole', 'email', 'createdAt', 'status', 'actions'];
    transformToLowerCaseArr: string[] = ['first', 'userRole', 'email', 'actions'];

    userList: any[] = [];
    dataSource = new MatTableDataSource(this.userList);

    pageNo: number = 1;
    loader: boolean;
    searchValue: string;


    constructor(
        private apiAuth: ApiAuthService,
        private router: Router,
        private cnfboxService: ConfirmBoxService
    ) { }

    ngOnInit() {
        this.getUsers(this.pageNo);
    }

    getUsers(pageNo) {
        this.loader = true;
        this.apiAuth.authGet(`${ApiUrl.getAllUsers}/?page=${pageNo}`).subscribe(res => {
            this.loader = false;
            this.userList = this.apiAuth.transformToLowerCase(this.transformToLowerCaseArr, res.userList);
            this.dataSource = new MatTableDataSource(this.userList);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        }, err => {
            this.loader = false;
            console.log(err);
            throw err
        })
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        console.log(this.dataSource.filteredData)
    }

    onView(id) {
        console.log("onView", id);
    }

    onUpdate(user) {
        this.apiAuth.setData(user)
        this.router.navigate(['admin/addusers', user._id])
    }

    onDelete(id) {
        this.cnfboxService.openDialog()
            .subscribe(confirm => {
                if (confirm === 'yes') {
                    this.apiAuth.authDelete(ApiUrl.manageAdmin, id)
                        .subscribe(res => {
                            console.log(res);
                        }, err => {
                            throw err
                        })
                }
            })
    }
}
