import { Component, OnInit } from '@angular/core';
import { ApiAuthService } from '../../services/api.auth.service';
import { ApiUrl } from '../../services/api.url.service';

@Component({
  selector: 'app-job-property',
  templateUrl: './job-property.component.html',
  styleUrls: ['./job-property.component.scss']
})
export class JobPropertyComponent implements OnInit {
  jobTypes: any[];
  roomLevels: any[];
  jobTraders: any[];
  jobWorks: any[];
  availableColors: any[] = [
    { name: 'level 1 level 1 level 1', color: undefined },
    { name: 'level 2', color: 'primary' },
    { name: 'level 3', color: 'accent' },
    { name: 'level 4', color: 'warn' }
  ];
  loader: boolean;
  constructor(private apiAuth: ApiAuthService) { }

  ngOnInit() {

    this.jobTypes = this.availableColors;
    this.roomLevels = this.availableColors;
    // this.jobTraders = this.availableColors;
    // this.jobWorks = []//this.availableColors;
    this.getAllJobDropdowns();
  }

  getAllJobDropdowns() {
    this.loader = true;
    this.apiAuth.authGet(`${ApiUrl.getAllJobDropdowns}`).subscribe(res => {
      this.loader = false;
      if (res.success) {
        this.jobTraders = res.dropdownValues.jobTrade;
        this.jobWorks = res.dropdownValues.jobWork;
      }
      console.log(res);
    }, err => {
      this.loader = false;
      console.log(err);
      throw err
    })
  }

  removeRoomLevel(id) {
    console.log('removeRoomLevel', id)
  }

  addRoomLevel(id) {
    console.log(id);
  }

}
