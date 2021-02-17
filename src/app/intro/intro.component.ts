import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  txt = "I am a happy guy"; 
  display = "";
  me : string;

  constructor() {
    this.me = "/assets/company_logos/me.jpg";
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
