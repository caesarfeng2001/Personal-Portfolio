import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  introHeight : number;
  display = "";
  content = [];
  // Current sentence being processed
  _PART : any;
  // Character number of the current sentence being processed 
  _PART_INDEX : any;
  // Holds the handle returned from setInterval
  _INTERVAL_VAL : any;
  // Element that holds the text
  _ELEMENT : any;
  // Cursor element 
  _CURSOR : any;


  constructor() {
  }
 
  /*
  typeWriter(that) {
    let total_length = that.txt.length;
    let curr_length = that.display.length;
    if (curr_length < total_length) {
      //console.log("here")
      that.display += that.txt[curr_length];
      setTimeout(that.typeWriter, 50, that);
    }
  }
  */

  // Implements typing effect
Type() { 
	// Get substring with 1 characater added
	let text = this.content[this._PART].substring(0, this._PART_INDEX + 1);
	this._ELEMENT.innerHTML = text;
	this._PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === this.content[this._PART]) {
		// Hide the cursor
		// this._CURSOR.style.display = 'none';

		clearInterval(this._INTERVAL_VAL);
		setTimeout(() => {
			this._INTERVAL_VAL = setInterval(() => {this.Delete()}, 50);
		}, 1000);
	}
}

// Implements deleting effect
Delete() {
	// Get substring with 1 characater deleted
	let text =  this.content[this._PART].substring(0, this._PART_INDEX - 1);
	this._ELEMENT.innerHTML = text;
	this._PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(this._INTERVAL_VAL);

		// If current sentence was last then display the first one, else move to the next
		if(this._PART == (this.content.length - 1))
			this._PART = 0;
		else
			this._PART++;
		
		this._PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(() => {
			this._CURSOR.style.display = 'inline-block';
			this._INTERVAL_VAL = setInterval(() => {this.Type()}, 100);
		}, 200);
	}
}


  getIntroHeight() {
      let intro = document.getElementById("intro");
      this.introHeight = intro.clientHeight;
  }

  ngOnInit(): void {
    //this.typeWriter(this);
    this.getIntroHeight();
    this.content = [ 
      "a Computer Science Student.", 
      "a Software Engineer.", 
      "a Team-Player.", 
      "an Analytical Thinker."
    ];
    this._PART = 0;
    this._PART_INDEX = 0;
    this._ELEMENT = document.querySelector("#text");
    this._CURSOR = document.querySelector("#cursor");
    this._INTERVAL_VAL = setInterval(() => {this.Type()}, 100);
  }

  

}
