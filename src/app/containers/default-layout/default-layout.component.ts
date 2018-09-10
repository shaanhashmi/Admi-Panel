import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
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
}
