import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-property',
  templateUrl: './job-property.component.html',
  styleUrls: ['./job-property.component.scss']
})
export class JobPropertyComponent implements OnInit {

  availableColors: any[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
