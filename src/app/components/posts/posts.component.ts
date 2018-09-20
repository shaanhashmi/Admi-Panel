import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ApiAuthService } from '../../services/api.auth.service';
import { ConfirmBoxService } from '../modals/confirm-box/confirm-box.service';
import { ApiUrl } from '../../services/api.url.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = ['first', 'userRole', 'email', 'createdAt', 'status', 'actions'];
  adminList: any[] = []
  dataSource = new MatTableDataSource(this.adminList);


  pageNo: number = 1;
  loader: boolean;
  dialogResult: any;

  constructor(
    private apiAuth: ApiAuthService,
    private cnfbox: ConfirmBoxService
  ) { }

  ngOnInit() {
    this.getUsers(this.pageNo);
  }

  getUsers(pageNo) {
    this.loader = true;
    this.apiAuth.authGet(`${ApiUrl.getAllCompanies}/?page=${pageNo}`).subscribe(res => {
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

  openDialog() {
    this.cnfbox.openDialog()
      .subscribe(confirm => console.log(confirm))
  }

}
