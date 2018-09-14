import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'register.component.html'
})
export class RegisterComponent {
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    constructor() { }
    ngAfterViewInit() {
        this.scrollToBottom()
    }
    scrollToBottom(): void {
        window.scrollBy(0, this.myScrollContainer.nativeElement.scrollHeight);
    }
}
