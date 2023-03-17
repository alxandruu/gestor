import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.scss']
})
export class EmployeePortalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public slider(txt: string = ''): void {
    let mainPage: any = document.querySelector('.main-page');
    let slider: any = document.querySelector('.slider');


    let x: any = document.querySelector(`.${txt}`);
    x.classList.toggle("close");

    mainPage.classList.toggle("out");
  }


}
