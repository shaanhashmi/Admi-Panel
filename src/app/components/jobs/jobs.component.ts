import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { ApiAuthService } from '../../services/api.auth.service';
import { ConfirmBoxService } from '../modals/confirm-box/confirm-box.service';
import { ApiUrl } from '../../services/api.url.service';
import { pipe } from '@angular/core/src/render3/pipe';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = ['jobTitle', 'propertyType', 'jobStart', 'postExpiry', 'status', 'actions'];
  jobList: any[] = []
  dataSource = new MatTableDataSource(this.jobList);


  pageNo: number = 1;
  loader: boolean;
  dialogResult: any;
  selected: 'ongoing'
  jobStatus: any[] = ["ongoing", "completed", "posted", "inactive"];

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

  selectionChange(ev: MatSelect, jobObj) {
    console.log(ev.value, jobObj._id);

    return
    this.apiAuth.authUpdate(ApiUrl.changeStatus, ev.value)
      .subscribe((res: Response) => {
        console.log(res);

      }, (err: Error) => {
        console.log(err);

      })
  }

}
