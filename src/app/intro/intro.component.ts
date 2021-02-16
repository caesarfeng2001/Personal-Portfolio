import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  rcafLogo: string;
  safutureLogo: string;
  txt = "Hello, I'm Caesar."; 
  display = "";
  constructor() {
    this.rcafLogo = "/assets/company_logos/RCAF.jpg";
    this.safutureLogo = "/assets/company_logos/safuture.png";
   }
 
  typeWriter(that) {
    let total_length = that.txt.length;
    let curr_length = that.display.length;
    if (curr_length < total_length) {
      //console.log("here")
      that.display += that.txt[curr_length];
      setTimeout(that.typeWriter, 50, that);
    }
  }

  ngOnInit(): void {
    this.typeWriter(this);
  }

  

}
