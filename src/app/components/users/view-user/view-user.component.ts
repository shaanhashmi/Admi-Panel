import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiUrl } from '../../../services/api.url.service';
import { ApiAuthService } from '../../../services/api.auth.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  userId: string;
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiAuth: ApiAuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.userId = params.get('id');
      this.apiAuth.getDataById(`${ApiUrl.manageUser}/${this.userId}`)
        .subscribe(user => {
          if (user && user['userDetail']) {
            this.user = user['userDetail']
          } else {
            this.user = user
          }
          console.log("user", this.user)
        })
    })
  }

  onUpdate(user) {
    this.apiAuth.setData(user)
    this.router.navigate(['admin/addusers', user._id])
  }

}
