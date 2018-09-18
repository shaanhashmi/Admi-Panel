
import { Component, ViewChild, ElementRef } from '@angular/core';
import { navItems } from './../../_nav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {

    @ViewChild('header') private header: ElementRef;
    date = new Date()
    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement = document.body;
    constructor(
        private router: Router,
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

    ngAfterViewInit(): void {
        let button2 = document.querySelectorAll('button')[2];
        let button3 = document.querySelectorAll('button')[3];
        button2.parentNode.removeChild(button2)
        button3.parentNode.removeChild(button3)
    }
}
