import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    // tslint:disable-next-line
    selector: 'body',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private activateRoute: ActivatedRoute,
        private titleServive: Title,
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                let title = this.getTitle(this.activateRoute.snapshot.root)
                this.titleServive.setTitle(title)
                return;
            }
            window.scrollTo(0, 0);
        });
    }


    private getTitle(routeSnapshot: ActivatedRouteSnapshot, title: string = '') {
        title = routeSnapshot.data && routeSnapshot.data['title'] ? routeSnapshot.data['title'] : title;
        if (routeSnapshot.firstChild) {
            title = this.getTitle(routeSnapshot.firstChild, title);
        }
        return title;
    }
}
