import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  rcafLogo: string;
  safutureLogo: string;
  me : string;
  constructor() { 
    this.rcafLogo = "/assets/company_logos/RCAF.jpg";
    this.safutureLogo = "/assets/company_logos/safuture.png";
    this.me = "/assets/company_logos/me.jpg";
  }

  ngOnInit(): void {
  }

}
