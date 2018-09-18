import { Component, ViewChild, ElementRef } from '@angular/core';
import { navItems } from './../../_nav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
    @ViewChild('header') private header: ElementRef
    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    constructor(
        private router: Router
    ) {
        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
        });

        this.changes.observe(<Element>this.element, {
            attributes: true
        });
    }
    logout() {
        localStorage.clear()
        this.router.navigate(['/login'])
    }
    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        console.log(this.header);

    }
}
