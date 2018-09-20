import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { ApiAuthService } from '../../services/api.auth.service';
import { ConfirmBoxService } from '../modals/confirm-box/confirm-box.service';
import { ApiUrl } from '../../services/api.url.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = ['jobTitle', 'propertyType', 'jobStart', 'postExpiry', 'status', 'actions'];
  adminList: any[] = []
  dataSource = new MatTableDataSource(this.adminList);


  pageNo: number = 1;
  loader: boolean;
  dialogResult: any;
  jobList: any;

  constructor(
    private apiAuth: ApiAuthService,
    private cnfbox: ConfirmBoxService
  ) { }

  ngOnInit() {
    this.getUsers(this.pageNo);
  }

  getUsers(pageNo) {
    this.loader = true;
    this.apiAuth.authGet(`${ApiUrl.getAllJobs}/?page=${pageNo}`).subscribe(res => {
      this.loader = false;

      this.jobList = res.jobList;
      this.dataSource = new MatTableDataSource(this.jobList);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
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
