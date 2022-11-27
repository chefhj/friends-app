import { Component } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {

  onHomePage: boolean;

  constructor (private router: Router) {

  }
  ngOnInit() {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {
        this.onHomePage = !event.url.includes('visualizations');
      });
  }

  //change route to /visualization
  goToVisuals() {
    this.router.navigate(['visualizations']);
  }

  //change route to /home
  goHome() {
    this.router.navigate(['home']);
  }
}
