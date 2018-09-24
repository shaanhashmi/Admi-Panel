import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatSelect } from '@angular/material';
import { ApiAuthService } from '../../services/api.auth.service';
import { ConfirmBoxService } from '../modals/confirm-box/confirm-box.service';
import { ApiUrl } from '../../services/api.url.service';
import { pipe } from '@angular/core/src/render3/pipe';
import { Router } from '@angular/router';

@Component({
    selector: 'app-jobs',
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    displayedColumns: string[] = ['jobTitle', 'propertyType', 'jobStart', 'postExpiry', 'jobStatus', 'actions'];
    jobList: any[] = []
    dataSource = new MatTableDataSource(this.jobList);


    pageNo: number = 1;
    loader: boolean;
    dialogResult: any;
    selected: 'ongoing'
    jobStatus: any[] = [
        { bgcolor: 'bg-warning', status: "ongoing" },
        { bgcolor: 'bg-success', status: "completed" },
        { bgcolor: "bg-primary", status: "posted" },
        { bgcolor: "bg-light", status: "inactive" }
    ];


    constructor(
        private apiAuth: ApiAuthService,
        private cnfbox: ConfirmBoxService,
        private router: Router,
        private authService: ApiAuthService
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
    color(jobObj) {
        console.log(jobObj.jobStatus);

        this.jobStatus.forEach(element => {
            if (element.status === jobObj.jobStatus) {
                console.log(element.bgcolor);
                return 'bg-sucess'
            }
        });
    }

    selectionChange(ev: MatSelect, jobObj) {
        console.log(ev.value, jobObj);

        return
        this.apiAuth.authUpdate(ApiUrl.changeStatus, ev.value)
            .subscribe((res: Response) => {
                console.log(res);

            }, (err: Error) => {
                console.log(err);

            })
    }
    onView(job) {
        this.authService.setJob(job)
        this.router.navigate(['admin/jobs', job._id])
    }

}
