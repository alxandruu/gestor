import { Component, OnInit } from '@angular/core';

// interface Bread {
//   name: string;
//   url: string;
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  // public breads: any[] = this.updateBreadCumb();
  constructor() {

  }

  ngOnInit(): void {
  }

  // private updateBreadCumb(): Bread[] {
  //   let pathnameStr = location.pathname;
  //   let pathname: string[] = pathnameStr.substr(1, pathnameStr.length).split('/');
  //   let out: Bread[] = [];
  //   let url = `${location.protocol}//${location.hostname}:${location.port}/`;

  //   for (let i: number = 0; i < pathname.length; i++) {
  //     url += pathname + '/';
  //     out.push({ name: pathname[i], url: url });
  //   }

  //   return out;
  // }

}
