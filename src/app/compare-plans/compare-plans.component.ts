import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-compare-plans',
  templateUrl: './compare-plans.component.html',
  styleUrls: ['./compare-plans.component.css']
})
export class ComparePlansComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
  });
  }

}
