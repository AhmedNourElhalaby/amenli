import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(url: string) {
    console.log('here');
    this.router.navigate(['/','insurance'], {queryParams: {page: url}}).then(res => {
      window.scrollTo(0,0);
    });
  }

}
