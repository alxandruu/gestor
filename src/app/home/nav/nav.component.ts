import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public time: string = moment().format('HH:mm');
  constructor() {
    setInterval(() => {
      this.time = moment().format('HH:mm');
    }, 1000);
  }

  ngOnInit(): void {

  }
  public expandNav() {
    let sidebar: any = document.querySelector('.sidebar');
    let parent: any = document.querySelector('.sidebar')?.parentElement;
    sidebar.classList.toggle("active");
    parent.classList.toggle("active");
  }

  public logout() {

  }
}
